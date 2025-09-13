import React from 'react';
import { BarChart3, Zap, Smartphone, Coins, Shield, Headphones, Globe, Database } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Rich Dashboard',
      description: 'Advanced analytics with real-time insights, comprehensive reporting, and AI-powered business intelligence',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '99.9% Uptime'
    },
    {
      icon: Zap,
      title: 'Fastest Load Time',
      description: 'Optimized performance with lightning-fast response times, efficient caching, and CDN integration',
      gradient: 'from-yellow-500 to-orange-500',
      stats: '<100ms Response'
    },
    {
      icon: Smartphone,
      title: 'User-Friendly UI',
      description: 'Intuitive responsive design that works seamlessly across all devices with modern UX principles',
      gradient: 'from-purple-500 to-pink-500',
      stats: 'Mobile-First'
    },
    {
      icon: Coins,
      title: 'Multi-Currency & Crypto',
      description: 'Support for 150+ traditional currencies and 50+ cryptocurrencies with real-time exchange rates',
      gradient: 'from-emerald-500 to-teal-500',
      stats: '200+ Currencies'
    },
    {
      icon: Shield,
      title: 'Secure Payment Gateway',
      description: 'Bank-level security with encrypted transactions, fraud protection, and PCI DSS compliance',
      gradient: 'from-red-500 to-rose-500',
      stats: 'Bank-Level Security'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support, maintenance services, and dedicated account management',
      gradient: 'from-indigo-500 to-purple-500',
      stats: '24/7 Available'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide server network with automatic scaling, load balancing, and disaster recovery',
      gradient: 'from-cyan-500 to-blue-500',
      stats: '5 Continents'
    },
    {
      icon: Database,
      title: 'Advanced Analytics',
      description: 'Machine learning insights, predictive analytics, and comprehensive business intelligence tools',
      gradient: 'from-violet-500 to-purple-500',
      stats: 'AI-Powered'
    }
  ];

  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg">Key Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Advanced features designed to power your MLM business to unprecedented heights
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ultra-glass rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Enhanced glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-r ${feature.gradient} blur-2xl`}></div>
                  
                  {/* Stats badge */}
                  <div className="absolute top-4 right-4">
                    <div className="glassmorphism px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/30">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-6 left-6 w-4 h-4 border border-purple-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative`}>
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 font-['Orbitron']">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
                Enterprise-Grade Performance
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Our software is built to handle millions of users with enterprise-grade infrastructure and security.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 font-['Orbitron']">99.99%</div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2 font-['Orbitron']">10M+</div>
                  <div className="text-gray-400">Users Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2 font-['Orbitron']">50+</div>
                  <div className="text-gray-400">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;