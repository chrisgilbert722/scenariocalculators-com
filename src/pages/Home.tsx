import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Scenario Calculators for Real-Life Decisions</h1>
          <p>
            Explore our collection of educational calculators designed to help you estimate outcomes
            for income, loans, insurance, and legal scenarios. Make more informed decisions with
            clear, easy-to-understand projections.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container">
        <div className="category-grid">
          <div className="category-card">
            <h3>Income Calculators</h3>
            <p>
              Estimate your take-home pay, understand tax withholdings, and plan your budget
              with salary and paycheck calculators.
            </p>
            <Link to="/income-calculators">Explore Income Tools &rarr;</Link>
          </div>

          <div className="category-card">
            <h3>Loan Calculators</h3>
            <p>
              Calculate monthly payments, compare loan terms, and understand the total cost
              of mortgages, auto loans, and personal loans.
            </p>
            <Link to="/loan-calculators">Explore Loan Tools &rarr;</Link>
          </div>

          <div className="category-card">
            <h3>Insurance Calculators</h3>
            <p>
              Estimate insurance premiums and coverage needs for auto, home, renters,
              and life insurance policies.
            </p>
            <Link to="/insurance-calculators">Explore Insurance Tools &rarr;</Link>
          </div>

          <div className="category-card">
            <h3>Legal Calculators</h3>
            <p>
              Understand potential outcomes for wage claims, employment eligibility,
              and other legal scenarios with educational estimators.
            </p>
            <Link to="/legal-calculators">Explore Legal Tools &rarr;</Link>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="section section-alt">
        <div className="container">
          <h2>How to Use Scenario Calculators</h2>
          <div className="section-content">
            <p>
              Our scenario calculators are designed to provide educational estimates that help you
              understand potential outcomes before making important financial and legal decisions.
              Here's how to get the most from our tools:
            </p>
            <ul>
              <li>
                <strong>Choose a category</strong> that matches your situation &mdash; whether you're
                planning income, comparing loans, evaluating insurance options, or exploring legal scenarios.
              </li>
              <li>
                <strong>Enter your information</strong> into the calculator fields. All data is processed
                locally and is not stored or shared.
              </li>
              <li>
                <strong>Review the results</strong> to understand estimated outcomes. Results include
                breakdowns and explanations to help you interpret the numbers.
              </li>
              <li>
                <strong>Use estimates as a starting point</strong> for conversations with qualified
                professionals such as financial advisors, accountants, insurance agents, or attorneys.
              </li>
            </ul>

            <div className="disclaimer">
              <h4>Important Disclaimer</h4>
              <p>
                The calculators on this website are for educational and informational purposes only.
                They do not constitute financial, legal, tax, or insurance advice. Results are estimates
                based on the information you provide and general assumptions. Always consult with
                qualified professionals before making important decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section">
        <div className="container">
          <h2>Why Use Scenario Calculators?</h2>
          <div className="section-content">
            <p>
              Understanding the financial implications of major life decisions can be challenging.
              Our calculators provide a clear, accessible way to estimate outcomes and explore
              different scenarios before committing to a course of action.
            </p>
            <ul>
              <li><strong>Educational Focus:</strong> Each calculator includes explanations of the factors and formulas used.</li>
              <li><strong>Privacy First:</strong> All calculations happen in your browser. We don't store your personal data.</li>
              <li><strong>No Account Required:</strong> Access all calculators instantly without signing up.</li>
              <li><strong>Regularly Updated:</strong> Tax rates, insurance factors, and other data are updated to reflect current standards.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
