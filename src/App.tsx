import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import IncomeCalculators from './pages/IncomeCalculators';
import LoanCalculators from './pages/LoanCalculators';
import InsuranceCalculators from './pages/InsuranceCalculators';
import LegalCalculators from './pages/LegalCalculators';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScenarioBasedFinancialDecisionModeling from './pages/guide/ScenarioBasedFinancialDecisionModeling';
import UnderstandingRiskExposureModeling from './pages/guide/UnderstandingRiskExposureModeling';
import WhenCostEstimatesAreReliable from './pages/guide/WhenCostEstimatesAreReliable';
import ComparingCompetingFinancialOutcomes from './pages/guide/ComparingCompetingFinancialOutcomes';
import LimitationsOfOnlineCalculators from './pages/guide/LimitationsOfOnlineCalculators';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income-calculators" element={<IncomeCalculators />} />
          <Route path="/loan-calculators" element={<LoanCalculators />} />
          <Route path="/insurance-calculators" element={<InsuranceCalculators />} />
          <Route path="/legal-calculators" element={<LegalCalculators />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/guide/scenario-based-financial-decision-modeling" element={<ScenarioBasedFinancialDecisionModeling />} />
          <Route path="/guide/understanding-risk-exposure-modeling" element={<UnderstandingRiskExposureModeling />} />
          <Route path="/guide/when-cost-estimates-are-reliable" element={<WhenCostEstimatesAreReliable />} />
          <Route path="/guide/comparing-competing-financial-outcomes" element={<ComparingCompetingFinancialOutcomes />} />
          <Route path="/guide/limitations-of-online-calculators" element={<LimitationsOfOnlineCalculators />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
