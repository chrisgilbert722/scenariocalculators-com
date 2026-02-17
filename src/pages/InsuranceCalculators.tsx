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

        <h2>What These Insurance Calculators Estimate</h2>
        <p>
          The insurance calculators in this collection address different types of coverage and cost estimation.
          The Car Insurance Cost Estimator projects auto insurance premiums based on driver demographics,
          vehicle characteristics, coverage levels, and geographic location. The Homeowners Insurance Estimator
          calculates approximate annual premiums for home insurance based on property value, construction type,
          location, coverage limits, and deductible selections. The Renters Insurance Estimator projects the
          cost of covering personal property within a rented dwelling, including liability protection.
        </p>
        <p>
          The Life Insurance Needs Calculator estimates how much coverage may be appropriate based on income
          replacement needs, outstanding debts, future obligations such as education costs, and existing
          assets or coverage. The Auto Insurance Savings Estimator models how different discount scenarios
          and coverage adjustments affect premium amounts, illustrating the potential impact of factors like
          bundling policies, maintaining a clean driving record, or adjusting deductible levels.
        </p>
        <p>
          Insurance estimates vary widely because insurers use proprietary rating algorithms that weigh
          hundreds of factors differently. Two individuals with similar profiles can receive substantially
          different quotes from different companies. Geographic location is a major variable: areas with
          higher rates of theft, severe weather, or expensive medical care typically have higher premiums.
          Personal factors including age, credit history (in states where permitted), claims history, and
          driving record all influence pricing. The specific coverage options selected, including deductible
          amounts, liability limits, and optional endorsements, directly affect premium calculations.
        </p>
        <p>
          Primary inputs that affect estimation outcomes include the type and amount of coverage desired,
          deductible levels, property or vehicle value, location (ZIP code), age and demographic information,
          claims history, and any applicable discount qualifications. Because insurance pricing is highly
          individualized, calculator estimates represent general approximations rather than binding quotes.
        </p>

        <h2>How to Interpret Insurance Calculator Results</h2>
        <p>
          Insurance calculator results provide ballpark estimates based on industry averages and general
          rating factors. They are designed to illustrate how different variables affect premium costs,
          not to replicate the exact pricing model of any specific insurer. Several important considerations
          help contextualize these estimates.
        </p>
        <h3>Understanding Premium Estimates and Ranges</h3>
        <p>
          When an insurance calculator displays an estimated premium, it typically represents an average or
          mid-range figure for the profile described. Actual premiums from individual insurers may be
          significantly higher or lower. If a calculator presents a range, the low end reflects favorable
          rating factors and competitive pricing, while the high end accounts for less favorable factors
          or more comprehensive coverage. Premium estimates are usually expressed as annual or monthly
          amounts. Annual premiums may be slightly lower than 12 times the monthly amount because some
          insurers charge installment fees for monthly billing.
        </p>
        <h3>The Relationship Between Deductibles and Premiums</h3>
        <p>
          Deductibles and premiums have an inverse relationship. A deductible is the amount paid out of
          pocket before insurance coverage begins to pay. Higher deductibles generally result in lower
          premiums because the policyholder assumes more of the initial financial risk. Lower deductibles
          mean higher premiums because the insurer begins paying sooner. The calculators can model this
          tradeoff, showing how selecting different deductible levels changes the estimated premium.
          The total annual cost (premium plus potential deductible) depends on whether a claim is filed.
        </p>
        <h3>Assumptions in Insurance Calculations</h3>
        <p>
          Insurance calculators rely on generalized data rather than insurer-specific rating tables.
          They typically assume a clean claims history unless otherwise specified. Auto insurance estimates
          may assume standard vehicle usage (commuting, average annual mileage) unless usage details are
          provided. Homeowners insurance estimates use regional average construction costs and may not
          reflect the specific features, age, or condition of an individual property. Life insurance
          estimates often assume standard health classifications and may not account for specific medical
          conditions, tobacco use, or hazardous occupations that significantly affect actual premiums.
        </p>
        <h3>What These Calculators Do and Do Not Replace</h3>
        <p>
          These tools serve an educational purpose by illustrating how insurance pricing factors interact
          and how coverage choices affect costs. They can help in understanding the general cost range
          for different types of coverage and in exploring how adjusting variables like deductibles or
          coverage limits changes estimated premiums. They do not replace actual insurance quotes from
          licensed agents or insurance companies, which use detailed underwriting criteria and proprietary
          rating factors. They do not replace professional assessment of appropriate coverage levels for
          individual circumstances. They also do not account for discounts that may require verification,
          such as home security systems, defensive driving course completion, or employer-sponsored
          group rates.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between a premium and a deductible?</h3>
        <p>
          A premium is the amount paid to maintain an insurance policy, typically billed monthly, quarterly,
          or annually. A deductible is the amount the policyholder pays out of pocket when a covered claim
          occurs before the insurance company begins to pay. For example, with a $500 deductible on an auto
          policy, the first $500 of a covered repair is the policyholder's responsibility. These are
          separate costs: premiums are paid regardless of whether a claim is filed, while deductibles are
          only relevant when a claim occurs.
        </p>
        <h3>Why do insurance premiums vary so much by location?</h3>
        <p>
          Insurers assess risk based on geographic data. For auto insurance, areas with higher traffic
          density, more accidents, higher vehicle theft rates, or more expensive medical care tend to have
          higher premiums. For homeowners insurance, regions prone to hurricanes, tornadoes, wildfires,
          flooding, or earthquakes carry higher risk premiums. Local building costs, crime rates, and
          proximity to fire stations also affect home insurance pricing. State regulations governing
          insurance rating practices add another layer of geographic variation.
        </p>
        <h3>What does liability coverage mean in insurance?</h3>
        <p>
          Liability coverage pays for damages or injuries the policyholder is legally responsible for
          causing to others. In auto insurance, liability coverage includes bodily injury liability
          (covering medical costs for people injured in an accident the policyholder caused) and property
          damage liability (covering damage to other people's property). In homeowners or renters insurance,
          liability coverage protects against claims from people injured on the policyholder's property or
          by the policyholder's actions. Liability coverage does not pay for the policyholder's own injuries
          or property damage.
        </p>
        <h3>What factors affect life insurance cost estimates?</h3>
        <p>
          Life insurance premiums are primarily influenced by age, health status, gender, tobacco use,
          coverage amount, and policy type (term versus permanent). Younger, healthier applicants generally
          qualify for lower rates. The length of coverage (for term policies) also affects cost: a 30-year
          term policy costs more per year than a 10-year term policy for the same coverage amount because
          the insurer bears risk over a longer period. Occupation, hobbies (such as skydiving or scuba
          diving), family medical history, and driving record may also be considered.
        </p>
        <h3>What is the difference between replacement cost and actual cash value?</h3>
        <p>
          Replacement cost coverage pays to replace damaged or destroyed property with new items of similar
          kind and quality, without deducting for depreciation. Actual cash value (ACV) coverage pays the
          depreciated value of the item at the time of loss, meaning the payout accounts for age and wear.
          For example, a five-year-old television destroyed in a fire would be reimbursed at its current
          depreciated value under ACV, but at the cost of a comparable new television under replacement
          cost coverage. Replacement cost policies typically have higher premiums than ACV policies.
        </p>
        <h3>How does credit score affect insurance premiums?</h3>
        <p>
          In most states, insurers use credit-based insurance scores as one factor in determining premiums
          for auto and homeowners insurance. These scores are derived from credit report data and are
          distinct from traditional credit scores used by lenders. Statistical studies have shown a
          correlation between credit-based insurance scores and the likelihood of filing claims. Some
          states (including California, Hawaii, Massachusetts, and Maryland for auto insurance) prohibit
          or restrict the use of credit information in insurance pricing. Where permitted, a lower
          credit-based insurance score may result in higher premiums.
        </p>
        <h3>What does bundling insurance policies mean?</h3>
        <p>
          Bundling refers to purchasing multiple insurance policies from the same company, such as
          combining auto and homeowners insurance with one insurer. Insurance companies often offer
          multi-policy discounts to bundled customers. The discount amount varies by insurer but
          commonly ranges from 5% to 25% off one or both policies. Bundling can also simplify policy
          management by consolidating billing and claims with a single company. However, the bundled
          price from one insurer is not always lower than purchasing separate policies from different
          insurers offering individually competitive rates.
        </p>

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
