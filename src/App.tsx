import { Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import PaymentsPage from './pages/PaymentsPage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <Layout> {/* Wrap all routes in the main Layout */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/education" element={<EducationPage />} />
        {/* Add other routes, e.g., settings, profile, 404 */}
        <Route path="*" element={<DashboardPage />} /> {/* Default fallback */}
      </Routes>
    </Layout>
  );
}

export default App;