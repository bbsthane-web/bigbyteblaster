
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const RepairLab = lazy(() => import('./pages/RepairLab'));
const MobileClinic = lazy(() => import('./pages/MobileClinic'));
const Peripherals = lazy(() => import('./pages/Peripherals'));
const DataRecovery = lazy(() => import('./pages/DataRecovery'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const AreaService = lazy(() => import('./pages/AreaService'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

const TitleUpdater: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    const baseTitle = "Big Byte Blaster";
    let pageTitle = "Thane's Elite Tech Repair Experts";
    let metaDescription = "Expert Laptop, Printer, MacBook, and Data Recovery services in Thane West, Manpada, and Ghodbunder Road. Fast, professional tech repairs.";

    const path = location.pathname;

    if (path === '/') {
      pageTitle = "Thane's Elite Tech Repair Experts";
    } else if (path === '/privacy') {
      pageTitle = "Privacy Protocol";
    } else if (path === '/terms') {
      pageTitle = "Terms of Operation";
    } else if (path.startsWith('/repair-lab')) {
      pageTitle = "Computer & MacBook Repair Lab Thane";
    } else if (path.startsWith('/mobile-clinic')) {
      pageTitle = "iPhone & Smartphone Clinic Thane";
    } else if (path.startsWith('/peripherals')) {
      pageTitle = "Printer & Camera Repair Experts";
    } else if (path.startsWith('/data-recovery')) {
      pageTitle = "Expert Data Recovery Suite";
    }

    document.title = `${baseTitle} | ${pageTitle}`;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <TitleUpdater />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repair-lab" element={<RepairLab />} />
              <Route path="/mobile-clinic" element={<MobileClinic />} />
              <Route path="/peripherals" element={<Peripherals />} />
              <Route path="/data-recovery" element={<DataRecovery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/service/:serviceName/in/:location" element={<AreaService />} />
              <Route path="/repair/:serviceName/in/:location" element={<AreaService />} />
            </Routes>
          </Suspense>
        </main>
        <SocialFloating />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
