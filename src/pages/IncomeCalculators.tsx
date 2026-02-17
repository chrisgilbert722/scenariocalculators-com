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

        <h2>What These Income Calculators Estimate</h2>
        <p>
          The income calculators in this collection cover several aspects of personal earnings and compensation.
          The Take Home Pay Calculator estimates net pay after subtracting federal income tax, state income tax,
          Social Security contributions, Medicare contributions, and voluntary pre-tax deductions such as 401(k)
          contributions and health insurance premiums. The Salary to Hourly Calculator converts between annual
          salary figures and equivalent hourly rates, accounting for the number of working hours per week and
          weeks worked per year. The Overtime Pay Calculator estimates additional earnings when hours exceed
          standard thresholds, applying the applicable overtime multiplier to the regular hourly rate.
        </p>
        <p>
          The Bonus Tax Estimator projects net bonus amounts after supplemental wage tax withholding, which
          differs from regular income withholding in how it is calculated at the federal level. The Paycheck
          Frequency Calculator illustrates how the same annual salary translates into different per-paycheck
          amounts depending on whether pay is distributed weekly, bi-weekly, semi-monthly, or monthly.
        </p>
        <p>
          Results from these calculators vary for several reasons. Federal tax brackets change annually based on
          inflation adjustments published by the IRS. State tax structures differ significantly: some states use
          flat rates, others use progressive brackets, and nine states impose no state income tax at all.
          Individual circumstances such as filing status (single, married filing jointly, head of household),
          number of allowances or adjustments claimed on a W-4 form, and pre-tax benefit elections all influence
          the final take-home amount. Employer-specific policies around retirement matching, health plan
          contributions, and supplemental wage treatment also introduce variation that general-purpose
          calculators cannot fully account for.
        </p>
        <p>
          The primary inputs that affect outcomes include gross salary or hourly rate, filing status, state of
          residence, number of pay periods per year, pre-tax retirement contribution percentages, health
          insurance premiums, and any additional withholding amounts. Changing any single input can shift the
          estimated result noticeably, which is why running multiple scenarios with different values provides
          a broader perspective on possible outcomes.
        </p>

        <h2>How to Interpret Income Calculator Results</h2>
        <p>
          Income calculator results represent estimates based on standardized tax tables and common payroll
          formulas. They are not predictions of what any specific paycheck will contain. Understanding several
          key aspects of these estimates helps place them in proper context.
        </p>
        <h3>Reading Estimated Amounts</h3>
        <p>
          When a calculator displays an estimated take-home pay figure, that number reflects the mathematical
          result of applying current-year tax rates and standard deduction rules to the inputs provided. The
          actual amount on a paycheck may differ due to factors the calculator does not capture, such as
          garnishments, employer-specific benefit costs, local taxes (city or county), or mid-year changes
          to W-4 elections. If a calculator shows a range rather than a single number, the low end typically
          assumes higher deductions or tax burdens, while the high end assumes fewer deductions or a more
          favorable tax treatment.
        </p>
        <h3>Assumptions Built Into the Calculations</h3>
        <p>
          Most income calculators assume that the user earns the same amount in every pay period throughout
          the year. They typically apply the standard deduction rather than itemized deductions unless
          specifically prompted otherwise. FICA calculations assume the user has not yet exceeded the Social
          Security wage base for the year. State tax calculations generally use the most common filing
          scenario for that state and may not account for local surtaxes, city income taxes, or special
          credits available in certain jurisdictions. Overtime calculators assume a standard 40-hour
          workweek as the threshold, though some states and industries use different thresholds.
        </p>
        <h3>What These Calculators Do and Do Not Replace</h3>
        <p>
          These tools serve as educational aids for understanding how different components of compensation
          and taxation interact. They can help illustrate the impact of changing contribution rates, switching
          pay frequencies, or moving to a different state. They do not replace official payroll systems, which
          use employer-specific data and real-time tax table updates. They do not replace consultation with a
          tax professional for complex situations involving multiple income sources, self-employment income,
          investment income, or tax credits and deductions beyond the standard deduction. They also do not
          replace the official IRS withholding estimator, which accounts for year-to-date withholding amounts
          and projected annual tax liability.
        </p>
        <p>
          For the most accurate picture of take-home pay, comparing calculator estimates against recent pay
          stubs reveals where assumptions diverge from reality. Differences typically arise from employer-specific
          deductions, local taxes, or mid-year adjustments that general calculators cannot model.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between gross pay and net pay?</h3>
        <p>
          Gross pay is the total amount earned before any deductions. Net pay (also called take-home pay) is
          the amount remaining after subtracting federal income tax, state income tax, FICA taxes (Social
          Security and Medicare), and any voluntary deductions such as retirement contributions and insurance
          premiums. The gap between gross and net pay varies widely depending on income level, state of
          residence, filing status, and benefit elections.
        </p>
        <h3>Why does the calculator result differ from my actual paycheck?</h3>
        <p>
          Several factors can cause differences. Employer-specific deductions (such as union dues, parking
          benefits, or employer-subsidized insurance) are not typically included in general calculators.
          Local income taxes at the city or county level may apply in some jurisdictions. Mid-year changes
          to tax withholding, reaching the Social Security wage base cap, or adjustments to benefit elections
          can all shift actual paycheck amounts away from a static estimate.
        </p>
        <h3>What are FICA taxes?</h3>
        <p>
          FICA stands for the Federal Insurance Contributions Act. It encompasses two separate taxes: Social
          Security tax at 6.2% of wages up to the annual wage base limit, and Medicare tax at 1.45% of all
          wages with no cap. An additional 0.9% Medicare surtax applies to wages exceeding $200,000 for
          single filers or $250,000 for married couples filing jointly. Employers pay a matching amount
          for both Social Security and Medicare.
        </p>
        <h3>How do pre-tax deductions affect take-home pay?</h3>
        <p>
          Pre-tax deductions (such as traditional 401(k) contributions, health insurance premiums, and
          flexible spending account contributions) are subtracted from gross pay before income taxes are
          calculated. This reduces taxable income, which means less federal and state income tax is withheld.
          However, most pre-tax deductions are still subject to FICA taxes. The net effect is that each
          dollar contributed pre-tax reduces take-home pay by less than a full dollar, because the tax
          savings partially offset the deduction.
        </p>
        <h3>What does "marginal tax rate" mean?</h3>
        <p>
          The marginal tax rate is the tax rate applied to the last dollar of income earned. The U.S.
          federal income tax system uses progressive brackets, meaning different portions of income are
          taxed at different rates. For example, a portion of income falls in the 10% bracket, the next
          portion in the 12% bracket, and so on. The marginal rate is the highest bracket that applies
          to a given income level, but it does not mean all income is taxed at that rate. The effective
          tax rate (total tax divided by total income) is typically lower than the marginal rate.
        </p>
        <h3>How does pay frequency affect annual earnings?</h3>
        <p>
          Pay frequency determines how many paychecks are received per year: weekly (52), bi-weekly (26),
          semi-monthly (24), or monthly (12). For salaried employees, the annual total remains the same
          regardless of frequency, but the per-paycheck amount differs. For hourly employees paid bi-weekly,
          two months per year contain three paychecks instead of two, which can affect monthly budgeting.
          Tax withholding per paycheck also adjusts based on frequency, as the annual tax liability is
          divided across the number of pay periods.
        </p>
        <h3>Do these calculators account for state-specific rules?</h3>
        <p>
          The calculators apply general state income tax rates and bracket structures where applicable.
          However, some states have unique rules such as local income taxes (e.g., New York City, some
          Ohio municipalities), reciprocal agreements between neighboring states, or special deductions
          and credits that may not be fully reflected. States without income tax (Alaska, Florida, Nevada,
          New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming) will show no state
          withholding in the estimates.
        </p>

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
