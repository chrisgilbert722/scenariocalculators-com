import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Scenario Calculators</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/income-calculators">Income</Link>
          <Link to="/loan-calculators">Loans</Link>
          <Link to="/insurance-calculators">Insurance</Link>
          <Link to="/legal-calculators">Legal</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
