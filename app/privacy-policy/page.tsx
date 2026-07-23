const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-14 md:py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-1 text-lg font-medium text-text-2">
          Ploutos — Personal Finance Manager
        </p>
        <p className="mt-4 text-sm text-neutral">
          <strong>Last Updated:</strong> June 2026 &nbsp;·&nbsp;{" "}
          <strong>Effective Date:</strong> June 2026
        </p>
      </div>

      <div className="space-y-10 leading-relaxed text-text-2">
        {/* Intro */}
        <p>
          David Gómez (&ldquo;Developer&rdquo;, &ldquo;we&rdquo; or
          &ldquo;our&rdquo;) has created Ploutos (&ldquo;the
          Application&rdquo;) as a mobile application for personal finance
          management. This Privacy Policy explains how information is collected,
          used, and disclosed when you use the Application.
        </p>
        <p>
          By downloading or using Ploutos, you agree to the terms of this
          Privacy Policy.
        </p>

        {/* 1 */}
        <section>
          <h2 className="mb-5 text-xl font-bold text-text">
            1. Information We Collect
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-text">
                1.1 Financial Data Provided by You
              </h3>
              <p className="mb-3">
                Ploutos allows you to manage the following data:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Account names, balances, and currencies.</li>
                <li>Transaction descriptions, amounts, dates, and notes.</li>
                <li>Category names and preferences.</li>
                <li>
                  Application settings (preferred currency, language, month
                  start day).
                </li>
              </ul>
              <p className="mt-3">
                For users of the free version, all financial data is stored{" "}
                <strong className="text-text">exclusively on your device</strong>
                . We do not have access to it and it is never transmitted to any
                server.
              </p>
              <p className="mt-2">
                On iOS, local data is encrypted at rest using SQLCipher
                (AES-256 encryption).
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-text">
                1.2 Subscription and Cloud Functionalities (Future)
              </h3>
              <p className="mb-3">
                In the future, the Application may offer a paid subscription
                plan with cloud-based functionalities, such as data backup,
                cross-device synchronization, and account management. This
                functionality will be entirely optional and will only apply to
                users who:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Voluntarily create an account by providing their name and
                  email address.
                </li>
                <li>Subscribe to a paid plan.</li>
              </ul>
              <p className="mt-3">
                If you subscribe, the following additional data will be
                collected and stored on our servers:
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>
                  Your name and email address (for account authentication).
                </li>
                <li>
                  Your financial data (accounts, transactions, categories and
                  settings), for the purpose of backup and cloud
                  synchronization.
                </li>
              </ul>
              <p className="mt-3">
                Users who do not create an account or do not subscribe will
                continue to use the Application with all data stored locally on
                their device, exactly as it works currently. The free,
                local-only experience will remain fully functional.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-text">
                1.3 Automatically Collected Information
              </h3>
              <p className="mb-4">
                When you use the Application — whether as a free or subscribed
                user — certain information is collected automatically through
                third-party services:
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="mb-1.5 font-medium text-text">
                    a) Usage Analytics (Firebase Analytics)
                  </h4>
                  <p className="mb-2">
                    We collect anonymous usage data to understand how features
                    are used and improve the Application. This includes:
                  </p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>The screens you visit.</li>
                    <li>
                      The features you interact with (e.g., creating a
                      transaction, applying a filter, changing a setting).
                    </li>
                    <li>
                      Application version, device model and operating system
                      version.
                    </li>
                    <li>Session duration and frequency.</li>
                  </ul>
                  <p className="mt-2">
                    <strong className="text-text">No financial data</strong>{" "}
                    (amounts, account names, descriptions or notes) is included
                    in the analytics events.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1.5 font-medium text-text">
                    b) Crash Reports (Firebase Crashlytics)
                  </h4>
                  <p className="mb-2">
                    If the Application crashes, diagnostic data is automatically
                    collected, including:
                  </p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>Stack traces and error logs.</li>
                    <li>
                      Device model, operating system version and application
                      version.
                    </li>
                    <li>
                      Navigation traces (the screens visited before the crash).
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-1.5 font-medium text-text">
                    c) Device Token (Firebase Cloud Messaging)
                  </h4>
                  <p>
                    If you grant notification permissions, a unique device token
                    is generated to enable push notifications. This token does
                    not identify you personally.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1.5 font-medium text-text">
                    d) Advertising Data (Google AdMob)
                  </h4>
                  <p className="mb-2">
                    The Application displays ads provided by Google AdMob.
                    AdMob may collect:
                  </p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>
                      Device advertising identifiers (only with your explicit
                      consent on iOS through the App Tracking Transparency
                      prompt).
                    </li>
                    <li>General device information for ad delivery.</li>
                    <li>Ad interaction data (impressions, clicks).</li>
                  </ul>
                  <p className="mt-2">
                    On iOS, you can deny tracking when prompted, in which case
                    only non-personalized ads will be shown. You can change this
                    at any time in your device{" "}
                    <span className="font-medium text-text">
                      Settings &gt; Privacy &amp; Security &gt; Tracking
                    </span>
                    .
                  </p>
                </div>

                <div>
                  <h4 className="mb-1.5 font-medium text-text">
                    e) Remote Configuration (Firebase Remote Config)
                  </h4>
                  <p>
                    The Application retrieves configuration values (such as
                    whether ads are enabled) from Firebase Remote Config. No
                    personal data is sent during this process.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-text">
                1.4 Information We Do NOT Collect
              </h3>
              <p className="mb-2 font-medium text-text">
                For free users (without an account):
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Personal identifiers (name, email address, phone number).
                </li>
                <li>Location data.</li>
                <li>Contacts, photos or camera data.</li>
                <li>Health or biometric data.</li>
                <li>Browsing history.</li>
                <li>
                  Financial account credentials (bank logins, card numbers).
                </li>
              </ul>
              <p className="mb-2 mt-4 font-medium text-text">
                For subscribed users (with an account):
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  We only collect name and email for authentication. The above
                  list applies in its entirety.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            2. How We Use Information
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-text">Local financial data:</strong> Used
              only within the Application on your device. We do not access,
              process, or analyze it.
            </li>
            <li>
              <strong className="text-text">Analytics and crash data:</strong>{" "}
              Used to improve Application functionality, fix bugs, and
              understand aggregate usage patterns.
            </li>
            <li>
              <strong className="text-text">Advertising data:</strong> Used to
              deliver ads that support the free version of the Application.
            </li>
            <li>
              <strong className="text-text">Remote configuration data:</strong>{" "}
              Used to manage Application functionalities remotely.
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            3. Third-Party Services
          </h2>
          <p className="mb-5">
            The Application integrates the following third-party services, each
            with its own privacy policy:
          </p>
          <div className="overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hairline bg-bg-2">
                  <th className="px-5 py-3.5 text-left font-semibold text-text">
                    Service
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-text">
                    Purpose
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-text">
                    Privacy Policy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  {
                    service: "Firebase Analytics",
                    purpose: "Usage analysis",
                    url: "https://firebase.google.com/support/privacy",
                    label: "firebase.google.com",
                  },
                  {
                    service: "Firebase Crashlytics",
                    purpose: "Crash reporting",
                    url: "https://firebase.google.com/support/privacy",
                    label: "firebase.google.com",
                  },
                  {
                    service: "Firebase Remote Config",
                    purpose: "Feature flags",
                    url: "https://firebase.google.com/support/privacy",
                    label: "firebase.google.com",
                  },
                  {
                    service: "Firebase Cloud Messaging",
                    purpose: "Push notifications",
                    url: "https://firebase.google.com/support/privacy",
                    label: "firebase.google.com",
                  },
                  {
                    service: "Google AdMob",
                    purpose: "Advertising",
                    url: "https://policies.google.com/privacy",
                    label: "policies.google.com",
                  },
                  {
                    service: "Open Exchange Rates API",
                    purpose: "Exchange rates",
                    url: "https://open.er-api.com",
                    label: "open.er-api.com",
                  },
                ].map((row) => (
                  <tr key={row.service} className="hover:bg-bg-2/50">
                    <td className="px-5 py-3.5 font-medium text-text">
                      {row.service}
                    </td>
                    <td className="px-5 py-3.5">{row.purpose}</td>
                    <td className="px-5 py-3.5">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-deep underline underline-offset-2 transition-colors hover:text-primary"
                      >
                        {row.label}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            The Open Exchange Rates API is used exclusively to retrieve daily
            currency exchange rates.{" "}
            <strong className="text-text">
              No user data of any kind is transmitted to this service.
            </strong>
          </p>
          <p className="mt-3">
            When cloud functionalities are introduced, the hosting provider and
            data jurisdiction will be disclosed in an updated version of this
            policy.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            4. Data Storage and Security
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 font-semibold text-text">
                4.1 Free Users (Local Storage)
              </h3>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  All financial data is stored locally on your device using
                  SQLite.
                </li>
                <li>
                  On iOS, the database is encrypted using SQLCipher (AES-256).
                </li>
                <li>
                  Data is not synchronized between devices. If you uninstall
                  the Application or lose your device, your data cannot be
                  recovered.
                </li>
                <li>We do not have access to your financial data.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                4.2 Subscribed Users (Cloud Storage — Future)
              </h3>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Your financial data will be encrypted in transit (TLS) and at
                  rest on our servers.
                </li>
                <li>
                  Your name and email will be stored securely for account
                  management.
                </li>
                <li>
                  You will be able to download or delete all server-side data
                  at any time.
                </li>
                <li>
                  Details of server infrastructure and data jurisdiction will be
                  disclosed when the subscription service launches.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">4.3 General</h3>
              <ul className="ml-5 list-disc space-y-1">
                <li>All network communication uses HTTPS encryption.</li>
                <li>
                  We follow industry-standard security practices to protect
                  data.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            5. Data Retention
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-text">Local data:</strong> Retained on
              your device until you delete it within the Application or
              uninstall the Application.
            </li>
            <li>
              <strong className="text-text">Cloud data (subscribers):</strong>{" "}
              Retained on our servers as long as your subscription is active.
              Upon cancellation, your data will be retained for 30 days to
              allow for reactivation, after which it will be permanently
              deleted, unless you request early deletion.
            </li>
            <li>
              <strong className="text-text">Account information:</strong> Your
              name and email will be deleted upon an account deletion request.
            </li>
            <li>
              <strong className="text-text">Analytics and crash data:</strong>{" "}
              Retained by Firebase in accordance with Google&apos;s data
              retention policies (typically 14 months for Analytics, 90 days
              for Crashlytics).
            </li>
            <li>
              <strong className="text-text">Advertising data:</strong> Retained
              by Google in accordance with Google&apos;s advertising data
              retention policies.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            6. Your Rights and Choices
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.1 Deleting Your Data
              </h3>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <strong className="text-text">Free users:</strong> Delete any
                  data within the Application, or uninstall to remove all data.
                </li>
                <li>
                  <strong className="text-text">Subscribers:</strong> Request
                  deletion of cloud-stored data at any time through the
                  Application or by contacting us. Deleting your account will
                  remove all server-side data.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.2 Opting Out of Ad Tracking (iOS)
              </h3>
              <p>
                When prompted for the first time, you can deny app tracking.
                You can also change this at any time via{" "}
                <span className="font-medium text-text">
                  Settings &gt; Privacy &amp; Security &gt; Tracking
                </span>
                .
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.3 Opting Out of Analytics
              </h3>
              <p className="mb-2">
                You can limit ad tracking and analytics collection through your
                device&apos;s privacy settings:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-medium text-text">iOS:</span> Settings
                  &gt; Privacy &amp; Security &gt; Analytics &amp; Improvements
                </li>
                <li>
                  <span className="font-medium text-text">Android:</span>{" "}
                  Settings &gt; Google &gt; Ads
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.4 Disabling Notifications
              </h3>
              <p>
                You can disable push notifications at any time through your
                device settings.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.5 European Users (GDPR)
              </h3>
              <p className="mb-2">
                If you are in the European Economic Area, you have the right to:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Access the information collected about you.</li>
                <li>Request the deletion of your data.</li>
                <li>Object to data processing.</li>
                <li>Data portability (export your data).</li>
                <li>
                  Lodge a complaint with your local data protection authority.
                </li>
                <li>
                  <strong className="text-text">Free users:</strong> Your
                  financial data is stored entirely on your device and is under
                  your control. For analytics and crash data held by Firebase,
                  contact us at the address indicated below.
                </li>
                <li>
                  <strong className="text-text">Subscribers:</strong> Contact
                  us to exercise any of these rights regarding your
                  cloud-stored data.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-text">
                6.6 California Users (CCPA)
              </h3>
              <p>
                If you are a California resident, you have the right to know
                what data is collected and to request its deletion. We do not
                sell personal information to third parties.
              </p>
            </div>
          </div>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Ploutos is not directed to children under 13 years of age. We do
            not knowingly collect personal information from children. The
            Application contains ads served by Google AdMob; these are
            configured to comply with applicable regulations. If you believe a
            child has provided personal information through the Application,
            please contact us.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mb-3">
            We may update this Privacy Policy occasionally, including when new
            features such as the subscription service and cloud storage are
            introduced. Changes will be posted within the Application or on our
            website with an updated &ldquo;Last Updated&rdquo; date.
          </p>
          <p className="mb-3">
            For substantial changes — such as the introduction of server-side
            data storage or new categories of data collection — we will provide
            a prominent notice within the Application.
          </p>
          <p>
            Your continued use of the Application after changes are posted
            constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-text">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please
            contact:
          </p>
          <div className="rounded-xl border border-hairline bg-bg-2 px-6 py-5">
            <p className="font-semibold text-text">David Gómez</p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:davegomez426@gmail.com"
                className="text-primary-deep underline underline-offset-2 transition-colors hover:text-primary"
              >
                davegomez426@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Website:{" "}
              <a
                href="https://davegzarca.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-deep underline underline-offset-2 transition-colors hover:text-primary"
              >
                davegzarca.dev
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
