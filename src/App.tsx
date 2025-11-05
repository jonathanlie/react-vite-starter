import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Forms } from '@/pages/Forms';
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
