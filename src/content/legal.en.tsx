import PolicySection from '../components/PolicySection';
import LocalizedLink from '../components/LocalizedLink';
import { EmailLink } from './legal.it';
import type { Locale } from '../lib/i18n';

export const LAST_UPDATED_EN = 'August 5, 2026';
const APP_PRIVACY_LAST_UPDATED_EN = 'August 11, 2026';

export function WaitlistPrivacyPolicyEn() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Last updated: {LAST_UPDATED_EN}</p>
      <PolicySection title="1. Data controller">
        <p>The data controller is <strong className="text-white">Luca Antonelli</strong>, residing at <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italy</strong>. For data protection questions or requests, contact <EmailLink />.</p>
      </PolicySection>
      <PolicySection title="2. Data we collect">
        <p className="mb-3">When you join the waitlist, we collect:</p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li><strong className="text-white">Email address:</strong> required to notify you about the OneFanta launch.</li>
          <li><strong className="text-white">Signup date:</strong> recorded to document when you requested to join.</li>
          <li><strong className="text-white">Technical data:</strong> IP address, user agent, request date and time, and other network data processed to receive the form, protect the service and prevent abuse.</li>
        </ul>
      </PolicySection>
      <PolicySection title="3. Purposes and legal basis">
        <p>We use your email only to manage the waitlist, announce the app launch and send updates closely related to OneFanta’s availability. The legal basis is your consent, which you may withdraw at any time without affecting prior processing. Technical data is processed for our legitimate interest in keeping the website available and secure and preventing abuse.</p>
      </PolicySection>
      <PolicySection title="4. Services and recipients">
        <p>Supabase processes the data required to receive and store waitlist signups and protect the database, hosted in the Central Europe (Frankfurt) region. Cloudflare provides hosting, storage, distribution and website security in the European region and may process the technical data necessary to deliver and protect it. Before messages are sent, this notice will be updated to identify the email provider used. We do not sell your data or use it for general marketing, sponsors or unrelated communications without separate, specific consent.</p>
      </PolicySection>
      <PolicySection title="5. Transfers outside the EEA">
        <p>The Supabase database is configured in Central Europe (Frankfurt), and the Cloudflare services used by the website are configured in the European region. If providers or subprocessors process data outside the European Economic Area, transfers rely on safeguards recognised by applicable law, such as adequacy decisions, the Data Privacy Framework or Standard Contractual Clauses. Contact <EmailLink /> for information about applicable safeguards.</p>
        <p className="mt-3">See the privacy notices of <a href="https://supabase.com/privacy" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Supabase</a> and <a href="https://www.cloudflare.com/privacypolicy/" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Cloudflare</a>.</p>
      </PolicySection>
      <PolicySection title="6. Retention">
        <p>We retain your email until consent is withdrawn, deletion is requested or, at the latest, 30 days after OneFanta launches. Technical data is retained for up to 12 months and anonymised if you request deletion of associated data. We may retain aggregated, non-identifying statistics.</p>
      </PolicySection>
      <PolicySection title="7. Your rights">
        <p>Within the limits of the GDPR, you may request access, correction, deletion, restriction, portability, objection where applicable, and withdrawal of consent by contacting <EmailLink />. Waitlist data is not used for automated decision-making that produces legal or similarly significant effects.</p>
      </PolicySection>
      <PolicySection title="8. Security">
        <p>We use reasonable technical and organisational measures to protect data. The website allows public waitlist signup but never publicly exposes subscriber email addresses.</p>
      </PolicySection>
      <PolicySection title="9. Complaints">
        <p>If you believe the processing breaches data protection law, you may complain to the competent supervisory authority. In Italy, this is the Garante per la protezione dei dati personali.</p>
      </PolicySection>
      <PolicySection title="10. Optional provision of data">
        <p>Joining the waitlist is optional. You can still use the website without providing your email, but we will not be able to notify you when OneFanta launches.</p>
      </PolicySection>
    </div>
  );
}

