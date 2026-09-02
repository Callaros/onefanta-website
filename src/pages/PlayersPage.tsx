import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  Loader2,
  RotateCcw,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  Users,
} from 'lucide-react';
import Background from '../components/Background';
import SiteHeader from '../components/SiteHeader';
import type { Locale } from '../lib/i18n';
import { supabase } from '../lib/supabase';
import type { SheetData } from 'write-excel-file/browser';

type Player = {
  id: string;
  common_name: string;
  first_name: string;
  second_name: string;
  role: string;
  player_value: number;
  image: string | null;
  team_id: string;
  team_name: string;
};

type SortKey = 'name' | 'team' | 'role' | 'value';
type SortDirection = 'asc' | 'desc';

const PAGE_SIZE = 50;

const copy = {
  it: {
    badge: 'Premier League', title: 'Lista giocatori',
    intro: 'Cerca, filtra e confronta tutti i giocatori disponibili su OneFanta.',
    search: 'Cerca un giocatore', searchPlaceholder: 'Nome o cognome…', team: 'Squadra', role: 'Ruolo',
    allTeams: 'Tutte le squadre', allRoles: 'Tutti i ruoli',
    minValue: 'Valore minimo', maxValue: 'Valore massimo', filters: 'Filtri', reset: 'Azzera filtri',
    results: 'giocatori', download: 'Scarica Excel', downloading: 'Creazione Excel…',
    player: 'Giocatore', value: 'Valore', noResults: 'Nessun giocatore trovato',
    noResultsBody: 'Prova a modificare o azzerare i filtri selezionati.',
    loading: 'Caricamento giocatori…', errorTitle: 'Non riusciamo a caricare i giocatori',
    errorBody: 'Riprova tra poco. Se il problema continua, verifica che la funzione Supabase pubblica sia stata installata.', retry: 'Riprova',
    page: 'Pagina', of: 'di', previous: 'Pagina precedente', next: 'Pagina successiva',
    exportSheet: 'Giocatori', exportDate: 'Esportato il', exportedPlayers: 'Giocatori esportati',
  },
  en: {
    badge: 'Premier League', title: 'Player list',
    intro: 'Search, filter and compare every player available on OneFanta.',
    search: 'Search for a player', searchPlaceholder: 'First or last name…', team: 'Team', role: 'Position',
    allTeams: 'All teams', allRoles: 'All positions',
    minValue: 'Minimum value', maxValue: 'Maximum value', filters: 'Filters', reset: 'Reset filters',
    results: 'players', download: 'Download Excel', downloading: 'Creating Excel…',
    player: 'Player', value: 'Value', noResults: 'No players found',
    noResultsBody: 'Try changing or clearing the selected filters.',
    loading: 'Loading players…', errorTitle: 'We could not load the players',
    errorBody: 'Try again shortly. If the issue persists, check that the public Supabase function has been installed.', retry: 'Try again',
    page: 'Page', of: 'of', previous: 'Previous page', next: 'Next page',
    exportSheet: 'Players', exportDate: 'Exported on', exportedPlayers: 'Exported players',
  },
} as const;

const normalise = (value: string) => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const roleLabel = (role: string, locale: Locale) => {
  const key = normalise(role);
  const labels: Record<string, [string, string]> = {
    '1': ['Portiere', 'Goalkeeper'], gk: ['Portiere', 'Goalkeeper'], goalkeeper: ['Portiere', 'Goalkeeper'], portiere: ['Portiere', 'Goalkeeper'], p: ['Portiere', 'Goalkeeper'],
    '2': ['Difensore', 'Defender'], def: ['Difensore', 'Defender'], defender: ['Difensore', 'Defender'], difensore: ['Difensore', 'Defender'], d: ['Difensore', 'Defender'],
    '3': ['Centrocampista', 'Midfielder'], mid: ['Centrocampista', 'Midfielder'], midfielder: ['Centrocampista', 'Midfielder'], centrocampista: ['Centrocampista', 'Midfielder'], c: ['Centrocampista', 'Midfielder'],
    '4': ['Attaccante', 'Forward'], fwd: ['Attaccante', 'Forward'], forward: ['Attaccante', 'Forward'], attacker: ['Attaccante', 'Forward'], attaccante: ['Attaccante', 'Forward'], a: ['Attaccante', 'Forward'],
  };
  return labels[key]?.[locale === 'it' ? 0 : 1] ?? role;
};

