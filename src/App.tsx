import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Contact } from '@/pages/Contact';
import { KnowledgeWeb } from '@/pages/KnowledgeWeb';
import { WorkHistory } from '@/pages/WorkHistory';
import { NotFound } from '@/pages/NotFound';
import './App.css';

/**
 * Main Application Component
 *
 * Defines the application routing structure.
 * To add new routes:
 * 1. Create a new page component in ./pages/
 * 2. Import it above
 * 3. Add a <Route> element below with the appropriate path
 */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/knowledge-web" element={<KnowledgeWeb />} />
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
