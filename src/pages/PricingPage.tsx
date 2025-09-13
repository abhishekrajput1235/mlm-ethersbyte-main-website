import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Star,
  Crown,
  Zap,
  Globe,
  Headphones,
  Database,
  Smartphone,
} from "lucide-react";

const PricingPage = () => {
  const pricingTiers = [
    {
      name: "Basic",
      subtitle: "Centralized Solution",
      price: "₹10,000",
      originalPrice: "₹15,000",
      description:
        "Perfect for startups and small MLM businesses looking to establish their presence with essential features and reliable performance.",
      features: [
        "Centralized Database Architecture",
        "Essential Dashboard & Analytics",
        "Standard Security Protocols",
        "Email & Chat Support",
        "3 Months Maintenance",
        "Basic Payment Gateway",
        "Mobile Responsive Design",
        "User Management System",
        "Basic Reporting Tools",
        "Standard API Access",
      ],
      gradient: "from-slate-600 to-slate-700",
      icon: Zap,
      badge: "Starter",
      timeline: "4-6 weeks",
      support: "Email & Chat",
      users: "Up to 10,000",
    },
    {
      name: "Professional",
      subtitle: "Semi-Decentralized",
      price: "₹25,000",
      originalPrice: "₹35,000",
      description:
        "Ideal for growing businesses seeking balanced solutions with hybrid architecture combining security and performance.",
      features: [
        "Hybrid Blockchain Architecture",
        "Advanced Dashboard & AI Insights",
        "Enhanced Security & Encryption",
        "Priority Support & Training",
        "6 Months Maintenance",
        "Multi-Currency & Crypto Support",
        "Advanced Analytics & Reporting",
        "API Integration Capabilities",
        "Custom Branding Options",
        "Mobile App Development",
        "Real-time Notifications",
        "Advanced User Roles",
      ],
      gradient: "from-purple-600 to-indigo-600",
      popular: true,
      icon: Star,
      badge: "Most Popular",
      timeline: "6-8 weeks",
      support: "Priority Support",
      users: "Up to 100,000",
    },
    {
      name: "Enterprise",
      subtitle: "Totally Decentralized",
      price: "₹60,000+",
      originalPrice: "₹80,000+",
      description:
        "Ultimate blockchain-powered solution for enterprises demanding the highest security, transparency, and scalability.",
      features: [
        "Full Smart Contract Architecture",
        "Blockchain-Native Dashboard",
        "Military-Grade Security",
        "Dedicated Support Team",
        "12 Months Maintenance",
        "Complete Crypto Ecosystem",
        "AI-Powered Analytics",
        "Custom Smart Contract Development",
        "White-Label Solutions",
        "Global Infrastructure",
        "Advanced DeFi Integration",
        "DAO Governance Features",
        "NFT Reward Systems",
        "Cross-chain Compatibility",
      ],
      gradient: "from-cyan-500 to-blue-600",
      premium: true,
      icon: Crown,
      badge: "Premium",
      timeline: "8-12 weeks",
      support: "Dedicated Team",
      users: "Unlimited",
    },
  ];

  const addOns = [
    {
      name: "Mobile App Development",
      description: "Native iOS and Android applications",
      price: "₹15,000",
      icon: Smartphone,
    },
    {
      name: "Advanced Analytics Suite",
      description: "AI-powered business intelligence and reporting",
      price: "₹8,000",
      icon: Database,
    },
    {
      name: "Global Infrastructure Setup",
      description: "Worldwide server deployment and CDN",
      price: "₹12,000",
      icon: Globe,
    },
    {
      name: "Extended Support Package",
      description: "24/7 premium support for 12 months",
      price: "₹10,000",
      icon: Headphones,
    },
  ];

  const comparisonFeatures = [
    "Source Code Included",
    "Complete Documentation",
    "Training & Onboarding",
    "Technical Support",
    "Security Updates",
    "Performance Monitoring",
    "Backup & Recovery",
    "Custom Integrations",
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
            <span className="text-cyan-400 font-semibold text-lg">
              Pricing Plans
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your MLM business needs with our
            competitive pricing structure and comprehensive feature sets.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={index}
                className={`pricing-card group relative scroll-reveal ${
                  tier.popular
                    ? "ring-2 ring-purple-500/50 scale-105"
                    : tier.premium
                    ? "ring-2 ring-cyan-500/50"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="ultra-glass rounded-3xl p-8 md:p-10 h-full relative overflow-hidden flex flex-col">
                  {/* Popular/Premium Badge */}
                  {/* ... your badge code ... */}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Content */}
                    <div className="flex-grow">
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      {/* Plan name */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-['Orbitron']">
                        {tier.name}
                      </h3>
                      <p className="text-cyan-400 text-lg font-medium mb-6">
                        {tier.subtitle}
                      </p>

                      {/* Price */}
                      <div className="mb-8">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-4xl md:text-5xl font-bold text-white font-['Orbitron']">
                            {tier.price}
                          </span>
                          {tier.originalPrice && (
                            <span className="text-xl text-gray-500 line-through">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-400">starting price</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        {tier.description}
                      </p>

                      {/* Quick stats */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="glassmorphism p-3 rounded-xl text-center">
                          <div className="text-cyan-400 font-bold text-sm">
                            {tier.timeline}
                          </div>
                          <div className="text-gray-400 text-xs">Timeline</div>
                        </div>
                        <div className="glassmorphism p-3 rounded-xl text-center">
                          <div className="text-purple-400 font-bold text-sm">
                            {tier.users}
                          </div>
                          <div className="text-gray-400 text-xs">
                            User Capacity
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-10">
                        {tier.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300"
                          >
                            <div
                              className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}
                            >
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button always at bottom */}
                    <button
                      className={`mt-auto w-full py-4 rounded-2xl bg-gradient-to-r ${tier.gradient} text-white font-semibold text-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:scale-105`}
                    >
                      <span className="relative z-10">Choose {tier.name}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>





        {/* Add-ons Section */}
        <div className="scroll-reveal mb-20">
          <div className="ultra-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-purple font-['Orbitron'] text-center">
              Optional Add-ons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => {
                const IconComponent = addon.icon;
                return (
                  <div
                    key={index}
                    className="glassmorphism p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <IconComponent className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {addon.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      {addon.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400 font-['Orbitron']">
                      {addon.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="scroll-reveal mb-20">
          <div className="ultra-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-cyan font-['Orbitron'] text-center">
              What's Included in All Plans
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="scroll-reveal mb-20">
          <div className="ultra-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-purple font-['Orbitron'] text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glassmorphism p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What's included in the source code?
                </h4>
                <p className="text-gray-300">
                  Complete, well-documented source code with all features,
                  database schemas, and deployment instructions.
                </p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Do you provide ongoing support?
                </h4>
                <p className="text-gray-300">
                  Yes, all plans include maintenance and support. Higher tiers
                  include priority support and dedicated teams.
                </p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Can I customize the features?
                </h4>
                <p className="text-gray-300">
                  Absolutely! All our solutions are fully customizable to match
                  your specific business requirements.
                </p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What about scalability?
                </h4>
                <p className="text-gray-300">
                  Our solutions are built to scale from thousands to millions of
                  users with enterprise-grade infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text-rainbow font-['Orbitron']">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today for a personalized quote and consultation. Our
              experts are ready to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Get Custom Quote
              </button>
              <button className="glass-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
