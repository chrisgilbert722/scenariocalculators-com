import { Link } from 'react-router-dom';

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

        <h2>Making Informed Borrowing Decisions</h2>
        <p>
          Whether you're buying a home, financing a car, or consolidating debt, understanding the
          full cost of a loan is essential. Our loan calculators help you compare interest rates,
          loan terms, and payment amounts to find the option that best fits your financial situation.
        </p>

        <h2>Available Calculators</h2>
        <ul className="calculator-list">
          <li>
            <strong>Mortgage Payment Calculator</strong>
            <span>Calculate monthly mortgage payments including principal, interest, taxes, and insurance (PITI).</span>
          </li>
          <li>
            <strong>Auto Loan Calculator</strong>
            <span>Estimate monthly car payments based on vehicle price, down payment, interest rate, and loan term.</span>
          </li>
          <li>
            <strong>Student Loan Payment Estimator</strong>
            <span>Project monthly payments for federal and private student loans under different repayment plans.</span>
          </li>
          <li>
            <strong>Personal Loan Calculator</strong>
            <span>Calculate payments and total interest for unsecured personal loans.</span>
          </li>
          <li>
            <strong>Debt Payoff Calculator</strong>
            <span>Create a debt payoff plan using avalanche or snowball methods to become debt-free faster.</span>
          </li>
          <li>
            <strong>Refinance Calculator</strong>
            <span>Determine whether refinancing your mortgage or auto loan could save you money.</span>
          </li>
        </ul>

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
