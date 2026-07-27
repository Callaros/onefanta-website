import PolicySection from '../components/PolicySection';
import { EmailLink } from './legal';
import { LAST_UPDATED_EN } from './legal.en';

const linkClass = 'text-electric-300 hover:text-electric-200 underline underline-offset-4';

export default function TermsEn() {
  return (
    <div className="space-y-8">
      <p className="text-dark-400">Last updated: {LAST_UPDATED_EN}</p>
      <PolicySection title="1. Provider and scope">
        <p className="mb-3">These Terms govern access to and use of the website, mobile app and related services called “OneFanta” (together, the “Service”). OneFanta identifies the Service and is not represented here as a registered trademark.</p>
        <p>The Service is operated by <strong className="text-white">Luca Antonelli</strong>, an individual residing at <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italy</strong>. For support and communications, contact <EmailLink />. A VAT number will be provided if and when applicable.</p>
      </PolicySection>
      <PolicySection title="2. Acceptance and related documents">
        <p className="mb-3">By creating an account or using restricted features, you confirm that you have read and accepted these Terms. If you do not accept them, do not create an account or use restricted features. Browsing public pages does not limit your statutory rights.</p>
        <p>Personal-data processing is described in the <a href="/en/privacy" className={linkClass}>App Privacy Policy</a>. Separate notices in the footer cover the website, waitlist and cookies.</p>
      </PolicySection>
      <PolicySection title="3. The OneFanta Service">
        <p className="mb-3">Depending on available features, OneFanta lets users create or join private leagues, manage teams and rosters, view ratings and statistics, calculate scores and follow live standings and updates.</p>
        <p>The Service is for entertainment. It is not a betting service, does not guarantee winnings or sporting outcomes, and is not officially affiliated with clubs, leagues, federations, players or competitions unless expressly stated. Third-party names and marks belong to their owners.</p>
      </PolicySection>
      <PolicySection title="4. Age requirements">
        <p className="mb-3">Free features may also be used by minors. If you cannot independently accept these Terms under applicable law, use must be authorised and supervised by a parent or guardian, who should read these Terms and the privacy notices.</p>
        <p>Any subscriptions or paid services offered directly by OneFanta are limited to users aged 18 or over. OneFanta does not currently organise prize competitions.</p>
        <p className="mt-3">For optional consent-based processing in Italy, users aged 14 or over may consent independently; below 14, consent must be given or authorised by a parent or guardian. Users under 14 must not independently enable ad personalisation or other consent-based features.</p>
      </PolicySection>
      <PolicySection title="5. Accounts and security">
        <ul className="list-disc space-y-2 pl-5"><li>Provide accurate information and keep it current.</li><li>Your account is personal and may not be transferred or shared without permission.</li><li>Protect your credentials and promptly report suspected unauthorised access.</li><li>You are responsible for account activity to the extent permitted by law, except for use not attributable to you.</li></ul>
      </PolicySection>
      <PolicySection title="6. Private leagues, administrators and game rules">
        <p className="mb-3">Private leagues are user-organised groups. Their creator or administrator may configure rules, invite or remove participants and manage game decisions with the available tools.</p>
        <p className="mb-3">Participants and administrators are responsible for internal rules, their agreements and game disputes. OneFanta provides technical infrastructure and may intervene for service issues, abuse or breaches, but is not party to private agreements between league members.</p>
        <p>Money, entry fees or prizes organised independently by users are neither managed nor guaranteed by OneFanta. Users must ensure their initiatives comply with applicable law.</p>
      </PolicySection>
      <PolicySection title="7. Ratings, statistics, scores and corrections">
        <p className="mb-3">Base sports data, including results, events and statistics, is supplied through the Sportmonks Football API. OneFanta selects, interprets and processes it for fantasy-football rules. Sportmonks does not determine OneFanta fantasy ratings, bonuses, penalties or scores, and OneFanta does not use logos or photos obtained through Sportmonks.</p>
        <p>Data may be provisional, delayed, incomplete or incorrect. OneFanta may correct processed data and recalculate ratings, scores and standings. In-app information is for gameplay and is not an official sports source or economic advice.</p>
      </PolicySection>
      <PolicySection title="8. Permitted use and prohibited conduct">
        <p className="mb-3">You must comply with law, these Terms and others’ rights. You may not:</p>
        <ul className="list-disc space-y-2 pl-5"><li>use the Service for fraud, harassment, threats, discrimination or unlawful activity;</li><li>upload unlawful, offensive or rights-infringing content;</li><li>access accounts, data or areas without authorisation, bypass security or interfere with the Service;</li><li>use unauthorised bots or scraping, or overload infrastructure;</li><li>copy, resell, modify or commercially exploit the Service or content without permission;</li><li>manipulate results, abuse bugs or create accounts to evade restrictions.</li></ul>
      </PolicySection>
      <PolicySection title="9. User content">
        <p className="mb-3">OneFanta currently has no user chat or messaging. You retain rights in content you provide, such as team or league names and custom team images, and remain responsible for it. You must have the necessary permissions and must not upload unlawful, offensive or rights-infringing content.</p>
        <p className="mb-3">Team images are used within private leagues and normally visible to their participants. A private league does not authorise use of third-party images or exclude technical access strictly needed for support, security and service operation.</p>
        <p>By uploading, you grant the provider a non-exclusive, royalty-free licence limited to hosting, technically adapting and displaying content to provide, protect and improve the Service. It ends when content is deleted, subject to temporary technical copies or legal obligations.</p>
      </PolicySection>
      <PolicySection title="10. Intellectual property"><p>OneFanta software, interface, graphics, text, databases and original content are protected by applicable intellectual-property law even though the name is not currently a registered trademark. You receive a personal, limited, revocable, non-exclusive and non-transferable right to use the Service under these Terms. Third-party content and marks remain their owners’ property.</p></PolicySection>
      <PolicySection title="11. Third-party services, stores, advertising and purchases">
        <p className="mb-3">The app is currently distributed only through Apple App Store and Google Play Store. Features may depend on Supabase, Sportmonks, Sentry, Firebase Cloud Messaging and Google Mobile Ads. The website also uses Cloudflare for hosting, storage, delivery and security. Their own terms and notices may apply.</p>
        <p className="mb-3">Notifications are optional. For consent-based advertising, the app presents choices before requesting such processing. See the <a href="/en/privacy" className={linkClass}>App Privacy Policy</a>. Non-personalised ads may be shown if personalisation is declined.</p>
        <p>If subscriptions or purchases are offered, total price, duration, renewal, payment, withdrawal and cancellation details will be displayed before ordering under applicable law and store rules. These Terms alone activate no purchase or renewal.</p>
      </PolicySection>
      <PolicySection title="12. Territorial availability"><p>OneFanta currently imposes no general territorial restriction. Availability may depend on app-store country availability, device compatibility, third-party services and local law. You are responsible for ensuring use is permitted where you are located.</p></PolicySection>
      <PolicySection title="13. Availability, changes and updates"><p>We work to keep OneFanta available and secure, but maintenance, delays, errors or interruptions may occur. Features may change or end for technical, security, legal or product reasons. Material changes affecting an ongoing service will receive reasonable notice where possible, subject to urgent, legal or security needs. Mandatory consumer remedies remain unaffected.</p></PolicySection>
      <PolicySection title="14. Suspension, account closure and reports">
        <p className="mb-3">You may stop using the Service and permanently delete your account from the app’s Profile section using the red “Delete account” button. See <a href="/en/delete-account" className={linkClass}>Account and data deletion</a>.</p>
        <p>We may restrict features, remove content, suspend or close accounts for breaches, risks, legal obligations or prolonged inactivity. Measures will be proportionate and explained where possible; non-urgent cases will receive notice and may be challenged via <EmailLink />.</p>
      </PolicySection>
      <PolicySection title="15. Liability and consumer rights">
        <p className="mb-3">Nothing excludes liability or rights that cannot legally be excluded, including remedies for non-conforming digital services. OneFanta is responsible for directly attributable damage under applicable law.</p>
        <p>To the extent permitted by law, OneFanta is not responsible for private agreements between league members, user conduct, use contrary to these Terms, unavailability caused by the user’s device or connection, or unforeseeable events outside reasonable control.</p>
      </PolicySection>
      <PolicySection title="16. Changes to these Terms"><p>We may update these Terms for service, legal or security changes. The updated version and date will be published, and material changes will be clearly communicated before taking effect where required or reasonably possible. If you reject a change affecting an ongoing service, you may stop using it and close your account, without limiting other statutory rights.</p></PolicySection>
      <PolicySection title="17. Governing law, disputes and final provisions">
        <p className="mb-3">These Terms are governed by Italian law without depriving consumers of mandatory protections in their country of residence. The court of the consumer’s residence or domicile has jurisdiction where provided by law. Before taking action, contact us to seek an amicable solution and, where applicable, use a competent ADR body.</p>
        <p>If a provision is invalid or unenforceable, the others remain effective. Failure to exercise a right is not a waiver. Contact <EmailLink /> with questions, reports or disputes.</p>
      </PolicySection>
    </div>
  );
}
