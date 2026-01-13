import React from 'react';
import { HashRouter as Router, useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async'; // <--- Import Novo
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/work/:slug", element: <ProjectDetail /> }
  ]);

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider> {/* <--- Provider deve envolver tudo */}
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <MainLayout>
            <AnimatedRoutes />
          </MainLayout>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;