import { Link } from 'react-router-dom';

const calculators = [
  {
    name: 'Unpaid Wages Estimator',
    description: 'Estimate potential unpaid wages for overtime, minimum wage violations, or final pay issues.',
    url: 'https://unpaid-wages-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Unpaid Wages Eligibility Checker',
    description: 'Evaluate whether your situation may qualify for an unpaid wages claim based on employment factors and timing.',
    url: 'https://unpaid-wages-eligibility-checker-2026.vercel.app',
    available: true
  },
  {
    name: 'Overtime Eligibility Checker',
    description: 'Determine whether you may be entitled to overtime pay based on job duties and exemption status.',
    url: 'https://overtime-eligibility-checker-2026.vercel.app',
    available: true
  },
  {
    name: 'Exempt vs Non-Exempt Checker',
    description: 'Evaluate factors that determine whether a position is exempt from overtime requirements.',
    url: 'https://exempt-vs-nonexempt-checker-2026.vercel.app',
    available: true
  },
  {
    name: 'Contractor vs Employee Checker',
    description: 'Evaluate factors that distinguish employees from independent contractors for classification purposes.',
    url: 'https://contractor-vs-employee-checker-2026.vercel.app',
    available: true
  }
];

export default function LegalCalculators() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Legal Calculators</h1>
          <p>
            Explore educational tools that help you understand potential outcomes for employment,
            wage, and other legal scenarios.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <div className="info-note">
          Calculators open on their own dedicated sites for accuracy and performance.
        </div>

        <h2>Educational Legal Estimators</h2>
        <p>
          Legal matters can be complex and confusing. Our legal calculators provide educational
          information to help you understand potential scenarios and outcomes. These tools are
          designed to help you prepare for conversations with qualified legal professionals.
        </p>

        <h2>Available Calculators</h2>
        <div className="calculator-list">
          {calculators.map((calc) => (
            <a
              key={calc.name}
              href={calc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`calculator-card ${!calc.available ? 'coming-soon' : ''}`}
            >
              <strong>{calc.name}</strong>
              <span>{calc.description}</span>
              <span className="cta">
                {calc.available ? 'Open Calculator →' : 'Coming Soon'}
              </span>
            </a>
          ))}
        </div>

        <h2>Understanding Wage and Employment Law</h2>
        <p>
          Federal and state laws establish important protections for workers:
        </p>
        <ul>
          <li><strong>Fair Labor Standards Act (FLSA):</strong> Federal law establishing minimum wage, overtime pay, and child labor standards.</li>
          <li><strong>State Wage Laws:</strong> Many states have additional protections exceeding federal minimums.</li>
          <li><strong>Exempt vs Non-Exempt:</strong> Classification determines overtime eligibility based on job duties and salary level.</li>
          <li><strong>Statute of Limitations:</strong> Legal deadlines for filing claims vary by claim type and jurisdiction.</li>
        </ul>

        <h2>When to Consult an Attorney</h2>
        <p>
          While our calculators provide educational information, certain situations warrant professional legal advice:
        </p>
        <ul>
          <li>You believe your employer has violated wage and hour laws.</li>
          <li>You've been misclassified as an independent contractor.</li>
          <li>You're facing retaliation for reporting workplace violations.</li>
          <li>You need to understand your rights before taking action.</li>
          <li>Filing deadlines are approaching for potential claims.</li>
        </ul>

        <div className="disclaimer">
          <h4>Important Disclaimer</h4>
          <p>
            These calculators provide general educational information only and do not constitute legal advice.
            Laws vary significantly by state and individual circumstances. The results do not guarantee
            eligibility for any claim or predict legal outcomes. Always consult with a qualified attorney
            licensed in your jurisdiction before taking legal action.
          </p>
        </div>
      </div>
    </>
  );
}
