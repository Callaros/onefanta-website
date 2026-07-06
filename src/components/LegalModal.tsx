import type { ReactNode } from 'react';
import { Cookie, Shield, X } from 'lucide-react';

export type LegalModalType = 'waitlistPrivacy' | 'cookie';

type LegalModalProps = {
  activeModal: LegalModalType;
  onClose: () => void;
  children: ReactNode;
};

function LegalModal({ activeModal, onClose, children }: LegalModalProps) {
  const isWaitlistPrivacy = activeModal === 'waitlistPrivacy';

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-dark-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-dark-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-3">
            {isWaitlistPrivacy ? (
              <>
                <Shield className="w-5 h-5 text-electric-400" />
                Waitlist Privacy Policy
              </>
            ) : (
              <>
                <Cookie className="w-5 h-5 text-electric-400" />
                Cookie Policy
              </>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 text-dark-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
