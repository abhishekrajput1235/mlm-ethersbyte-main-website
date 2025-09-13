import React from 'react';
import { Cpu, Network, Server, Shield, Zap, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Totally Decentralized',
      subtitle: 'Smart Contract Based',
      icon: Cpu,
      description: 'Immutable blockchain solutions with complete transparency and automated smart contract execution for the ultimate in security and trust.',
      features: ['Zero Trust Architecture', 'Immutable Records', 'Auto-executing Contracts', 'Complete Transparency'],
      badge: 'Most Secure',
      badgeColor: 'from-cyan-400 to-blue-500',
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan-500',
      premium: true
    },
    {
      title: 'Semi-Decentralized',
      subtitle: 'Hybrid Solution',
      icon: Network,
      description: 'Best of both worlds combining blockchain security with traditional database performance for optimal efficiency.',
      features: ['Hybrid Architecture', 'Enhanced Performance', 'Flexible Integration', 'Balanced Security'],
      badge: 'Optimized',
      badgeColor: 'from-purple-400 to-pink-500',
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'purple-500'
    },
    {
      title: 'Fully Centralized',
      subtitle: 'Traditional & Robust',
      icon: Server,
      description: 'Enterprise-grade centralized solutions with military-level security and lightning-fast performance for maximum reliability.',
      features: ['High Performance', 'Enterprise Security', 'Rapid Deployment', 'Cost Effective'],
      badge: 'Enterprise Ready',
      badgeColor: 'from-emerald-400 to-teal-500',
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'emerald-500'
    }
  ];

  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            MLM Software Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Choose from our three revolutionary approaches to MLM software development
          </p>
        </div>

{/* Enhanced Services Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
  {services.map((service, index) => {
    const IconComponent = service.icon;
    return (
      <div
        key={index}
        className="service-card group relative scroll-reveal"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="ultra-glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 h-full flex flex-col relative overflow-hidden">
          {/* Premium badge for decentralized */}
          {service.premium && (
            <div className="absolute top-4 md:top-4 left-1/2 transform translate-x-4 z-20">
              <div
                className={`px-8 py-3 rounded-full bg-gradient-to-r ${service.badgeColor} text-white font-bold text-sm shadow-2xl animate-pulse-glow`}
              >
                <Shield className="w-4 h-4 inline mr-2" />
                {service.badge}
              </div>
            </div>
          )}

          {/* Animated background gradient */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r ${service.gradient} blur-2xl`}
          ></div>

          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse"></div>

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Enhanced Icon */}
            <div
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-6 md:mb-8 rounded-2xl md:rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}
            >
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
              ></div>
            </div>

            {/* Text content */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 font-['Orbitron']">
              {service.title}
            </h3>
            <p className="text-cyan-400 text-base md:text-lg font-medium mb-4 md:mb-6">
              {service.subtitle}
            </p>
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
              {service.description}
            </p>

            {/* Enhanced Features */}
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <div
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${service.gradient} mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300`}
                  ></div>
                  <span className="font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Enhanced Learn more button (sticks to bottom) */}
            <button
              className={`mt-auto w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-base md:text-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:scale-105`}
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Additional info section */}
        <div className="text-center mt-20 scroll-reveal">
          <div className="ultra-glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
                Why Choose Our MLM Software?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                <div className="text-center">
                  <Globe className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Global Scale</h4>
                  <p className="text-gray-400 text-sm md:text-base">Built to handle millions of users worldwide</p>
                </div>
                <div className="text-center">
                  <Zap className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Lightning Fast</h4>
                  <p className="text-gray-400 text-sm md:text-base">Optimized for maximum performance</p>
                </div>
                <div className="text-center">
                  <Shield className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Bank-Level Security</h4>
                  <p className="text-gray-400 text-sm md:text-base">Military-grade encryption and protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;