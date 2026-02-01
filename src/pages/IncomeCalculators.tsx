import { Link } from 'react-router-dom';

const calculators = [
  {
    name: 'Take Home Pay Calculator',
    description: 'Estimate your net pay after federal taxes, state taxes, FICA, and pre-tax deductions like 401(k) contributions.',
    url: 'https://take-home-pay-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Salary to Hourly Calculator',
    description: 'Convert annual salary to hourly rate, or calculate annual earnings from an hourly wage.',
    url: 'https://salary-to-hourly-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Overtime Pay Calculator',
    description: 'Calculate overtime earnings based on regular hourly rate, overtime hours, and applicable overtime multipliers.',
    url: 'https://overtime-pay-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Bonus Tax Estimator',
    description: 'Estimate how much of your bonus you\'ll actually receive after supplemental wage tax withholding.',
    url: 'https://bonus-tax-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Paycheck Frequency Calculator',
    description: 'Compare weekly, bi-weekly, semi-monthly, and monthly pay schedules to understand annual differences.',
    url: 'https://paycheck-frequency-calculator-2026.vercel.app',
    available: true
  }
];

export default function IncomeCalculators() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Income Calculators</h1>
          <p>
            Estimate your take-home pay, understand paycheck deductions, and plan your finances
            with our collection of income and salary calculators.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <div className="info-note">
          Calculators open on their own dedicated sites for accuracy and performance.
        </div>

        <h2>Understanding Your Income</h2>
        <p>
          Your gross salary is only part of the picture. Federal and state taxes, Social Security,
          Medicare, retirement contributions, and health insurance premiums all affect how much
          money actually reaches your bank account. Our income calculators help you estimate
          these deductions and understand your true take-home pay.
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

        <h2>How Income Calculations Work</h2>
        <p>
          Income calculations typically involve several components:
        </p>
        <ul>
          <li><strong>Gross Pay:</strong> Your total earnings before any deductions.</li>
          <li><strong>Federal Income Tax:</strong> Calculated using IRS tax brackets based on filing status and income.</li>
          <li><strong>State Income Tax:</strong> Varies by state; some states have no income tax.</li>
          <li><strong>FICA Taxes:</strong> Social Security (6.2%) and Medicare (1.45%) contributions.</li>
          <li><strong>Pre-Tax Deductions:</strong> 401(k) contributions, health insurance, and FSA/HSA contributions reduce taxable income.</li>
        </ul>

        <h2>Tips for Using Income Calculators</h2>
        <ul>
          <li>Use your most recent pay stub to find accurate withholding information.</li>
          <li>Include all pre-tax deductions to get an accurate take-home estimate.</li>
          <li>Remember that tax brackets are marginal &mdash; only income above each threshold is taxed at the higher rate.</li>
          <li>State tax rates and rules vary significantly; check your state's specific requirements.</li>
        </ul>

        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            These calculators provide estimates for educational purposes only. Actual tax withholdings
            depend on your specific circumstances, W-4 elections, and employer policies. Consult a
            tax professional or your employer's HR department for precise information.
          </p>
        </div>
      </div>
    </>
  );
}
