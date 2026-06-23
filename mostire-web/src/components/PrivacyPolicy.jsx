import LegalPage, { LegalSection } from './LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2025"
      description="How Mos Tire Wholesale collects, uses, and protects the limited information you share when requesting a tire quote."
    >
      <p className="text-ink-soft text-sm sm:text-[15px] leading-relaxed">
        Mos Tire Wholesale ("we", "us", or "our") respects your privacy. This policy explains what
        information we collect through this website, how we use it, and the choices you have. By using
        this website you agree to the practices described below.
      </p>

      <LegalSection heading="Who we are">
        <p>
          Mos Tire Wholesale is a direct tire importer based in Charlottetown, Prince Edward Island,
          serving customers across Atlantic Canada. You can reach us by phone or text at{' '}
          <a href="tel:9029922664" className="text-[#e4322b] hover:underline">902-992-2664</a> or on{' '}
          <a href="https://wa.me/19029922664" target="_blank" rel="noopener noreferrer" className="text-[#e4322b] hover:underline">WhatsApp</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We only collect the information you choose to give us. That includes:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Your name and phone number, when you submit the quote form.</li>
          <li>Tire details you provide, such as tire size, type, quantity, and any message.</li>
          <li>
            Any information you share directly when you call, text, or message us on WhatsApp.
          </li>
        </ul>
        <p>
          We do not run advertising trackers or collect sensitive personal information. This website
          does not require you to create an account.
        </p>
      </LegalSection>

      <LegalSection heading="How the quote form works">
        <p>
          When you submit the quote form, your details are placed into a pre-filled message and your
          device opens WhatsApp so you can send that message to us directly. The information is not
          stored on this website or on a server we control. Once you send the message, it is handled
          within WhatsApp, which is operated by Meta Platforms, Inc. and governed by its own privacy
          policy.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <p>We use the information you share only to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Prepare and send you a tire quote.</li>
          <li>Respond to your questions and arrange pickup or delivery.</li>
          <li>Provide customer service related to your order.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to anyone.</p>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <p>This website uses a small number of third-party services to function:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <span className="text-ink font-semibold">WhatsApp / Meta</span> — to send quote requests
            and chat with us.
          </li>
          <li>
            <span className="text-ink font-semibold">Google Fonts</span> — to load the fonts used on
            this site. Your browser may request these files from Google.
          </li>
        </ul>
        <p>
          Each of these providers has its own privacy practices, which apply when you interact with
          their services.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and analytics">
        <p>
          This website does not use advertising cookies or third-party analytics to track you across
          the web. Any storage used is limited to what is necessary for the site to display correctly.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          Because quote requests are sent to us through WhatsApp, text, or phone, any records are kept
          only as long as needed to serve you and to meet normal business and legal requirements. You
          can ask us to delete the messages you have sent us at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can contact us any time to ask what information we hold about you, to correct it, or to
          request that we delete it. You can also choose to reach us by phone or text instead of using
          the online form.
        </p>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>
          This website is intended for adults purchasing tires. We do not knowingly collect
          information from children under the age of majority.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. Any changes will be posted on this page with a
          revised "last updated" date.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          If you have any questions about this Privacy Policy, contact Mos Tire Wholesale at{' '}
          <a href="tel:9029922664" className="text-[#e4322b] hover:underline">902-992-2664</a> or on{' '}
          <a href="https://wa.me/19029922664" target="_blank" rel="noopener noreferrer" className="text-[#e4322b] hover:underline">WhatsApp</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
