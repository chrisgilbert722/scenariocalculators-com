import { Link } from 'react-router-dom';

const calculators = [
  {
    name: 'Car Insurance Cost Estimator',
    description: 'Estimate auto insurance premiums based on driver age, vehicle type, coverage level, and location.',
    url: 'https://car-insurance-cost-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Homeowners Insurance Estimator',
    description: 'Calculate estimated home insurance costs based on property value, location, and coverage options.',
    url: 'https://homeowners-insurance-cost-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Renters Insurance Estimator',
    description: 'Estimate renters insurance premiums based on personal property value and liability coverage needs.',
    url: 'https://renters-insurance-cost-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Life Insurance Needs Calculator',
    description: 'Determine how much life insurance coverage you may need based on income, debts, and family obligations.',
    url: 'https://life-insurance-need-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Auto Insurance Savings Estimator',
    description: 'Estimate potential savings from different auto insurance discounts and coverage adjustments.',
    url: 'https://auto-insurance-premium-savings-estimator-2026.vercel.app',
    available: true
  }
];

export default function InsuranceCalculators() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Insurance Calculators</h1>
          <p>
            Estimate insurance premiums and coverage needs to help you make informed decisions
            about protecting yourself, your family, and your assets.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <div className="info-note">
          Calculators open on their own dedicated sites for accuracy and performance.
        </div>

        <h2>Understanding Insurance Costs</h2>
        <p>
          Insurance premiums depend on many factors including coverage levels, deductibles, location,
          and personal risk factors. Our insurance calculators help you estimate costs and compare
          options before speaking with insurance agents or requesting formal quotes.
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

        <h2>Factors That Affect Insurance Premiums</h2>
        <p>
          Insurance companies use various factors to determine your premium:
        </p>
        <ul>
          <li><strong>Coverage Amount:</strong> Higher coverage limits typically mean higher premiums.</li>
          <li><strong>Deductible:</strong> Choosing a higher deductible usually lowers your premium but increases out-of-pocket costs when filing a claim.</li>
          <li><strong>Location:</strong> Where you live affects risk factors like crime rates, weather, and healthcare costs.</li>
          <li><strong>Claims History:</strong> Previous claims may increase your premiums.</li>
          <li><strong>Personal Factors:</strong> Age, credit score, and other personal characteristics may affect rates depending on the insurance type and state regulations.</li>
        </ul>

        <h2>Tips for Comparing Insurance Options</h2>
        <ul>
          <li>Compare coverage levels, not just premiums &mdash; the cheapest policy may not provide adequate protection.</li>
          <li>Consider bundling policies (home and auto) for potential discounts.</li>
          <li>Review coverage annually to ensure it still meets your needs.</li>
          <li>Ask about available discounts for safety features, good driving records, or professional memberships.</li>
        </ul>

        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            Insurance estimates are for educational purposes only and do not represent actual quotes.
            Premiums vary based on individual circumstances and insurer underwriting criteria. Contact
            licensed insurance agents for accurate quotes and policy recommendations.
          </p>
        </div>
      </div>
    </>
  );
}
