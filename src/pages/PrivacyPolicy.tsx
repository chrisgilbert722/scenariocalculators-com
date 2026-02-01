import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: February 2026</p>
        </div>
      </div>

      <div className="page-content">
        <Link to="/" className="back-link">&larr; Back to Home</Link>

        <p>
          This Privacy Policy describes how Scenario Calculators ("we," "us," or "our") collects,
          uses, and shares information when you use our website at scenariocalculators.com (the "Site").
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          When you use our calculators, you may enter personal financial information such as income,
          loan amounts, or other data. This information is processed entirely in your browser and
          is not transmitted to or stored on our servers.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our Site, we may automatically collect certain information, including:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages you visit and time spent on those pages</li>
          <li>Referring website address</li>
          <li>Device type (desktop, mobile, tablet)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the automatically collected information to:
        </p>
        <ul>
          <li>Analyze website traffic and usage patterns</li>
          <li>Improve our website and user experience</li>
          <li>Diagnose technical problems</li>
          <li>Display relevant advertising</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect and store information about
          your visit to our Site. Cookies are small text files placed on your device that help us
          analyze website traffic and improve your experience.
        </p>
        <p>
          You can control cookies through your browser settings. However, disabling cookies may
          affect the functionality of some features on our Site.
        </p>

        <h2>Third-Party Advertising</h2>
        <p>
          We use Google AdSense to display advertisements on our Site. Google AdSense and other
          third-party advertising companies may use cookies, web beacons, and similar technologies
          to collect information about your visits to this and other websites to provide relevant
          advertisements about goods and services that may interest you.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads based on
          your visit to our Site and/or other sites on the Internet. You may opt out of personalized
          advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
        </p>
        <p>
          For more information about how Google uses your data, please visit{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use third-party analytics services, such as Google Analytics, to collect and
          analyze information about website usage. These services may use cookies and other
          tracking technologies to collect data about your use of our Site and other websites.
        </p>
        <p>
          Google Analytics collects information such as how often users visit the Site, what pages
          they visit, and what other sites they used prior to coming to our Site. We use this
          information to improve our Site and content. You can learn more about how Google uses
          data at{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            Google's Partner Sites page
          </a>.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect against unauthorized access,
          alteration, disclosure, or destruction of information. However, no method of transmission
          over the Internet or electronic storage is completely secure.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our Site is not intended for children under 13 years of age. We do not knowingly collect
          personal information from children under 13. If you are a parent or guardian and believe
          your child has provided us with personal information, please contact us.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Our Site may contain links to third-party websites. We are not responsible for the
          privacy practices or content of those websites. We encourage you to read the privacy
          policies of any third-party sites you visit.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@scenariocalculators.com">privacy@scenariocalculators.com</a>
        </p>
      </div>
    </>
  );
}
