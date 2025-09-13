// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Network, Server, Shield, Zap, Globe, CheckCircle, Star, Settings } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Totally Decentralized',
      subtitle: 'Smart Contract Based',
      icon: Cpu,
      description: 'Immutable blockchain solutions with complete transparency and automated smart contract execution for the ultimate in security and trust.',
      detailedDescription: 'Our fully decentralized solutions leverage the power of blockchain technology to create transparent, immutable, and trustless MLM systems. Every transaction, commission, and network change is recorded on the blockchain, ensuring complete transparency and eliminating the possibility of manipulation. Smart contracts automate all compensation calculations and payouts, removing human error and ensuring instant, accurate payments.',
      features: ['Zero Trust Architecture', 'Immutable Records', 'Auto-executing Contracts', 'Complete Transparency', 'Instant Payouts', 'Global Accessibility'],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask Integration', 'DeFi Protocols'],
      price: '₹60,000+',
      timeline: '8-12 weeks',
      gradient: 'from-cyan-500 to-blue-600',
      premium: true
    },
    {
      title: 'Semi-Decentralized',
      subtitle: 'Hybrid Solution',
      icon: Network,
      description: 'Best of both worlds combining blockchain security with traditional database performance for optimal efficiency.',
      detailedDescription: 'Our hybrid approach combines the security and transparency of blockchain with the performance and flexibility of traditional databases. Critical operations like commission calculations and network changes are secured on the blockchain, while day-to-day operations run on optimized traditional infrastructure. This provides the perfect balance of security, performance, and cost-effectiveness.',
      features: ['Hybrid Architecture', 'Enhanced Performance', 'Flexible Integration', 'Balanced Security', 'Cost Effective', 'Scalable Infrastructure'],
      technologies: ['Node.js', 'PostgreSQL', 'Ethereum', 'Redis', 'Docker', 'Kubernetes'],
      price: '₹25,000',
      timeline: '6-8 weeks',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Fully Centralized',
      subtitle: 'Traditional & Robust',
      icon: Server,
      description: 'Enterprise-grade centralized solutions with military-level security and lightning-fast performance for maximum reliability.',
      detailedDescription: 'Our centralized solutions provide enterprise-grade performance with military-level security protocols. Built on proven technologies and architectures, these systems can handle millions of users with sub-second response times. Advanced encryption, multi-layer security, and redundant infrastructure ensure your MLM business operates smoothly and securely at any scale.',
      features: ['High Performance', 'Enterprise Security', 'Rapid Deployment', 'Cost Effective', 'Proven Reliability', 'Advanced Analytics'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS/Azure', 'Docker'],
      price: '₹10,000',
      timeline: '4-6 weeks',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="back-button mb-8 inline-flex">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            MLM Software Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Choose from our three revolutionary approaches to MLM software development, each designed to meet specific business needs and technical requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="ultra-glass rounded-3xl p-8 md:p-12 scroll-reveal relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Premium badge */}
                {service.premium && (
                  <div className="absolute top-0 right-0 transform  z-20">
                    <div className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-2xl animate-pulse-glow">
                      <Star className="w-4 h-4" />
                      Premium Solution
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Orbitron']">
                      {service.title}
                    </h2>
                    <p className="text-xl text-cyan-400 font-medium mb-6">{service.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.detailedDescription}</p>

                    {/* Price and Timeline */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <div className="glassmorphism px-6 py-3 rounded-full text-center">
                        <span className="text-cyan-400 font-semibold">Starting at </span>
                        <span className="text-white font-bold text-xl">{service.price}</span>
                      </div>
                      <div className="glassmorphism px-6 py-3 rounded-full text-center">
                        <span className="text-purple-400 font-semibold">Timeline: </span>
                        <span className="text-white font-bold">{service.timeline}</span>
                      </div>
                    </div>

                    <button className={`neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300`}>
                      Get Quote for {service.title}
                    </button>
                  </div>

                  {/* Features and Technologies */}
                  <div className="space-y-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">Key Features</h3>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 p-3 glassmorphism rounded-xl">
                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="glassmorphism px-4 py-2 rounded-full">
                            <span className="text-cyan-400 font-medium text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-20 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-cyan font-['Orbitron'] text-center">
              Additional Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 glassmorphism rounded-2xl">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Global Deployment</h4>
                <p className="text-gray-400 text-sm">Worldwide infrastructure setup</p>
              </div>
              <div className="text-center p-6 glassmorphism rounded-2xl">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Security Audits</h4>
                <p className="text-gray-400 text-sm">Comprehensive security testing</p>
              </div>
              <div className="text-center p-6 glassmorphism rounded-2xl">
                <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                <p className="text-gray-400 text-sm">Speed and efficiency improvements</p>
              </div>
              <div className="text-center p-6 glassmorphism rounded-2xl">
                <Settings className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Custom Integrations</h4>
                <p className="text-gray-400 text-sm">Third-party system connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;