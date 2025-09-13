// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Zap } from 'lucide-react';

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'Platforms', path: '/platforms' },
//     { name: 'MLM Plans', path: '/mlm-plans' },
//     { name: 'Pricing', path: '/pricing' }
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 ${
//       isScrolled ? 'nav-menu py-4' : 'py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//               <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
//             </div>
//             <span className="text-xl md:text-2xl font-bold futuristic-text font-['Orbitron']">
//               MLM Tech
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <button className="neon-button px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base">
//               Get Quote
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden w-10 h-10 rounded-lg glassmorphism flex items-center justify-center"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-cyan-400" />
//             ) : (
//               <Menu className="w-6 h-6 text-cyan-400" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden mt-6 glassmorphism rounded-2xl p-6 animate-slide-in-up">
//             <div className="flex flex-col gap-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className="nav-link text-center py-3"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <button 
//                 className="neon-button px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Quote
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;





import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Platforms", path: "/platforms" },
    { name: "MLM Plans", path: "/mlm-plans" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 ${
        isScrolled
          ? "backdrop-blur-md bg-slate-900/80 shadow-lg py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white font-['Orbitron'] tracking-wide">
            MLM Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full"></span>
              )}
            </Link>
          ))}
          <button className="neon-button px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/60 backdrop-blur-md border border-slate-700 hover:border-cyan-500 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 p-6 animate-slide-in-up">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium text-center py-2 rounded-md transition ${
                  location.pathname === item.path
                    ? "text-cyan-400 bg-slate-800"
                    : "text-white hover:text-cyan-400 hover:bg-slate-800/60"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="neon-button px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
