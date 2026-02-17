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

        <h2>What These Loan Calculators Estimate</h2>
        <p>
          The loan calculators in this collection address several types of borrowing scenarios. The Mortgage
          Payment Calculator estimates monthly payments for a home loan, including principal, interest, property
          taxes, and homeowners insurance (commonly referred to as PITI). The Auto Loan Calculator projects
          monthly car payments based on the vehicle price, down payment amount, annual interest rate, and loan
          duration. The Student Loan Payment Estimator models monthly payments under various federal repayment
          plans, including standard, graduated, and income-driven options, as well as private loan structures.
        </p>
        <p>
          The Personal Loan Calculator estimates payments and total interest for unsecured loans, which
          typically carry higher interest rates than secured loans because no collateral backs the debt. The
          Debt Payoff Calculator models two common repayment strategies: the avalanche method (targeting the
          highest-interest debt first) and the snowball method (targeting the smallest balance first), showing
          how each approach affects the total interest paid and time to become debt-free. The Mortgage Refinance
          Calculator compares current mortgage terms against potential refinance terms to illustrate the
          break-even point and long-term interest differences.
        </p>
        <p>
          Results vary because actual loan terms depend on credit scores, debt-to-income ratios, lender-specific
          underwriting criteria, current market interest rates, and loan program requirements. A borrower with
          a higher credit score generally qualifies for lower interest rates, which significantly affects both
          monthly payment amounts and total interest paid over the life of the loan. Property-related factors
          such as location, property type, and loan-to-value ratio also influence mortgage-specific calculations.
          For student loans, the specific federal program and repayment plan selected can produce substantially
          different monthly payment amounts for the same loan balance.
        </p>
        <p>
          Key inputs that affect calculation outcomes include the loan amount (principal), annual interest rate,
          loan term in months or years, down payment or trade-in value, property tax rates, insurance costs,
          and any additional monthly payments applied to principal. Small changes to the interest rate or loan
          term can produce large differences in total cost, which is why exploring multiple scenarios with
          different values is informative.
        </p>

        <h2>How to Interpret Loan Calculator Results</h2>
        <p>
          Loan calculator results provide mathematical estimates based on standard amortization formulas. They
          represent what payments would be under the specific terms entered, not a guarantee of what any lender
          will offer. Several considerations help place these estimates in context.
        </p>
        <h3>Understanding Monthly Payment Estimates</h3>
        <p>
          The monthly payment figure typically includes principal repayment and interest. For mortgage
          calculators, it may also include estimated property tax and insurance amounts, often called an
          escrow payment. The principal portion of each payment gradually increases over time while the
          interest portion decreases, following the standard amortization schedule. Early in a loan's life,
          the majority of each payment goes toward interest. This is why the total interest paid over a
          30-year mortgage can equal or exceed the original loan amount, even at moderate interest rates.
        </p>
        <h3>Total Interest and Total Cost</h3>
        <p>
          Total interest represents the cumulative interest paid over the entire loan term if only minimum
          payments are made. Total cost equals the principal plus total interest. These figures illustrate
          the true cost of borrowing and highlight how extending a loan term reduces monthly payments but
          increases the overall amount paid. For example, a $300,000 mortgage at 7% interest costs
          significantly more in total interest over 30 years than over 15 years, even though the monthly
          payment is lower with the longer term.
        </p>
        <h3>Assumptions in Loan Calculations</h3>
        <p>
          Standard loan calculators assume a fixed interest rate for the entire loan term unless specifically
          designed for adjustable-rate scenarios. They assume payments are made on time and in full each
          month. They typically do not account for origination fees, closing costs, discount points, or
          private mortgage insurance (PMI) unless those fields are explicitly included. Property tax and
          insurance estimates use averages or user-provided figures that may not reflect actual costs in
          a specific location. Debt payoff calculators assume no new debt is added during the repayment
          period.
        </p>
        <h3>What These Calculators Do and Do Not Replace</h3>
        <p>
          Loan calculators serve as educational tools for understanding how interest rates, loan terms,
          and payment amounts interact mathematically. They can illustrate the cost difference between
          two interest rates or the impact of making additional principal payments. They do not replace
          official Loan Estimates or Closing Disclosures provided by lenders, which contain the actual
          terms, fees, and costs specific to a loan offer. They do not replace consultation with a
          mortgage broker or financial professional for complex situations involving multiple properties,
          investment loans, or unusual loan structures. They also do not account for tax implications
          such as the mortgage interest deduction, which depends on individual tax circumstances.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>What is amortization?</h3>
        <p>
          Amortization is the process of repaying a loan through scheduled periodic payments that cover
          both principal and interest. In a standard amortization schedule, each payment is the same
          amount, but the proportion allocated to interest versus principal shifts over time. Early
          payments are mostly interest, while later payments are mostly principal. An amortization
          table shows this breakdown for each payment period over the life of the loan.
        </p>
        <h3>What is the difference between interest rate and APR?</h3>
        <p>
          The interest rate is the cost of borrowing the principal amount, expressed as a percentage.
          The Annual Percentage Rate (APR) includes the interest rate plus certain fees and costs
          associated with obtaining the loan, such as origination fees or discount points. The APR
          is typically higher than the interest rate and provides a more comprehensive picture of
          the total annual cost of a loan. Federal regulations require lenders to disclose the APR
          so borrowers can make more informed comparisons.
        </p>
        <h3>How does a down payment affect a mortgage?</h3>
        <p>
          A down payment reduces the loan amount (principal) that needs to be borrowed. A larger
          down payment results in lower monthly payments and less total interest paid over the loan
          term. For conventional mortgages, putting down less than 20% of the purchase price
          typically requires private mortgage insurance (PMI), which adds to the monthly cost.
          The down payment amount also affects the loan-to-value (LTV) ratio, which lenders use
          as one factor in determining loan terms and interest rates.
        </p>
        <h3>What is the difference between the avalanche and snowball debt repayment methods?</h3>
        <p>
          The avalanche method directs extra payments toward the debt with the highest interest rate
          first while making minimum payments on all other debts. This approach minimizes total
          interest paid over the repayment period. The snowball method directs extra payments toward
          the debt with the smallest balance first. While this method may result in slightly more
          total interest paid, it eliminates individual debts more quickly, which some people find
          motivating. Both methods involve making at least the minimum payment on all debts
          simultaneously.
        </p>
        <h3>Why might a refinance calculator show different results than a lender offers?</h3>
        <p>
          Refinance calculators use the inputs provided to estimate savings based on the difference
          between current and new loan terms. Actual lender offers include closing costs, appraisal
          fees, title insurance, and other expenses that affect the true cost of refinancing. The
          break-even point (when cumulative savings exceed refinancing costs) depends on these
          real-world costs. Additionally, lenders assess creditworthiness, current home equity,
          and market conditions when determining the actual interest rate offered, which may differ
          from the rate entered into a calculator.
        </p>
        <h3>What is a loan-to-value (LTV) ratio?</h3>
        <p>
          The loan-to-value ratio is the loan amount divided by the appraised value of the property,
          expressed as a percentage. For example, borrowing $240,000 on a $300,000 property results
          in an 80% LTV. Lenders use LTV as a risk measure: higher LTV ratios indicate more risk
          because the borrower has less equity in the property. LTV affects interest rates, PMI
          requirements, and loan approval decisions. Refinance calculations also use LTV based
          on the current appraised value of the property.
        </p>
        <h3>How do extra principal payments affect a loan?</h3>
        <p>
          Extra payments applied directly to the loan principal reduce the outstanding balance
          faster than scheduled. This has two effects: it reduces the total interest paid over
          the life of the loan (because interest is calculated on a smaller remaining balance),
          and it shortens the time needed to fully repay the loan. Even small additional monthly
          payments can produce significant savings over a long-term loan. For example, adding
          an extra $100 per month to a 30-year mortgage payment can reduce the total interest
          by tens of thousands of dollars and shorten the loan term by several years, depending
          on the original loan amount and interest rate.
        </p>

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