export function AppPrivacyPolicyEn({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Last updated: {APP_PRIVACY_LAST_UPDATED_EN}</p>
      <PolicySection title="1. Data controller and scope">
        <p className="mb-3">The data controller is <strong className="text-white">Luca Antonelli</strong>, residing at <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italy</strong>. For data protection questions or requests, contact <EmailLink />.</p>
        <p>This notice describes personal data processing in the OneFanta mobile app. The landing page and waitlist are covered by the <LocalizedLink locale={locale} href="/waitlist-privacy">Waitlist Privacy Policy</LocalizedLink>.</p>
      </PolicySection>
      <PolicySection title="2. Data we process">
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li><strong className="text-white">Account and contact data:</strong> email, user ID, login information and preferences. If you choose Google or Apple sign-in, we may also receive the identifier assigned by the provider and, depending on the information available and your choices, your name, display name, profile image or email address, including an Apple private relay address.</li>
          <li><strong className="text-white">Game data:</strong> leagues, teams, rosters, standings, scores, statistics and league settings.</li>
          <li><strong className="text-white">User-provided content:</strong> team and league names and custom images selected from the device.</li>
          <li><strong className="text-white">Support:</strong> email, request contents and any information you choose to provide.</li>
          <li><strong className="text-white">Service technical data:</strong> IP address, user agent, request date and time, and logs needed for authentication, security and backend operation.</li>
          <li><strong className="text-white">Local data:</strong> preferences, settings, cache and game data stored on the device.</li>
          <li><strong className="text-white">Notifications:</strong> push token, platform and notification preferences, only if enabled.</li>
          <li><strong className="text-white">Diagnostics:</strong> errors, exceptions, stack traces, technical breadcrumbs, affected screen or operation, device model, operating system, app version, event date and time, and IP address.</li>
          <li><strong className="text-white">Advertising:</strong> advertising or installation identifiers, IP address, device and app information, ad interactions, diagnostics and consent choices.</li>
        </ul>
      </PolicySection>
      <PolicySection title="3. Purposes and legal bases">
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li><strong className="text-white">Providing the service:</strong> account creation, authentication including through Google or Apple, game data, leagues, teams, standings and requested content, based on performance of the requested service.</li>
          <li><strong className="text-white">Security and abuse prevention:</strong> protecting accounts, users and systems, based on our legitimate interest in a secure and reliable service.</li>
          <li><strong className="text-white">Diagnostics:</strong> finding and fixing crashes and faults through Sentry, based on our legitimate interest in app stability, security and correct operation.</li>
          <li><strong className="text-white">Notifications:</strong> delivering service notifications you enable. This feature is optional and can be disabled in the app or device settings.</li>
          <li><strong className="text-white">Support:</strong> handling your requests, based on performance of the service, steps requested by you and, where relevant, legal obligations.</li>
          <li><strong className="text-white">Advertising:</strong> displaying, measuring and, when authorised, personalising ads through Google Mobile Ads. Processing that requires consent follows your in-app choices.</li>
          <li><strong className="text-white">Legal obligations:</strong> compliance with law and lawful requests from competent authorities.</li>
        </ul>
      </PolicySection>
      <PolicySection title="4. Supabase">
        <p>We use Supabase for database, authentication, account management, storage and synchronisation. Depending on the features used, it processes account data, game data, uploads and technical information. OneFanta does not use a separate backup feature for this data. The database is located in Central Europe (Frankfurt).</p>
        <p className="mt-3">Custom team images are stored in a private Supabase Storage bucket. They are not publicly accessible and may be viewed only by authorised members of the relevant private league.</p>
      </PolicySection>
      <PolicySection title="5. Sign-in with Google and Apple">
        <p className="mb-3">You may create an account or sign in using Google Sign-In or Sign in with Apple. Google or Apple then authenticates you and sends OneFanta and Supabase Auth an authentication token and a provider-specific unique identifier. Depending on the provider, configuration and choices made during sign-in, we may also receive your email address, name or display name and, from Google, your profile image. If you choose Hide My Email with Apple, we receive the private relay address generated by Apple instead of your real email address. Apple may provide your name only on the first authorisation.</p>
        <p className="mb-3">OneFanta uses this data only to create, authenticate, link and protect your account and does not receive or store your Google or Apple password. The legal basis is performance of the requested service. Google and Apple independently process data needed to provide and secure their identity services under their own privacy notices.</p>
        <p>You may revoke authorisation in your Google or Apple account settings. Revocation prevents subsequent sign-ins through that provider but does not automatically delete your OneFanta account or data already stored by OneFanta. To delete them, use the <strong className="text-white">Delete account</strong> feature described in this notice.</p>
      </PolicySection>
      <PolicySection title="6. Sentry and diagnostic data">
        <p className="mb-3">We use Sentry to receive technical reports about crashes, errors and malfunctions. Events may contain errors, exceptions, stack traces, technical breadcrumbs, the affected screen or operation, device model, operating system, app version, event date and time, and IP address.</p>
        <p>OneFanta does not send the account ID or email address to Sentry and does not use Sentry performance tracing or profiling. Diagnostic data is used only for stability, security and error correction, is processed in the EU region and is retained in Sentry for 30 days.</p>
      </PolicySection>
      <PolicySection title="7. Notifications">
        <p>Notifications are not enabled automatically. If you enable them, Firebase Cloud Messaging and operating-system notification services associate a push token with the installation and deliver requested notifications. You may disable them at any time without losing access to other OneFanta features.</p>
      </PolicySection>
      <PolicySection title="8. Advertising and consent management">
        <p className="mb-3">OneFanta uses Google Mobile Ads. On first launch, the app presents an advertising consent mechanism and records your choices before requesting processing that requires consent. Those choices determine how Google and authorised advertising providers may store data, measure and personalise ads.</p>
        <p>Advertising data may include advertising or installation identifiers, IP address, device and app characteristics, ad interactions, diagnostics and consent information. OneFanta does not sell personal data. If you do not consent to personalisation, the app may still display non-personalised ads in accordance with your choices.</p>
      </PolicySection>
      <PolicySection title="9. Recipients and international transfers">
        <p>Where necessary, data may be processed by members of private leagues for shared game data and content; Supabase for backend, authentication and storage in Central Europe (Frankfurt); Google and Apple for the federated sign-in selected by the user; Functional Software, Inc. (Sentry) for diagnostics; Google and authorised providers for Firebase Cloud Messaging and Google Mobile Ads; and email providers. Sentry processes events in the EU region. Processing outside the EEA relies on safeguards recognised by applicable law, including adequacy decisions, the Data Privacy Framework or Standard Contractual Clauses.</p>
        <p className="mt-3">See the privacy notices of <a href="https://supabase.com/privacy" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Supabase</a>, <a href="https://sentry.io/privacy/" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Sentry</a>, <a href="https://policies.google.com/privacy" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Google</a> and <a href="https://www.apple.com/legal/privacy/" className="text-electric-300 underline underline-offset-4 hover:text-electric-200">Apple</a>.</p>
      </PolicySection>
      <PolicySection title="10. Retention">
        <p>Account and game data is retained while needed to provide the service and until account deletion, subject to legal obligations or the protection of rights. Notification tokens and preferences are removed when no longer required or upon account deletion. Technical and security logs are kept for up to 12 months and anonymised upon account deletion where still needed. Sentry diagnostics remain for 30 days. Advertising data follows consent settings and provider retention periods. Support requests are retained until resolved and longer where required by law or to protect rights.</p>
      </PolicySection>
      <PolicySection title="11. Account and data deletion">
        <p className="mb-3">Delete your account in the app by opening <strong className="text-white">Profile</strong>, selecting the red <strong className="text-white">Delete account</strong> button and confirming. Deletion is permanent.</p>
        <p>See <LocalizedLink locale={locale} href="/delete-account">Account and data deletion</LocalizedLink> for details. You may separately exercise GDPR rights by contacting <EmailLink />.</p>
      </PolicySection>
      <PolicySection title="12. Required data and optional features">
        <p>An email address or provider identity, authentication information and required game data are necessary for an account and restricted features. Image uploads, notifications and consent-based advertising processing are optional. Refusal or withdrawal does not prevent use of unrelated app features. Support requests are optional, but we cannot respond without the necessary details.</p>
      </PolicySection>
      <PolicySection title="13. Children">
        <p>Minors may use OneFanta as described in the Terms. In Italy, users aged 14 or over may independently consent to online-service processing based on consent; below 14, consent must be given or authorised by a parent or guardian. A user under 14 must not enable optional consent-based features, including ad personalisation, without that authorisation.</p>
      </PolicySection>
      <PolicySection title="14. Security">
        <p>We use reasonable technical and organisational measures, including access restrictions and system controls. No system can guarantee absolute security, but we work to reduce risk.</p>
      </PolicySection>
      <PolicySection title="15. Your rights and complaints">
        <p className="mb-3">Within GDPR limits, you may request access, correction, deletion, restriction, portability, objection where applicable, and withdrawal of consent by contacting <EmailLink />.</p>
        <p>You may complain to the competent supervisory authority. In Italy, this is the Garante per la protezione dei dati personali.</p>
        <p className="mt-3">OneFanta does not make solely automated decisions that produce legal or similarly significant effects. Any ad personalisation follows the choices made through the app’s consent mechanism.</p>
      </PolicySection>
      <PolicySection title="16. Store disclosures and updates">
        <p>Google Play Console and App Store Connect disclosures must reflect the data actually collected by the app. This policy provides additional details and will be updated if features, providers or data categories change. Where required, material changes will be communicated in the app or through another suitable channel before taking effect.</p>
      </PolicySection>
    </div>
  );
}

