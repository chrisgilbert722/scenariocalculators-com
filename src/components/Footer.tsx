import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/income-calculators">Income Calculators</Link></li>
              <li><Link to="/loan-calculators">Loan Calculators</Link></li>
              <li><Link to="/insurance-calculators">Insurance Calculators</Link></li>
              <li><Link to="/legal-calculators">Legal Calculators</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Scenario Calculators. All rights reserved. For educational and informational purposes only.
        </div>
      </div>
    </footer>
  );
}
