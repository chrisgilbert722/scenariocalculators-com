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

        <h2>What These Legal Calculators Estimate</h2>
        <p>
          The legal calculators in this collection focus on employment law topics related to wages,
          worker classification, and overtime eligibility. The Unpaid Wages Estimator calculates potential
          amounts owed in situations involving overtime violations, minimum wage shortfalls, or final pay
          issues, based on hourly rate, hours worked, and the applicable time period. The Unpaid Wages
          Eligibility Checker evaluates whether a described employment situation may meet the general
          criteria for an unpaid wages claim based on factors such as employment status, type of violation,
          and time elapsed since the events in question.
        </p>
        <p>
          The Overtime Eligibility Checker assesses whether a described job role may qualify for overtime
          pay under federal and state standards, considering factors like job duties, salary level, and
          industry. The Exempt vs Non-Exempt Checker evaluates whether a position's characteristics align
          with the criteria for overtime exemption under the Fair Labor Standards Act (FLSA) duties tests.
          The Contractor vs Employee Checker examines factors that distinguish independent contractor
          arrangements from employment relationships, based on common law tests and economic reality factors
          used by various government agencies.
        </p>
        <p>
          Results from these calculators vary significantly because employment law is highly fact-specific
          and jurisdiction-dependent. Federal law establishes baseline standards, but most states have their
          own wage and hour laws that may provide different or additional protections. Some states set higher
          minimum wages, use different overtime thresholds, or apply different tests for worker classification.
          Local ordinances in certain cities and counties add further variation. The specific facts of each
          situation, including the nature of the work performed, the degree of employer control, and the
          documentation available, all affect legal outcomes in ways that a general calculator cannot fully
          model.
        </p>
        <p>
          Key inputs that affect these calculators include hourly rate or salary amount, number of hours
          worked per week, duration of the employment period in question, job duties and responsibilities,
          degree of control exercised by the employer, state of employment, and the type of alleged
          violation. Because legal outcomes depend on specific factual circumstances and the interpretation
          of applicable laws, calculator results represent general educational information rather than
          legal determinations.
        </p>

        <h2>How to Interpret Legal Calculator Results</h2>
        <p>
          Legal calculator results are educational estimates that illustrate how employment law concepts
          apply to general scenarios. They do not constitute legal analysis of any specific situation.
          Understanding several aspects of these results helps place them in proper context.
        </p>
        <h3>Reading Estimated Amounts in Wage Calculators</h3>
        <p>
          When a wage calculator displays an estimated amount, it represents a mathematical calculation
          based on the inputs provided and applicable wage rates. For overtime calculations, the estimate
          typically applies the standard overtime multiplier (1.5 times the regular rate) to hours exceeding
          40 per week, as required by federal law. Some states require overtime for hours exceeding 8 per
          day or for work on the seventh consecutive day, which can produce different results. The calculator
          may show potential amounts for different time periods, reflecting that claims can cover varying
          durations depending on the statute of limitations (typically two years under federal law, or three
          years for willful violations, though state timelines differ).
        </p>
        <h3>Understanding Eligibility and Classification Results</h3>
        <p>
          The eligibility and classification checkers present results based on the factors entered, typically
          indicating whether a situation appears to align with criteria for a particular classification or
          claim type. These results reflect general legal standards but do not account for the full
          complexity of legal analysis. For example, the exempt vs non-exempt determination under the FLSA
          involves both a salary threshold test and a duties test. The duties test examines the primary
          duties actually performed, not just job titles, and requires a detailed factual analysis that goes
          beyond what a checklist-based tool can provide. Similarly, worker classification (employee vs
          independent contractor) is evaluated differently by the IRS, the Department of Labor, and state
          agencies, each applying their own multi-factor tests.
        </p>
        <h3>Assumptions in Legal Calculations</h3>
        <p>
          These calculators generally apply federal standards as a baseline unless state-specific information
          is entered. They assume the information entered is accurate and complete. Wage calculations assume
          a standard employment relationship and may not account for exceptions applicable to certain
          industries (such as tipped employees, agricultural workers, or certain seasonal employees) or
          employment arrangements (such as piece-rate pay or fluctuating workweek calculations). The
          calculators do not factor in potential liquidated damages, penalties, or attorney's fees that
          may apply in actual legal proceedings, nor do they account for employer defenses or mitigating
          circumstances.
        </p>
        <h3>What These Calculators Do and Do Not Replace</h3>
        <p>
          These tools provide educational information about general employment law concepts and how they
          apply in common scenarios. They can help illustrate the difference between exempt and non-exempt
          classifications, show how overtime is typically calculated, or identify factors relevant to worker
          classification disputes. They do not replace consultation with an employment attorney who can
          evaluate the specific facts and circumstances of an individual situation. They do not replace
          official determinations by the Department of Labor, state labor agencies, or courts. They cannot
          assess the strength of a potential legal claim, predict legal outcomes, or account for recent
          regulatory changes or judicial interpretations that may affect how the law applies in a
          particular jurisdiction.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>What is the Fair Labor Standards Act (FLSA)?</h3>
        <p>
          The Fair Labor Standards Act is a federal law enacted in 1938 that establishes minimum wage,
          overtime pay, recordkeeping, and child labor standards for employees in the private sector and
          in federal, state, and local governments. Under the FLSA, covered nonexempt employees are
          entitled to a minimum wage (the current federal minimum wage is $7.25 per hour, though many
          states set higher rates) and overtime pay at one and one-half times the regular rate of pay for
          hours worked beyond 40 in a workweek. The FLSA is administered and enforced by the Wage and
          Hour Division of the U.S. Department of Labor.
        </p>
        <h3>What does "exempt" versus "non-exempt" mean?</h3>
        <p>
          These terms refer to whether an employee is covered by the FLSA's overtime and minimum wage
          provisions. Non-exempt employees are entitled to overtime pay for hours worked over 40 per
          workweek. Exempt employees are excluded from overtime requirements if they meet specific criteria
          related to salary level and job duties. The main exemption categories are executive, administrative,
          professional, computer employee, and outside sales. To qualify for most exemptions, an employee
          must be paid on a salary basis at or above a threshold amount set by the Department of Labor,
          and their primary job duties must meet the specific tests defined for each exemption category.
        </p>
        <h3>How is overtime pay typically calculated?</h3>
        <p>
          Under federal law, overtime pay is calculated at 1.5 times the employee's "regular rate of pay"
          for each hour worked beyond 40 in a workweek. The regular rate includes not just the hourly wage
          but may also include certain bonuses, commissions, and other forms of compensation. Some states
          have additional overtime rules. For example, California requires daily overtime pay for hours
          worked beyond 8 in a single day and double time for hours beyond 12. The workweek is defined as
          any fixed, recurring period of 168 hours (seven consecutive 24-hour periods) and does not need
          to align with the calendar week.
        </p>
        <h3>What is the difference between an employee and an independent contractor?</h3>
        <p>
          The distinction centers on the degree of control and independence in the working relationship.
          Employees generally work under the direction and control of an employer regarding what work is
          done and how it is performed. Independent contractors typically control the manner and means of
          accomplishing the work, use their own tools, work for multiple clients, and bear their own
          business expenses and risks. Different agencies use different tests to make this determination.
          The IRS uses a common-law test examining behavioral control, financial control, and relationship
          type. The Department of Labor uses an economic reality test. Some states use the ABC test, which
          presumes a worker is an employee unless three specific conditions establishing independence
          are met.
        </p>
        <h3>What is a statute of limitations in the context of wage claims?</h3>
        <p>
          A statute of limitations is the legally defined time period within which a claim must be filed.
          For federal wage claims under the FLSA, the statute of limitations is generally two years from
          the date of the violation, or three years if the violation is found to be willful. State statutes
          of limitations vary and may be shorter or longer than the federal period. Once the statute of
          limitations expires, the claim is generally barred regardless of its merits. The time period
          typically runs from the date each individual violation occurred, not from the end of employment
          or the date the violation was discovered.
        </p>
        <h3>What is the difference between federal and state wage laws?</h3>
        <p>
          Federal wage laws (primarily the FLSA) set minimum standards that apply nationwide. State wage
          laws may establish higher minimum wages, broader overtime coverage, stricter employer
          requirements, or additional employee protections beyond federal standards. When federal and state
          law differ, the law that provides greater protection to the employee generally applies. For
          example, if a state's minimum wage is higher than the federal minimum wage, employers in that
          state must pay the state rate. Some states also have meal and rest break requirements, predictive
          scheduling laws, or pay transparency mandates that do not exist at the federal level.
        </p>
        <h3>What does worker misclassification mean?</h3>
        <p>
          Worker misclassification occurs when an employer classifies a worker as an independent contractor
          when the nature of the working relationship actually meets the legal criteria for an employment
          relationship. Misclassification affects the worker's access to benefits and protections,
          including minimum wage, overtime pay, unemployment insurance, workers' compensation, employer
          tax contributions (Social Security and Medicare), and protections under employment discrimination
          laws. It also affects tax obligations, as independent contractors are responsible for paying
          self-employment taxes that employers would otherwise partially cover. Misclassification may be
          intentional or result from a misunderstanding of the applicable legal tests.
        </p>

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
