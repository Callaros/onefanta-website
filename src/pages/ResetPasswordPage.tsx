import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Circle,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  Lock,
  ShieldCheck,
} from 'lucide-react';
import Background from '../components/Background';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { supabase } from '../lib/supabase';
import { localizedPath, type Locale } from '../lib/i18n';

type RecoveryStatus = 'preparing' | 'ready' | 'missing' | 'success';
type SubmitStatus = 'idle' | 'loading';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return '';
};

const getPasswordChecks = (value: string, locale: Locale) => [
  {
    label: locale === 'it' ? 'Almeno 6 caratteri' : 'At least 6 characters',
    isValid: value.length >= 6,
  },
  {
    label: locale === 'it' ? 'Almeno una lettera minuscola' : 'At least one lowercase letter',
    isValid: /[a-z]/.test(value),
  },
  {
    label: locale === 'it' ? 'Almeno una lettera maiuscola' : 'At least one uppercase letter',
    isValid: /[A-Z]/.test(value),
  },
  {
    label: locale === 'it' ? 'Almeno un numero' : 'At least one number',
    isValid: /[0-9]/.test(value),
  },
];

function ResetPasswordPage({ locale }: { locale: Locale }) {
  const isItalian = locale === 'it';
  const [recoveryStatus, setRecoveryStatus] = useState<RecoveryStatus>('preparing');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const cleanRecoveryUrl = () => {
      window.history.replaceState({}, document.title, window.location.pathname);
    };

    const prepareRecoverySession = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
      const redirectError = queryParams.get('error_description') || hashParams.get('error_description');

      if (redirectError) {
        if (!isMounted) return;
        setErrorMessage(decodeURIComponent(redirectError.replace(/\+/g, ' ')));
        setRecoveryStatus('missing');
        return;
      }

      try {
        const tokenHash = queryParams.get('token_hash');
        const type = queryParams.get('type');
        const code = queryParams.get('code');
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');

        if (tokenHash && type === 'recovery') {
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: 'recovery',
          });
          if (error) throw error;

          if (data.session) {
            const { error: sessionError } = await supabase.auth.setSession({
              access_token: data.session.access_token,
              refresh_token: data.session.refresh_token,
            });
            if (sessionError) throw sessionError;
          }

          cleanRecoveryUrl();
        } else if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          cleanRecoveryUrl();
        } else if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
          if (error) throw error;
          cleanRecoveryUrl();
        }

        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        if (!isMounted) return;
        if (data.session) {
          setRecoveryStatus('ready');
        } else {
          setErrorMessage(isItalian ? 'Link non valido o scaduto. Richiedi un nuovo reset password dall’app.' : 'Invalid or expired link. Request a new password reset from the app.');
          setRecoveryStatus('missing');
        }
      } catch (error) {
        console.error('Reset password recovery failed', error);
        if (!isMounted) return;
        setErrorMessage(isItalian ? 'Non siamo riusciti a verificare il link di reset. Richiedine uno nuovo dall’app.' : 'We could not verify the reset link. Request a new one from the app.');
        setRecoveryStatus('missing');
      }
    };

    prepareRecoverySession();

    return () => {
      isMounted = false;
    };
  }, [isItalian]);

  const passwordChecks = getPasswordChecks(password, locale);
  const isPasswordValid = passwordChecks.every((check) => check.isValid);

  const validateForm = () => {
    if (!password) {
      return isItalian ? 'Inserisci la nuova password.' : 'Enter your new password.';
    }

    if (!isPasswordValid) {
      return isItalian ? 'La password deve rispettare tutti i requisiti indicati.' : 'The password must meet all the listed requirements.';
    }

    if (password !== confirmPassword) {
      return isItalian ? 'La conferma deve essere uguale alla nuova password.' : 'The confirmation must match the new password.';
    }

    return '';
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setRecoveryStatus('success');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Reset password update failed', error);
      const authMessage = getErrorMessage(error);
      setErrorMessage(
        authMessage
          ? `${isItalian ? 'Aggiornamento non riuscito' : 'Update failed'}: ${authMessage}`
          : (isItalian ? 'Aggiornamento non riuscito. Verifica il link ricevuto via email e riprova.' : 'Update failed. Check the link received by email and try again.')
      );
    } finally {
      setSubmitStatus('idle');
    }
  };

  const isSubmitting = submitStatus === 'loading';
  const canShowForm = recoveryStatus === 'ready';

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <main className="min-h-screen px-6 py-10 flex items-center justify-center">
        <section className="w-full max-w-xl text-center">
          <div className="mb-10 flex items-center justify-between gap-4">
          <a href={localizedPath(locale, '/')} className="inline-flex items-center justify-center" aria-label="OneFanta home">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-14 w-auto rounded-xl"
            />
          </a>
          <LanguageSwitcher locale={locale} compact />
          </div>

          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-7 md:p-10 shadow-2xl shadow-electric-500/10">
            <div className="mx-auto mb-6 w-16 h-16 bg-electric-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
              {recoveryStatus === 'success' ? (
                <CheckCircle2 className="w-9 h-9 text-electric-300" />
              ) : (
                <KeyRound className="w-9 h-9 text-electric-300" />
              )}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-electric-300" />
              <span className="text-electric-300 text-sm font-medium">Reset password</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {recoveryStatus === 'success' ? (isItalian ? 'Password aggiornata' : 'Password updated') : (isItalian ? 'Imposta una nuova password' : 'Set a new password')}
            </h1>

            {recoveryStatus === 'preparing' && (
              <div className="flex flex-col items-center gap-4 py-6">
                <Loader2 className="w-8 h-8 text-electric-300 animate-spin" />
                <p className="text-dark-300 text-lg leading-relaxed">
                  {isItalian ? 'Stiamo verificando il link ricevuto via email.' : 'We are verifying the link you received by email.'}
                </p>
              </div>
            )}

            {canShowForm && (
              <>
                <p className="text-dark-300 text-lg leading-relaxed mb-8">
                  {isItalian ? 'Scegli una password sicura per il tuo account OneFanta.' : 'Choose a secure password for your OneFanta account.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <label className="block">
                    <span className="block text-sm font-medium text-dark-200 mb-2">{isItalian ? 'Nuova password' : 'New password'}</span>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full pl-12 pr-12 py-4 bg-dark-900/60 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all"
                        placeholder={isItalian ? 'Almeno 6 caratteri' : 'At least 6 characters'}
                        autoComplete="new-password"
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((isVisible) => !isVisible)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-white focus:outline-none focus:text-electric-300 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label={showPassword ? (isItalian ? 'Nascondi nuova password' : 'Hide new password') : (isItalian ? 'Mostra nuova password' : 'Show new password')}
                        aria-pressed={showPassword}
                        disabled={isSubmitting}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </label>

                  <label className="block">
                    <span className="block text-sm font-medium text-dark-200 mb-2">{isItalian ? 'Conferma nuova password' : 'Confirm new password'}</span>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="w-full pl-12 pr-12 py-4 bg-dark-900/60 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all"
                        placeholder={isItalian ? 'Ripeti la password' : 'Repeat the password'}
                        autoComplete="new-password"
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((isVisible) => !isVisible)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-white focus:outline-none focus:text-electric-300 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label={showConfirmPassword ? (isItalian ? 'Nascondi conferma password' : 'Hide password confirmation') : (isItalian ? 'Mostra conferma password' : 'Show password confirmation')}
                        aria-pressed={showConfirmPassword}
                        disabled={isSubmitting}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </label>

                  <div className="grid gap-2 rounded-xl border border-white/10 bg-dark-900/40 p-4">
                    {passwordChecks.map((check) => (
                      <div
                        key={check.label}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                          check.isValid ? 'text-green-400' : 'text-white'
                        }`}
                      >
                        {check.isValid ? (
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 flex-shrink-0 text-white/70" />
                        )}
                        <span>{check.label}</span>
                      </div>
                    ))}
                  </div>

                  {errorMessage && (
                    <div className="flex items-start gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {isItalian ? 'Aggiorna password' : 'Update password'}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            {recoveryStatus === 'missing' && (
              <>
                <p className="text-dark-300 text-lg leading-relaxed mb-6">
                  {errorMessage}
                </p>
                <a
                  href="https://open.onefanta.com/auth/reset-password"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
                >
                  {isItalian ? 'Torna a OneFanta' : 'Return to OneFanta'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </>
            )}

            {recoveryStatus === 'success' && (
              <>
                <p className="text-dark-300 text-lg leading-relaxed mb-8">
                  {isItalian ? 'La tua password è stata aggiornata. Ora puoi tornare nell’app e accedere con le nuove credenziali.' : 'Your password has been updated. You can now return to the app and sign in with your new credentials.'}
                </p>
                <a
                  href="https://open.onefanta.com/auth/reset-password"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
                >
                  {isItalian ? 'Torna a OneFanta' : 'Return to OneFanta'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResetPasswordPage;
