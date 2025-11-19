import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import './App.css';

const Contact = lazy(() =>
  import('@/pages/Contact').then((module) => ({ default: module.Contact }))
);
const KnowledgeWeb = lazy(() =>
  import('@/pages/KnowledgeWeb').then((module) => ({
    default: module.KnowledgeWeb,
  }))
);
const WorkHistory = lazy(() =>
  import('@/pages/WorkHistory').then((module) => ({
    default: module.WorkHistory,
  }))
);
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({ default: module.NotFound }))
);

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/knowledge-web" element={<KnowledgeWeb />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
