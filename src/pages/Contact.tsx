import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <div className="contact-box">
          <h3>Get in Touch</h3>
          <p>
            For general inquiries, feedback, or suggestions for new calculators,
            please reach out to us via email.
          </p>
          <a href="mailto:hello@scenariocalculators.com" className="contact-email">
            hello@scenariocalculators.com
          </a>
        </div>

        <h2>What We Can Help With</h2>
        <ul>
          <li><strong>Calculator Suggestions:</strong> Have an idea for a calculator we should add? Let us know!</li>
          <li><strong>Bug Reports:</strong> Found an error or issue with one of our calculators? We want to fix it.</li>
          <li><strong>General Feedback:</strong> Tell us how we can improve your experience on the site.</li>
          <li><strong>Business Inquiries:</strong> For partnership or advertising inquiries, please include "Business" in your subject line.</li>
        </ul>

        <h2>Response Time</h2>
        <p>
          We aim to respond to all inquiries within 2-3 business days. For urgent matters,
          please indicate the urgency in your subject line.
        </p>

        <h2>What We Cannot Help With</h2>
        <p>
          Please note that we cannot provide personalized financial, legal, tax, or insurance advice.
          Our calculators are educational tools, and we always recommend consulting with qualified
          professionals for advice specific to your situation.
        </p>
        <p>
          If you need professional assistance, please contact:
        </p>
        <ul>
          <li>A certified financial planner (CFP) for financial planning questions</li>
          <li>A certified public accountant (CPA) for tax questions</li>
          <li>A licensed attorney for legal questions</li>
          <li>A licensed insurance agent for insurance questions</li>
        </ul>

        <h2>Mailing Address</h2>
        <p>
          Scenario Calculators<br />
          P.O. Box 12345<br />
          Wilmington, DE 19801<br />
          United States
        </p>
      </div>
    </>
  );
}
