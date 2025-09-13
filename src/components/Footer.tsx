import { Link } from "react-router-dom";
import { Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Platforms", path: "/platforms" },
    { name: "MLM Plans", path: "/mlm-plans" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <footer className="relative bg-slate-950 text-gray-400 pt-16 pb-8 overflow-hidden">
      {/* Futuristic glowing orbs in background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white font-['Orbitron'] tracking-wide">
              MLM Tech
            </span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Next-generation MLM solutions built with futuristic technology —
            secure, scalable, and fully customizable for your success.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-slate-900/70 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="neon-button px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-4">
            <a href="#" className="glassmorphism p-3 rounded-full hover:text-cyan-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="glassmorphism p-3 rounded-full hover:text-cyan-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="glassmorphism p-3 rounded-full hover:text-cyan-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="glassmorphism p-3 rounded-full hover:text-cyan-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-slate-700/50"></div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MLM Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
