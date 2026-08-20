import type { Locale } from '../lib/i18n';

const messages = {
  it: {
    common: {
      homeAriaLabel: 'Home OneFanta',
      close: 'Chiudi',
      backToWebsite: 'Torna al sito',
      switchToEnglish: 'Passa all\'inglese',
      switchToItalian: 'Passa all\'italiano',
      lastUpdated: 'Ultimo aggiornamento',
    },
    footer: {
      appPrivacy: 'Privacy app',
      waitlistPrivacy: 'Privacy waitlist',
      cookiePolicy: 'Cookie Policy',
      support: 'Assistenza',
    },
    legalModal: {
      waitlistPrivacy: 'Privacy Policy waitlist',
      cookiePolicy: 'Cookie Policy',
    },
    pages: {
      authConfirmed: {
        badge: 'Email confermata',
        heading: 'La tua email è stata confermata',
        body: 'Grazie per aver confermato il tuo account OneFanta. Ora puoi tornare nell’app e continuare da dove eri rimasto.',
        returnToApp: 'Torna a OneFanta',
      },
      resetPassword: {
        badge: 'Reimposta password',
        heading: 'Imposta una nuova password',
        successHeading: 'Password aggiornata',
        verifying: 'Stiamo verificando il link ricevuto via email.',
        intro: 'Scegli una password sicura per il tuo account OneFanta.',
        newPassword: 'Nuova password',
        confirmPassword: 'Conferma nuova password',
        passwordPlaceholder: 'Almeno 6 caratteri',
        confirmPasswordPlaceholder: 'Ripeti la password',
        showPassword: 'Mostra nuova password',
        hidePassword: 'Nascondi nuova password',
        showConfirmation: 'Mostra conferma password',
        hideConfirmation: 'Nascondi conferma password',
        passwordChecks: ['Almeno 6 caratteri', 'Almeno una lettera minuscola', 'Almeno una lettera maiuscola', 'Almeno un numero'],
        missingLink: 'Link non valido o scaduto. Richiedi un nuovo reset password dall’app.',
        invalidLink: 'Non siamo riusciti a verificare il link di reset. Richiedine uno nuovo dall’app.',
        requiredPassword: 'Inserisci la nuova password.',
        invalidPassword: 'La password deve rispettare tutti i requisiti indicati.',
        mismatchedPassword: 'La conferma deve essere uguale alla nuova password.',
        updateFailed: 'Aggiornamento non riuscito',
        updateFailedDetail: 'Aggiornamento non riuscito. Verifica il link ricevuto via email e riprova.',
        submit: 'Aggiorna password',
        successBody: 'La tua password è stata aggiornata. Ora puoi tornare nell’app e accedere con le nuove credenziali.',
        returnToApp: 'Torna a OneFanta',
      },
      appPrivacy: {
        title: 'Privacy Policy - App OneFanta',
        subtitle: "Informativa per l'app mobile OneFanta.",
      },
      waitlistPrivacy: {
        title: 'Privacy Policy - Waitlist OneFanta',
        subtitle: "Informativa per la lista d'attesa del sito OneFanta.",
      },
      contact: {
        title: 'Contatti',
        subtitle: 'Contatti ufficiali per privacy, supporto e richieste dati.',
      },
      deleteAccount: {
        title: "Cancellazione dell'account e dei dati",
        subtitle: 'Come eliminare definitivamente l\'account e i dati personali.',
        waitlistSection: 'Lista d\'attesa',
      },
      terms: {
        title: 'Termini e condizioni di utilizzo',
        subtitle: 'Le regole per usare il sito, l\'app e i servizi OneFanta.',
      },
      support: {
        title: 'Assistenza OneFanta',
        subtitle: 'Aiuto per account, leghe e funzionalità dell\'app.',
        privacyCard: 'Privacy',
        emailSubject: 'Richiesta di assistenza OneFanta',
        emailBody: 'Ciao, ho bisogno di assistenza con OneFanta.\n\nDescrizione del problema:\n\nEmail dell’account (se pertinente):\nModello del dispositivo:\nVersione iOS:\nVersione dell’app:',
        contactTitle: 'Contatta l’assistenza',
        contactDescription: 'Raccontaci cosa è successo e ti aiuteremo a risolvere il problema.',
        emailAction: 'Scrivi a',
        deleteAccountTitle: 'Cancella il tuo account',
        deleteAccountDescription: 'Istruzioni per eliminare definitivamente account e dati.',
        privacyDescription: 'Scopri come OneFanta tratta i tuoi dati personali.',
      },
    },
    seo: {
      landing: {
        title: 'OneFanta - Fantacalcio per la Premier League',
        description:
          'Voti live, leghe private e classifiche in tempo reale per il fantacalcio basato sulla Premier League.',
      },
      support: {
        title: 'Assistenza OneFanta',
        description: 'Assistenza ufficiale per account, leghe e funzionalità dell\'app OneFanta.',
      },
      privacy: {
        title: 'Privacy Policy - App OneFanta',
        description: 'Informativa sul trattamento dei dati personali nell\'app mobile OneFanta.',
      },
      waitlistPrivacy: {
        title: 'Privacy Policy - Waitlist OneFanta',
        description: 'Informativa sul trattamento dei dati personali per la lista d\'attesa OneFanta.',
      },
      deleteAccount: {
        title: 'Cancellazione account - OneFanta',
        description: 'Come eliminare definitivamente il tuo account OneFanta e i dati personali associati.',
      },
      contact: {
        title: 'Contatti - OneFanta',
        description: 'Contatti ufficiali OneFanta per privacy, supporto e richieste sui dati personali.',
      },
      terms: {
        title: 'Termini e condizioni - OneFanta',
        description: 'Termini e condizioni di utilizzo del sito, dell\'app e dei servizi OneFanta.',
      },
      authConfirmed: {
        title: 'Email confermata - OneFanta',
        description: 'La tua email OneFanta è stata confermata. Torna all\'app per continuare.',
      },
      resetPassword: {
        title: 'Reimposta password - OneFanta',
        description: 'Imposta una nuova password per il tuo account OneFanta.',
      },
    },
  },
  en: {
    common: {
      homeAriaLabel: 'OneFanta home',
      close: 'Close',
      backToWebsite: 'Back to website',
      switchToEnglish: 'Switch to English',
      switchToItalian: 'Switch to Italian',
      lastUpdated: 'Last updated',
    },
    footer: {
      appPrivacy: 'App Privacy',
      waitlistPrivacy: 'Waitlist Privacy',
      cookiePolicy: 'Cookie Policy',
      support: 'Support',
    },
    legalModal: {
      waitlistPrivacy: 'Waitlist Privacy Policy',
      cookiePolicy: 'Cookie Policy',
    },
    pages: {
      authConfirmed: {
        badge: 'Email confirmed',
        heading: 'Your email has been confirmed',
        body: 'Thanks for confirming your OneFanta account. You can now return to the app and pick up where you left off.',
        returnToApp: 'Return to OneFanta',
      },
      resetPassword: {
        badge: 'Reset password',
        heading: 'Set a new password',
        successHeading: 'Password updated',
        verifying: 'We are verifying the link you received by email.',
        intro: 'Choose a secure password for your OneFanta account.',
        newPassword: 'New password',
        confirmPassword: 'Confirm new password',
        passwordPlaceholder: 'At least 6 characters',
        confirmPasswordPlaceholder: 'Repeat the password',
        showPassword: 'Show new password',
        hidePassword: 'Hide new password',
        showConfirmation: 'Show password confirmation',
        hideConfirmation: 'Hide password confirmation',
        passwordChecks: ['At least 6 characters', 'At least one lowercase letter', 'At least one uppercase letter', 'At least one number'],
        missingLink: 'Invalid or expired link. Request a new password reset from the app.',
        invalidLink: 'We could not verify the reset link. Request a new one from the app.',
        requiredPassword: 'Enter your new password.',
        invalidPassword: 'The password must meet all the listed requirements.',
        mismatchedPassword: 'The confirmation must match the new password.',
        updateFailed: 'Update failed',
        updateFailedDetail: 'Update failed. Check the link received by email and try again.',
        submit: 'Update password',
        successBody: 'Your password has been updated. You can now return to the app and sign in with your new credentials.',
        returnToApp: 'Return to OneFanta',
      },
      appPrivacy: {
        title: 'Privacy Policy - OneFanta App',
        subtitle: 'Privacy notice for the OneFanta mobile app.',
      },
      waitlistPrivacy: {
        title: 'Privacy Policy - OneFanta Waitlist',
        subtitle: 'Privacy notice for the OneFanta website waitlist.',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Official contacts for privacy, support and data requests.',
      },
      deleteAccount: {
        title: 'Account and data deletion',
        subtitle: 'How to permanently delete your account and personal data.',
        waitlistSection: 'Waitlist',
      },
      terms: {
        title: 'Terms and conditions of use',
        subtitle: 'Rules for using the OneFanta website, app and services.',
      },
      support: {
        title: 'OneFanta Support',
        subtitle: 'Help with your account, leagues and app features.',
        privacyCard: 'Privacy',
        emailSubject: 'OneFanta support request',
        emailBody: 'Hello, I need help with OneFanta.\n\nIssue description:\n\nAccount email (if relevant):\nDevice model:\niOS version:\nApp version:',
        contactTitle: 'Contact support',
        contactDescription: 'Tell us what happened and we’ll help you resolve the issue.',
        emailAction: 'Email',
        deleteAccountTitle: 'Delete your account',
        deleteAccountDescription: 'Instructions for permanently deleting your account and data.',
        privacyDescription: 'Learn how OneFanta handles your personal data.',
      },
    },
    seo: {
      landing: {
        title: 'OneFanta - Premier League Fantasy Football',
        description:
          'Live ratings, private leagues and real-time standings for fantasy football based on the Premier League.',
      },
      support: {
        title: 'OneFanta Support',
        description: 'Official support for OneFanta accounts, leagues and app features.',
      },
      privacy: {
        title: 'Privacy Policy - OneFanta App',
        description: 'Privacy notice for personal data processing in the OneFanta mobile app.',
      },
      waitlistPrivacy: {
        title: 'Privacy Policy - OneFanta Waitlist',
        description: 'Privacy notice for personal data processing on the OneFanta waitlist.',
      },
      deleteAccount: {
        title: 'Account deletion - OneFanta',
        description: 'How to permanently delete your OneFanta account and associated personal data.',
      },
      contact: {
        title: 'Contact - OneFanta',
        description: 'Official OneFanta contacts for privacy, support and personal data requests.',
      },
      terms: {
        title: 'Terms and conditions - OneFanta',
        description: 'Terms and conditions for using the OneFanta website, app and services.',
      },
      authConfirmed: {
        title: 'Email confirmed - OneFanta',
        description: 'Your OneFanta email has been confirmed. Return to the app to continue.',
      },
      resetPassword: {
        title: 'Reset password - OneFanta',
        description: 'Set a new password for your OneFanta account.',
      },
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export type SeoRoute =
  | 'landing'
  | 'support'
  | 'privacy'
  | 'waitlistPrivacy'
  | 'deleteAccount'
  | 'contact'
  | 'terms'
  | 'authConfirmed'
  | 'resetPassword';

export function getSeoForRoute(locale: Locale, route: SeoRoute) {
  return getMessages(locale).seo[route];
}

export function pathToSeoRoute(path: string): SeoRoute {
  switch (path) {
    case '/support':
      return 'support';
    case '/privacy':
      return 'privacy';
    case '/waitlist-privacy':
      return 'waitlistPrivacy';
    case '/delete-account':
      return 'deleteAccount';
    case '/contact':
      return 'contact';
    case '/terms':
      return 'terms';
    case '/auth/confirmed':
      return 'authConfirmed';
    case '/auth/reset-password':
      return 'resetPassword';
    default:
      return 'landing';
  }
}
