import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      subtitle: 'Centralized Solution',
      price: '₹10,000',
      originalPrice: '₹15,000',
      description: 'Perfect for startups and small MLM businesses looking to establish their presence',
      features: [
        'Centralized Database Architecture',
        'Essential Dashboard & Analytics',
        'Standard Security Protocols',
        'Email & Chat Support',
        '3 Months Maintenance',
        'Basic Payment Gateway',
        'Mobile Responsive Design',
        'User Management System'
      ],
      gradient: 'from-slate-600 to-slate-700',
      borderColor: 'border-slate-500/30',
      icon: Zap,
      badge: 'Starter'
    },
    {
      name: 'Professional',
      subtitle: 'Semi-Decentralized',
      price: '₹25,000',
      originalPrice: '₹35,000',
      description: 'Ideal for growing businesses seeking balanced solutions with hybrid architecture',
      features: [
        'Hybrid Blockchain Architecture',
        'Advanced Dashboard & AI Insights',
        'Enhanced Security & Encryption',
        'Priority Support & Training',
        '6 Months Maintenance',
        'Multi-Currency & Crypto Support',
        'Advanced Analytics & Reporting',
        'API Integration Capabilities',
        'Custom Branding Options'
      ],
      gradient: 'from-purple-600 to-indigo-600',
      borderColor: 'border-purple-500/30',
      popular: true,
      icon: Star,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      subtitle: 'Totally Decentralized',
      price: '₹60,000+',
      originalPrice: '₹80,000+',
      description: 'Ultimate blockchain-powered solution for enterprises demanding the highest security',
      features: [
        'Full Smart Contract Architecture',
        'Blockchain-Native Dashboard',
        'Military-Grade Security',
        'Dedicated Support Team',
        '12 Months Maintenance',
        'Complete Crypto Ecosystem',
        'AI-Powered Analytics',
        'Custom Smart Contract Development',
        'White-Label Solutions',
        'Global Infrastructure'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/30',
      premium: true,
      icon: Crown,
      badge: 'Premium'
    }
  ];

  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/3 via-purple-500/3 to-blue-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg">Pricing Plans</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your MLM business needs with our competitive pricing structure
          </p>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={index}
                className={`pricing-card group relative scroll-reveal ${
                  tier.popular ? 'ring-2 ring-purple-500/50 scale-105' : tier.premium ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="ultra-glass rounded-3xl p-10 h-full relative overflow-hidden">
                  {/* Enhanced glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-r ${tier.gradient} blur-2xl`}></div>

                  {/* Popular/Premium Badge */}
                  {tier.popular && (
                    <div className="absolute top-6 left-1/2 transform translate-x-1 z-20">
                      <div className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm flex items-center gap-2 shadow-2xl animate-pulse-glow">
                        <Star className="w-4 h-4" />
                        {tier.badge}
                      </div>
                    </div>
                  )}
                  {tier.premium && (
                    <div className="absolute top-6 left-1/2 transform translate-x-1 z-20">
                      <div className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-2xl animate-pulse-glow">
                        <Crown className="w-4 h-4" />
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Floating decorative elements */}
                  <div className="absolute top-6 right-6 w-6 h-6 border border-cyan-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse"></div>

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative`}>
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tier.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    </div>

                    {/* Plan name */}
                    <h3 className="text-3xl font-bold text-white mb-3 font-['Orbitron']">{tier.name}</h3>
                    <p className="text-cyan-400 text-lg font-medium mb-6">{tier.subtitle}</p>

                    {/* Enhanced Price */}
                    <div className="mb-8">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-5xl font-bold text-white font-['Orbitron']">{tier.price}</span>
                        {tier.originalPrice && (
                          <span className="text-xl text-gray-500 line-through">{tier.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-gray-400">starting price</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-8 leading-relaxed">{tier.description}</p>

                    {/* Enhanced Features */}
                    <ul className="space-y-4 mb-10">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Enhanced CTA Button */}
                    <button className={`w-full py-5 rounded-2xl bg-gradient-to-r ${tier.gradient} text-white font-semibold text-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:scale-105`}>
                      <span className="relative z-10">Choose {tier.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced additional info */}
        <div className="text-center mt-20 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
                All Plans Include
              </h3>
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Source Code</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Training</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Support</p>
                </div>
              </div>
              <button className="glass-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;