const roleClass = (role: string) => {
  const key = normalise(role);
  if (['1', 'gk', 'goalkeeper', 'portiere', 'p'].includes(key)) return 'bg-amber-400/10 text-amber-300 border-amber-400/20';
  if (['2', 'def', 'defender', 'difensore', 'd'].includes(key)) return 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20';
  if (['3', 'mid', 'midfielder', 'centrocampista', 'c'].includes(key)) return 'bg-sky-400/10 text-sky-300 border-sky-400/20';
  if (['4', 'fwd', 'forward', 'attacker', 'attaccante', 'a'].includes(key)) return 'bg-rose-400/10 text-rose-300 border-rose-400/20';
  return 'bg-white/5 text-dark-200 border-white/10';
};

const playerName = (player: Player) => player.common_name.trim() || `${player.first_name} ${player.second_name}`.trim();

function PlayerAvatar({ player }: { player: Player }) {
  const [failed, setFailed] = useState(false);
  const initials = playerName(player).split(/\s+/).slice(0, 2).map((part) => part[0] ?? '').join('').toUpperCase();
  return (
    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-electric-500/25 to-dark-800">
      {player.image && !failed ? (
        <img src={player.image} alt="" className="h-full w-full object-cover" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-xs font-bold text-electric-200">{initials || '?'}</span>
      )}
    </div>
  );
}

function SortButton({ label, sortKey, activeKey, direction, onSort }: {
  label: string; sortKey: SortKey; activeKey: SortKey; direction: SortDirection; onSort: (key: SortKey) => void;
}) {
  const active = activeKey === sortKey;
  const Icon = active ? (direction === 'asc' ? ArrowUp : ArrowDown) : ArrowUpDown;
  return (
    <button type="button" onClick={() => onSort(sortKey)} className="inline-flex items-center gap-1.5 text-left hover:text-white" aria-pressed={active}>
      {label}<Icon className={`h-3.5 w-3.5 ${active ? 'text-electric-400' : 'text-dark-500'}`} />
    </button>
  );
}

function PlayersPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [team, setTeam] = useState('');
  const [role, setRole] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('value');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [page, setPage] = useState(1);
  const [exporting, setExporting] = useState(false);

  const loadPlayers = async () => {
    setLoading(true);
    setError(false);
    const { data, error: requestError } = await supabase.rpc('get_public_player_directory');
    if (requestError) {
      setError(true);
      setPlayers([]);
    } else {
      const cleaned = ((data ?? []) as Player[])
        .map((player) => ({
          ...player,
          player_value: Number(player.player_value) || 0,
          common_name: player.common_name ?? '', first_name: player.first_name ?? '', second_name: player.second_name ?? '',
          role: player.role ?? '', team_name: player.team_name ?? '',
        }))
        .filter((player) => Boolean(player.team_id && player.team_name));
      setPlayers(cleaned);
    }
    setLoading(false);
  };

  useEffect(() => { void loadPlayers(); }, []);

  const teams = useMemo(() => [...new Set(players.map((player) => player.team_name).filter(Boolean))].sort((a, b) => a.localeCompare(b)), [players]);
  const roles = useMemo(() => [...new Set(players.map((player) => player.role).filter(Boolean))].sort((a, b) => roleLabel(a, locale).localeCompare(roleLabel(b, locale))), [players, locale]);
  const filteredPlayers = useMemo(() => {
    const query = normalise(search.trim());
    const minimum = minValue === '' ? null : Number(minValue);
    const maximum = maxValue === '' ? null : Number(maxValue);
    const rows = players.filter((player) => {
      if (query && !normalise(playerName(player)).includes(query)) return false;
      if (team && player.team_name !== team) return false;
      if (role && player.role !== role) return false;
      if (minimum !== null && player.player_value < minimum) return false;
      if (maximum !== null && player.player_value > maximum) return false;
      return true;
    });
    return rows.sort((a, b) => {
      const values: Record<SortKey, [string | number, string | number]> = {
        name: [playerName(a), playerName(b)], team: [a.team_name, b.team_name], role: [roleLabel(a.role, locale), roleLabel(b.role, locale)],
        value: [a.player_value, b.player_value],
      };
      const [left, right] = values[sortKey];
      const result = typeof left === 'number' && typeof right === 'number' ? left - right : String(left).localeCompare(String(right), locale);
      return sortDirection === 'asc' ? result : -result;
    });
  }, [players, search, team, role, minValue, maxValue, sortKey, sortDirection, locale]);

  useEffect(() => { setPage(1); }, [search, team, role, minValue, maxValue, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filteredPlayers.length / PAGE_SIZE));
  const visiblePlayers = filteredPlayers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilters = Boolean(search || team || role || minValue || maxValue);

  const resetFilters = () => { setSearch(''); setTeam(''); setRole(''); setMinValue(''); setMaxValue(''); };
  const changeSort = (key: SortKey) => {
    if (sortKey === key) setSortDirection((current) => current === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection(key === 'value' ? 'desc' : 'asc'); }
  };

  const exportExcel = async () => {
    if (!filteredPlayers.length || exporting) return;
    setExporting(true);
    try {
      const { default: writeXlsxFile } = await import('write-excel-file/browser');
      const header = (value: string) => ({
        value, fontWeight: 'bold' as const, textColor: '#ffffff', backgroundColor: '#1a6eea', align: 'center' as const,
      });
      const sheetData: SheetData = [
        [header(t.player), header(t.team), header(t.role), header(t.value)],
        ...filteredPlayers.map((player) => [
          playerName(player), player.team_name, roleLabel(player.role, locale),
          { value: player.player_value, type: Number, format: '0.00', align: 'right' as const },
        ]),
        [],
        [`${t.exportedPlayers}: ${filteredPlayers.length}`],
        [`${t.exportDate}: ${new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())}`],
      ];
      await writeXlsxFile(sheetData, {
        sheet: t.exportSheet,
        columns: [{ width: 30 }, { width: 24 }, { width: 20 }, { width: 14 }],
        stickyRowsCount: 1,
      }, { fontFamily: 'Arial', fontSize: 11 }).toFile(
        `onefanta-${locale === 'it' ? 'giocatori' : 'players'}-${new Date().toISOString().slice(0, 10)}.xlsx`,
      );
    } finally { setExporting(false); }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-dark-950 text-white">
      <Background />
      <SiteHeader locale={locale} />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6">
        <header className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/25 bg-electric-500/10 px-3 py-1.5 text-sm font-medium text-electric-300">
            <span className="h-2 w-2 rounded-full bg-electric-400" />{t.badge}
          </div>
          <h1 className="mb-4 pb-3 bg-gradient-to-r from-white via-electric-100 to-electric-300 bg-clip-text text-4xl font-bold leading-[1.2] text-transparent sm:text-5xl">{t.title}</h1>
          <p className="text-lg leading-relaxed text-dark-300">{t.intro}</p>
        </header>

        <section className="mb-6 rounded-2xl border border-white/10 bg-dark-900/70 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-5" aria-label={t.filters}>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-dark-200"><SlidersHorizontal className="h-4 w-4 text-electric-400" />{t.filters}</div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <label className="relative sm:col-span-2">
              <span className="sr-only">{t.search}</span><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-500" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t.searchPlaceholder} className="h-11 w-full rounded-xl border border-white/10 bg-dark-950/80 pl-10 pr-3 text-sm outline-none transition focus:border-electric-500/60 focus:ring-2 focus:ring-electric-500/10" />
            </label>
            <label className="relative"><span className="sr-only">{t.team}</span><select value={team} onChange={(event) => setTeam(event.target.value)} className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-dark-950/80 pl-3 pr-11 text-sm outline-none focus:border-electric-500/60"><option value="">{t.allTeams}</option>{teams.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-300" aria-hidden="true" /></label>
            <label className="relative"><span className="sr-only">{t.role}</span><select value={role} onChange={(event) => setRole(event.target.value)} className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-dark-950/80 pl-3 pr-11 text-sm outline-none focus:border-electric-500/60"><option value="">{t.allRoles}</option>{roles.map((item) => <option key={item} value={item}>{roleLabel(item, locale)}</option>)}</select><ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-300" aria-hidden="true" /></label>
            <div className="grid grid-cols-2 gap-2">
              <label><span className="sr-only">{t.minValue}</span><input type="number" min="0" value={minValue} onChange={(event) => setMinValue(event.target.value)} placeholder="Min" className="h-11 w-full rounded-xl border border-white/10 bg-dark-950/80 px-3 text-sm outline-none focus:border-electric-500/60" /></label>
              <label><span className="sr-only">{t.maxValue}</span><input type="number" min="0" value={maxValue} onChange={(event) => setMaxValue(event.target.value)} placeholder="Max" className="h-11 w-full rounded-xl border border-white/10 bg-dark-950/80 px-3 text-sm outline-none focus:border-electric-500/60" /></label>
            </div>
          </div>
        </section>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-dark-400"><strong className="text-white">{filteredPlayers.length}</strong> {t.results}</p>
          <div className="flex gap-2">
            {hasFilters && <button type="button" onClick={resetFilters} className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm font-medium text-dark-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"><RotateCcw className="h-4 w-4" />{t.reset}</button>}
            <button type="button" onClick={() => void exportExcel()} disabled={!filteredPlayers.length || exporting} className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-4 text-sm font-semibold transition hover:from-electric-400 hover:to-electric-500 disabled:cursor-not-allowed disabled:opacity-50">
              {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}{exporting ? t.downloading : t.download}
            </button>
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-dark-900/70 shadow-2xl shadow-black/10 backdrop-blur-sm">
          {loading ? (
            <div className="flex min-h-80 flex-col items-center justify-center gap-3 text-dark-400"><Loader2 className="h-8 w-8 animate-spin text-electric-400" /><p>{t.loading}</p></div>
          ) : error ? (
            <div className="flex min-h-80 flex-col items-center justify-center px-6 text-center"><ShieldAlert className="mb-4 h-10 w-10 text-amber-300" /><h2 className="mb-2 text-lg font-semibold">{t.errorTitle}</h2><p className="mb-5 max-w-lg text-sm text-dark-400">{t.errorBody}</p><button type="button" onClick={() => void loadPlayers()} className="rounded-xl bg-electric-600 px-5 py-2.5 text-sm font-semibold hover:bg-electric-500">{t.retry}</button></div>
          ) : filteredPlayers.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center px-6 text-center"><Users className="mb-4 h-10 w-10 text-dark-500" /><h2 className="mb-2 text-lg font-semibold">{t.noResults}</h2><p className="mb-5 text-sm text-dark-400">{t.noResultsBody}</p>{hasFilters && <button type="button" onClick={resetFilters} className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">{t.reset}</button>}</div>
          ) : (
            <>
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                  <thead className="border-b border-white/10 bg-dark-950/60 text-xs uppercase tracking-wider text-dark-400"><tr>
                    <th className="px-5 py-4"><SortButton label={t.player} sortKey="name" activeKey={sortKey} direction={sortDirection} onSort={changeSort} /></th>
                    <th className="px-5 py-4"><SortButton label={t.team} sortKey="team" activeKey={sortKey} direction={sortDirection} onSort={changeSort} /></th>
                    <th className="px-5 py-4"><SortButton label={t.role} sortKey="role" activeKey={sortKey} direction={sortDirection} onSort={changeSort} /></th>
                    <th className="px-5 py-4 text-right"><SortButton label={t.value} sortKey="value" activeKey={sortKey} direction={sortDirection} onSort={changeSort} /></th>
                  </tr></thead>
                  <tbody className="divide-y divide-white/5">{visiblePlayers.map((player) => <tr key={player.id} className="transition hover:bg-white/[0.035]">
                    <td className="px-5 py-3"><div className="flex items-center gap-3"><PlayerAvatar player={player} /><span className="font-semibold">{playerName(player)}</span></div></td>
                    <td className="px-5 py-3 text-sm text-dark-200">{player.team_name || '—'}</td>
                    <td className="px-5 py-3"><span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${roleClass(player.role)}`}>{roleLabel(player.role, locale) || '—'}</span></td>
                    <td className="px-5 py-3 text-right font-mono font-bold text-electric-300">{player.player_value.toLocaleString(locale)}</td>
                  </tr>)}</tbody>
                </table>
              </div>
              <div className="divide-y divide-white/5 md:hidden">{visiblePlayers.map((player) => <article key={player.id} className="p-4">
                <div className="mb-3 flex items-center gap-3"><PlayerAvatar player={player} /><div className="min-w-0 flex-1"><h2 className="truncate font-semibold">{playerName(player)}</h2><p className="truncate text-sm text-dark-400">{player.team_name || '—'}</p></div><span className="font-mono text-lg font-bold text-electric-300">{player.player_value.toLocaleString(locale)}</span></div>
                <div><span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${roleClass(player.role)}`}>{roleLabel(player.role, locale) || '—'}</span></div>
              </article>)}</div>
            </>
          )}
        </section>

        {!loading && !error && filteredPlayers.length > 0 && <nav className="mt-5 flex items-center justify-between" aria-label="Pagination">
          <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} aria-label={t.previous} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:bg-white/5 disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
          <p className="text-sm text-dark-400">{t.page} <strong className="text-white">{page}</strong> {t.of} {totalPages}</p>
          <button type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} aria-label={t.next} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:bg-white/5 disabled:opacity-30"><ChevronRight className="h-5 w-5" /></button>
        </nav>}
      </main>
    </div>
  );
}

export default PlayersPage;
