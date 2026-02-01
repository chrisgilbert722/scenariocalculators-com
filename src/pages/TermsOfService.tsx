import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: February 2026</p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <p>
          Please read these Terms of Service ("Terms") carefully before using the Scenario Calculators
          website at scenariocalculators.com (the "Site"). By accessing or using the Site, you agree
          to be bound by these Terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this Site, you accept and agree to be bound by these Terms and our
          Privacy Policy. If you do not agree to these Terms, you should not use the Site.
        </p>

        <h2>2. Educational Purpose Only</h2>
        <p>
          The calculators, tools, and content on this Site are provided for <strong>educational and
          informational purposes only</strong>. They are designed to help you understand general
          concepts and estimate potential outcomes for various financial, insurance, and legal scenarios.
        </p>
        <p>
          The information provided should not be relied upon as the sole basis for making important
          decisions. Results are estimates based on the information you provide and general assumptions
          that may not apply to your specific situation.
        </p>

        <h2>3. No Professional Advice</h2>
        <p>
          <strong>This Site does not provide financial, legal, tax, insurance, or investment advice.</strong>
        </p>
        <ul>
          <li>The calculators do not constitute financial planning or investment advice.</li>
          <li>The information is not intended as legal advice and does not create an attorney-client relationship.</li>
          <li>Tax calculations are estimates and do not replace professional tax preparation.</li>
          <li>Insurance estimates do not represent actual quotes or policy offers.</li>
        </ul>
        <p>
          Always consult with qualified professionals (such as certified financial planners, licensed
          attorneys, certified public accountants, or licensed insurance agents) before making
          important financial, legal, or insurance decisions.
        </p>

        <h2>4. Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no warranties or
          representations about the accuracy, completeness, or reliability of any information on the Site.
        </p>
        <p>
          Tax rates, insurance factors, legal requirements, and other data used in our calculators
          are subject to change without notice. We do not guarantee that the information reflects
          current laws, regulations, or market conditions.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Scenario Calculators and its owners, operators,
          affiliates, and employees shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from:
        </p>
        <ul>
          <li>Your use of or inability to use the Site</li>
          <li>Any errors or omissions in the content or calculations</li>
          <li>Any decisions made based on information from the Site</li>
          <li>Any unauthorized access to or use of our servers</li>
          <li>Any interruption or cessation of transmission to or from the Site</li>
        </ul>
        <p>
          Your use of the Site is at your own risk.
        </p>

        <h2>6. No Warranties</h2>
        <p>
          The Site and its content are provided "as is" and "as available" without warranties of
          any kind, either express or implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>7. User Conduct</h2>
        <p>
          You agree not to use the Site:
        </p>
        <ul>
          <li>For any unlawful purpose or in violation of any applicable laws</li>
          <li>To transmit any harmful, threatening, or objectionable content</li>
          <li>To interfere with or disrupt the Site or servers</li>
          <li>To attempt to gain unauthorized access to any portion of the Site</li>
          <li>To collect or store personal data about other users</li>
        </ul>

        <h2>8. Intellectual Property</h2>
        <p>
          All content on this Site, including text, graphics, logos, and software, is the property
          of Scenario Calculators or its content suppliers and is protected by copyright and other
          intellectual property laws. You may not reproduce, distribute, or create derivative works
          from this content without our express written permission.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. These links are provided for your
          convenience only. We do not endorse or assume responsibility for the content, privacy
          policies, or practices of any third-party websites.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately
          upon posting on the Site. Your continued use of the Site after changes are posted constitutes
          your acceptance of the modified Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United States,
          without regard to conflict of law principles.
        </p>

        <h2>12. Contact Information</h2>
        <p>
          If you have questions about these Terms, please contact us at:{' '}
          <a href="mailto:legal@scenariocalculators.com">legal@scenariocalculators.com</a>
        </p>
      </div>
    </>
  );
}
