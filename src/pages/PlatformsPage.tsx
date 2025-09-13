import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, Zap, TrendingUp, Shield, Sparkles, Users, DollarSign, BarChart3 } from 'lucide-react';

const PlatformsPage = () => {
  const platforms = [
    {
      name: 'Universe',
      description: 'Revolutionary blockchain-based MLM ecosystem with advanced smart contract automation and decentralized governance',
      detailedDescription: 'Universe represents the pinnacle of decentralized MLM technology, built entirely on blockchain infrastructure. This platform features advanced smart contract automation that handles all compensation calculations, member management, and governance decisions without human intervention. The decentralized autonomous organization (DAO) structure allows community members to vote on platform improvements and policy changes, creating a truly democratic MLM ecosystem.',
      mainUrl: 'ramauniverse.io',
      dappUrl: 'dapp.ramauniverse.io',
      icon: Globe,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      features: ['Smart Contracts', 'DeFi Integration', 'NFT Rewards', 'DAO Governance', 'Staking Rewards', 'Cross-chain Support'],
      stats: { users: '2.5M+', countries: '120+', volume: '$500M+' },
      launched: '2023'
    },
    {
      name: 'Ropdy',
      description: 'Next-generation decentralized platform with cutting-edge DeFi integration and advanced trading mechanisms',
      detailedDescription: 'Ropdy combines MLM networking with sophisticated DeFi trading mechanisms, creating a unique ecosystem where members can earn through both traditional MLM activities and advanced trading strategies. The platform features yield farming, liquidity mining, and cross-chain trading capabilities, making it a comprehensive financial ecosystem for the modern networker.',
      mainUrl: 'ropdy.com',
      dappUrl: 'dapp.ropdy.com',
      icon: Zap,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      features: ['DeFi Trading', 'Yield Farming', 'Liquidity Mining', 'Cross-chain', 'AMM Integration', 'Governance Tokens'],
      stats: { users: '1.8M+', countries: '95+', volume: '$350M+' },
      launched: '2023'
    },
    {
      name: 'TCC 2.0',
      description: 'Advanced trading and compensation platform with real-time analytics and institutional-grade infrastructure',
      detailedDescription: 'TCC 2.0 is our flagship trading and compensation platform that combines traditional MLM structures with advanced trading capabilities. Built with institutional-grade infrastructure, it provides real-time analytics, AI-powered insights, and sophisticated risk management tools. The platform is designed for serious traders and MLM professionals who demand the highest levels of performance and reliability.',
      mainUrl: 'tcc20.io',
      dappUrl: 'champtrade.tcc20.io',
      icon: TrendingUp,
      gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
      features: ['Real-time Analytics', 'Institutional Grade', 'Advanced Trading', 'AI Insights', 'Risk Management', 'API Access'],
      stats: { users: '3.2M+', countries: '150+', volume: '$750M+' },
      launched: '2022'
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and multi-layer security protocols'
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Built to handle millions of concurrent users worldwide'
    },
    {
      icon: DollarSign,
      title: 'Multi-Currency Support',
      description: 'Support for 150+ fiat currencies and 50+ cryptocurrencies'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and AI-powered business intelligence'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="back-button mb-8 inline-flex">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Featured Platforms
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Our Flagship Decentralized Platforms
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the future of MLM with our premium blockchain-powered platforms that redefine industry standards and set new benchmarks for innovation.
          </p>
        </div>

        {/* Platforms */}
        <div className="space-y-16">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={index}
                className="ultra-glass rounded-3xl p-8 md:p-12 scroll-reveal relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Platform Info */}
                  <div>
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Orbitron']">
                      {platform.name}
                    </h2>
                    <p className="text-xl text-cyan-400 font-medium mb-6">{platform.description}</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{platform.detailedDescription}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center glassmorphism p-4 rounded-xl">
                        <div className="text-2xl font-bold text-cyan-400 font-['Orbitron']">{platform.stats.users}</div>
                        <div className="text-gray-400 text-sm">Active Users</div>
                      </div>
                      <div className="text-center glassmorphism p-4 rounded-xl">
                        <div className="text-2xl font-bold text-purple-400 font-['Orbitron']">{platform.stats.countries}</div>
                        <div className="text-gray-400 text-sm">Countries</div>
                      </div>
                      <div className="text-center glassmorphism p-4 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-400 font-['Orbitron']">{platform.stats.volume}</div>
                        <div className="text-gray-400 text-sm">Volume</div>
                      </div>
                    </div>

                    {/* Platform URLs */}
                    <div className="space-y-4">
                      <a
                        href={`https://${platform.mainUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-2xl ultra-glass border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group"
                      >
                        <span className="text-white font-semibold">{platform.mainUrl}</span>
                        <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                      </a>
                      <a
                        href={`https://${platform.dappUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-2xl ultra-glass border border-white/10 hover:border-purple-500/50 transition-all duration-500 group"
                      >
                        <span className="text-white font-semibold">{platform.dappUrl}</span>
                        <ExternalLink className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">Platform Features</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="glassmorphism p-4 rounded-xl text-center">
                          <span className="text-cyan-400 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="glassmorphism p-6 rounded-2xl">
                      <h4 className="text-lg font-semibold text-white mb-4">Platform Launched</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Live since {platform.launched}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-20 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-cyan font-['Orbitron'] text-center">
              Why Choose Our Platforms?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 mb-12 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text-rainbow font-['Orbitron']">
              Ready to Launch Your Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a custom blockchain-powered MLM platform built specifically for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Start Your Platform
              </button>
              <button className="glass-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;