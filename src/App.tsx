// import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
// import PlatformsPage from './pages/PlatformsPage';
// import MLMPlansPage from './pages/MLMPlansPage';
// import PricingPage from './pages/PricingPage';
// import MLMPlanDetail from './pages/MLMPlanDetail';
// import ParticleBackground from './components/ParticleBackground';

// function App() {
//   useEffect(() => {
//     // Add scroll reveal animation
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('revealed');
//         }
//       });
//     }, observerOptions);

//     const scrollElements = document.querySelectorAll('.scroll-reveal');
//     scrollElements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-900 overflow-x-hidden relative">
//       <ParticleBackground />
//       <Navigation />
      
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/platforms" element={<PlatformsPage />} />
//         <Route path="/mlm-plans" element={<MLMPlansPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/mlm-plans/:planName" element={<MLMPlanDetail />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PlatformsPage from "./pages/PlatformsPage";
import MLMPlansPage from "./pages/MLMPlansPage";
import PricingPage from "./pages/PricingPage";
import MLMPlanDetail from "./pages/MLMPlanDetail";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // optional: only reveal once
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // 🔑 re-run whenever route changes

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden relative">
      <ParticleBackground />
      <Navigation />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/mlm-plans" element={<MLMPlansPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/mlm-plans/:planName" element={<MLMPlanDetail />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