export function CookiePolicyEn({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Last updated: {LAST_UPDATED_EN}</p>
      <PolicySection title="1. What cookies are"><p>Cookies are small files or pieces of information stored on a user’s device by a website or third-party service. Similar technologies include local storage, pixels and other tracking tools.</p></PolicySection>
      <PolicySection title="2. Cookies used by this website">
        <p className="mb-3">This website does not use profiling, marketing or analytics cookies, Google Analytics, Meta Pixel or similar tools. The signup form sends your email directly to Supabase when submitted.</p>
        <p>The website also uses strictly necessary local storage to remember your language choice and keep navigation in the Italian or English version. This preference is not used for profiling or advertising.</p>
        <p className="mt-3">Account confirmation and password recovery pages may use local or session storage strictly as needed to verify the received link, temporarily maintain the authentication session and complete the requested operation. These technologies are not used for profiling or advertising.</p>
        <p className="mt-3">Cloudflare provides hosting, storage, distribution and security in the European region and may use technologies strictly necessary for security, traffic management and availability. Related technical logs are retained for up to 12 months.</p>
      </PolicySection>
      <PolicySection title="3. Cookie banner"><p>Because the website does not use cookies or tracking tools requiring prior consent, we do not display an accept/reject banner. If non-essential analytics, marketing, pixels or similar tools are introduced, we will update this policy and provide an appropriate consent mechanism before activation.</p></PolicySection>
      <PolicySection title="4. Mobile app"><p>This Cookie Policy covers the website. Advertising consent and identifiers in the mobile app are described in the <LocalizedLink locale={locale} href="/privacy">App Privacy Policy</LocalizedLink>.</p></PolicySection>
      <PolicySection title="5. Contact"><p>For questions about cookies or tracking technologies, contact <EmailLink />.</p></PolicySection>
    </div>
  );
}
