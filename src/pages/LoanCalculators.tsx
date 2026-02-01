import { Link } from 'react-router-dom';

const calculators = [
  {
    name: 'Mortgage Payment Calculator',
    description: 'Calculate monthly mortgage payments including principal, interest, taxes, and insurance (PITI).',
    url: 'https://mortgage-payment-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Auto Loan Calculator',
    description: 'Estimate monthly car payments based on vehicle price, down payment, interest rate, and loan term.',
    url: 'https://auto-loan-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Student Loan Payment Estimator',
    description: 'Project monthly payments for federal and private student loans under different repayment plans.',
    url: 'https://student-loan-payment-estimator-2026.vercel.app',
    available: true
  },
  {
    name: 'Personal Loan Calculator',
    description: 'Calculate payments and total interest for unsecured personal loans.',
    url: 'https://personal-loan-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Debt Payoff Calculator',
    description: 'Create a debt payoff plan using avalanche or snowball methods to become debt-free faster.',
    url: 'https://debt-payoff-calculator-2026.vercel.app',
    available: true
  },
  {
    name: 'Mortgage Refinance Calculator',
    description: 'Determine whether refinancing your mortgage could save you money over time.',
    url: 'https://mortgage-refinance-savings-calculator-2026.vercel.app',
    available: true
  }
];

export default function LoanCalculators() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Loan Calculators</h1>
          <p>
            Compare loan options, calculate monthly payments, and understand the true cost
            of borrowing with our loan and debt calculators.
          </p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <div className="info-note">
          Calculators open on their own dedicated sites for accuracy and performance.
        </div>

        <h2>Making Informed Borrowing Decisions</h2>
        <p>
          Whether you're buying a home, financing a car, or consolidating debt, understanding the
          full cost of a loan is essential. Our loan calculators help you compare interest rates,
          loan terms, and payment amounts to find the option that best fits your financial situation.
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

        <h2>Key Loan Concepts</h2>
        <p>
          Understanding these terms will help you use loan calculators effectively:
        </p>
        <ul>
          <li><strong>Principal:</strong> The original amount borrowed, excluding interest.</li>
          <li><strong>Interest Rate (APR):</strong> The annual cost of borrowing, expressed as a percentage.</li>
          <li><strong>Loan Term:</strong> The length of time to repay the loan (e.g., 30-year mortgage, 5-year auto loan).</li>
          <li><strong>Amortization:</strong> The process of paying off debt through regular payments that cover both principal and interest.</li>
          <li><strong>Total Interest:</strong> The total amount you'll pay in interest over the life of the loan.</li>
        </ul>

        <h2>Tips for Comparing Loans</h2>
        <ul>
          <li>Compare the APR, not just the interest rate, to account for fees and closing costs.</li>
          <li>Shorter loan terms typically have higher monthly payments but lower total interest.</li>
          <li>Making extra payments toward principal can significantly reduce total interest paid.</li>
          <li>Consider your complete financial picture, including emergency funds and other obligations.</li>
        </ul>

        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            Loan calculators provide estimates based on the information you enter. Actual loan terms,
            rates, and payments depend on your credit profile, lender policies, and market conditions.
            These tools are for educational purposes and do not constitute loan offers or financial advice.
          </p>
        </div>
      </div>
    </>
  );
}
