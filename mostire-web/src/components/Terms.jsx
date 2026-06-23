import LegalPage, { LegalSection } from './LegalPage'

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2025"
      description="The terms that apply to using the Mos Tire Wholesale website and requesting tire quotes and orders."
    >
      <p className="text-ink-soft text-sm sm:text-[15px] leading-relaxed">
        These Terms of Service ("Terms") govern your use of the Mos Tire Wholesale website and the
        quotes and orders you request through it. By using this website, you agree to these Terms.
        If you do not agree, please do not use the site.
      </p>

      <LegalSection heading="About Mos Tire Wholesale">
        <p>
          Mos Tire Wholesale is a direct tire importer based in Charlottetown, Prince Edward Island,
          serving customers across Atlantic Canada. We sell tires at wholesale prices and arrange
          pickup or delivery.
        </p>
      </LegalSection>

      <LegalSection heading="Quotes are not binding offers">
        <p>
          Any price we share through the website, WhatsApp, text, or phone is a quote for your
          convenience. A quote is an estimate based on the information you provide and is not a binding
          offer or contract. A sale is only confirmed once we have agreed on the tire, price, quantity,
          and payment with you directly.
        </p>
      </LegalSection>

      <LegalSection heading="Pricing and availability">
        <p>
          Tire prices, brands, sizes, and stock change regularly and may vary based on supply,
          quantity, and current market conditions. We make every effort to keep our pricing accurate,
          but quotes may change before an order is confirmed. We reserve the right to correct errors
          and to decline or cancel any order.
        </p>
      </LegalSection>

      <LegalSection heading="Orders, pickup, and delivery">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Most orders are ready within 24 to 72 hours, subject to stock.</li>
          <li>
            Free local delivery is available on orders of 4 or more tires within 60km of Charlottetown.
            Outside that area, pickup or shipping can be arranged and additional charges may apply.
          </li>
          <li>
            We do not operate a walk-in retail storefront. Pickup is arranged by appointment in
            Charlottetown.
          </li>
          <li>Delivery times are estimates and are not guaranteed.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Payment">
        <p>
          Payment terms are confirmed directly with you at the time of your order. Tires remain the
          property of Mos Tire Wholesale until payment has been received in full.
        </p>
      </LegalSection>

      <LegalSection heading="Product information and warranty">
        <p>
          We stock brand-name tires from a range of manufacturers. Any manufacturer warranty is
          provided by the tire manufacturer and is subject to their terms and conditions. Mos Tire
          Wholesale does not provide a separate warranty unless we agree to one in writing. Images and
          descriptions on this website are for general illustration and may not reflect the exact
          product supplied.
        </p>
      </LegalSection>

      <LegalSection heading="Returns and exchanges">
        <p>
          If there is an issue with your order, contact us promptly and we will work with you to make
          it right. Returns and exchanges are handled on a case-by-case basis and may be subject to the
          condition of the tires and any applicable manufacturer policy.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          You agree to use this website only for lawful purposes and not to misuse it, interfere with
          its operation, or attempt to access it in any unauthorized way.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          This website and its content are provided "as is". To the fullest extent permitted by law,
          Mos Tire Wholesale is not liable for any indirect or incidental damages arising from your use
          of the website or reliance on any quote or information provided. Nothing in these Terms limits
          any rights you have under applicable consumer protection law.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of the Province of Prince Edward Island and the
          applicable laws of Canada.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these Terms">
        <p>
          We may update these Terms from time to time. Any changes will be posted on this page with a
          revised "last updated" date.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about these Terms? Contact Mos Tire Wholesale at{' '}
          <a href="tel:9029922664" className="text-[#e4322b] hover:underline">902-992-2664</a> or on{' '}
          <a href="https://wa.me/19029922664" target="_blank" rel="noopener noreferrer" className="text-[#e4322b] hover:underline">WhatsApp</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
