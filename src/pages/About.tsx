import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Scenario Calculators</h1>
          <p>
            Helping people make informed decisions through educational financial tools.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <h2>Our Mission</h2>
        <p>
          Scenario Calculators was created to provide free, accessible, and educational tools
          that help people understand the financial implications of important life decisions.
          We believe that everyone deserves access to clear, unbiased information when planning
          their finances, evaluating loans, or understanding their rights.
        </p>

        <h2>What We Offer</h2>
        <p>
          Our website provides a collection of calculators and educational resources across
          four main categories:
        </p>
        <ul>
          <li><strong>Income Calculators:</strong> Tools to help you understand take-home pay, tax withholdings, and paycheck calculations.</li>
          <li><strong>Loan Calculators:</strong> Resources for comparing mortgages, auto loans, student loans, and debt repayment strategies.</li>
          <li><strong>Insurance Calculators:</strong> Estimators for auto, home, renters, and life insurance premiums and coverage needs.</li>
          <li><strong>Legal Calculators:</strong> Educational tools for understanding wage claims, employment classifications, and legal deadlines.</li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          Every calculator on Scenario Calculators is designed with these principles in mind:
        </p>
        <ul>
          <li><strong>Education First:</strong> We explain the factors and formulas behind each calculation so you understand how results are derived.</li>
          <li><strong>Privacy Focused:</strong> All calculations happen in your browser. We don't store, track, or sell your personal information.</li>
          <li><strong>No Sales Pressure:</strong> We don't sell financial products or push you toward specific providers.</li>
          <li><strong>Clear Disclaimers:</strong> We're transparent about the limitations of our tools and always recommend consulting qualified professionals.</li>
        </ul>

        <h2>Limitations</h2>
        <p>
          While we strive to provide accurate and helpful information, it's important to understand
          what our calculators can and cannot do:
        </p>
        <ul>
          <li>Our tools provide <strong>estimates</strong>, not guarantees or official calculations.</li>
          <li>Results are based on general formulas and may not reflect your specific situation.</li>
          <li>Tax laws, insurance rates, and legal requirements change frequently.</li>
          <li>Our calculators are <strong>not a substitute</strong> for professional advice from accountants, financial advisors, insurance agents, or attorneys.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions for new calculators? We'd love to hear from you.
          Visit our <Link to="/contact">Contact page</Link> to get in touch.
        </p>
      </div>
    </>
  );
}
