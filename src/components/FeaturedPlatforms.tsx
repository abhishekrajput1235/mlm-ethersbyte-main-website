import React from 'react';
import { ExternalLink, Globe, Zap, TrendingUp, Shield, Sparkles } from 'lucide-react';

const FeaturedPlatforms = () => {
  const platforms = [
    {
      name: 'Universe',
      description: 'Revolutionary blockchain-based MLM ecosystem with advanced smart contract automation and decentralized governance',
      mainUrl: 'ramauniverse.io',
      dappUrl: 'dapp.ramauniverse.io',
      icon: Globe,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      glowColor: 'blue-500',
      features: ['Smart Contracts', 'DeFi Integration', 'NFT Rewards', 'DAO Governance']
    },
    {
      name: 'Ropdy',
      description: 'Next-generation decentralized platform with cutting-edge DeFi integration and advanced trading mechanisms',
      mainUrl: 'ropdy.com',
      dappUrl: 'dapp.ropdy.com',
      icon: Zap,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      glowColor: 'purple-500',
      features: ['DeFi Trading', 'Yield Farming', 'Liquidity Mining', 'Cross-chain']
    },
    {
      name: 'TCC 2.0',
      description: 'Advanced trading and compensation platform with real-time analytics and institutional-grade infrastructure',
      mainUrl: 'tcc20.io',
      dappUrl: 'champtrade.tcc20.io',
      icon: TrendingUp,
      gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
      glowColor: 'emerald-500',
      features: ['Real-time Analytics', 'Institutional Grade', 'Advanced Trading', 'AI Insights']
    }
  ];

  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Featured Platforms
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Our Flagship Decentralized Platforms
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the future of MLM with our premium blockchain-powered platforms that redefine industry standards
          </p>
        </div>

        {/* Enhanced Platforms Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={index}
                className="platform-card group relative scroll-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="ultra-glass rounded-3xl p-10 h-full relative overflow-hidden">
                  {/* Enhanced glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-r ${platform.gradient} blur-2xl`}></div>
                  
                  {/* Premium badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${platform.gradient} text-white font-bold text-sm shadow-2xl animate-pulse-glow flex items-center gap-2`}>
                      <Shield className="w-4 h-4" />
                      Premium
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-6 left-6 w-6 h-6 border border-cyan-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-6 right-6 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse"></div>

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className={`w-28 h-28 mb-8 rounded-3xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative`}>
                      <IconComponent className="w-14 h-14 text-white" />
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${platform.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    </div>

                    {/* Platform name */}
                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 font-['Orbitron']">
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {platform.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="glassmorphism px-3 py-2 rounded-lg text-center">
                          <span className="text-cyan-400 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced URLs */}
                    <div className="space-y-4">
                      <a
                        href={`https://${platform.mainUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 rounded-2xl ultra-glass border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group/link relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-white font-semibold text-lg relative z-10">{platform.mainUrl}</span>
                        <ExternalLink className="w-6 h-6 text-cyan-400 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-300 relative z-10" />
                      </a>
                      <a
                        href={`https://${platform.dappUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 rounded-2xl ultra-glass border border-white/10 hover:border-purple-500/50 transition-all duration-500 group/link relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-white font-semibold text-lg relative z-10">{platform.dappUrl}</span>
                        <ExternalLink className="w-6 h-6 text-purple-400 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-300 relative z-10" />
                      </a>
                    </div>
                  </div>
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
                Want Your Own Decentralized Platform?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                We can build a custom blockchain-powered MLM platform tailored specifically to your business needs.
              </p>
              <button className="neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Start Your Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlatforms;