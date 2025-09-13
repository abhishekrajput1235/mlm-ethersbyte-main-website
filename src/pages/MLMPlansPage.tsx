import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, Users, Settings, Zap, DollarSign, BarChart3, Crown, Star } from 'lucide-react';

const MLMPlansPage = () => {
  const plans = [
    {
      plan: 'Binary',
      slug: 'binary',
      keyFeatures: '2 legs, spillover mechanism',
      requirements: 'Commissions engine, genealogy, tracking',
      description: 'The most popular MLM plan with balanced two-leg structure and automatic spillover for team building.',
      complexity: 'Moderate',
      price: '₹15,000 - ₹25,000',
      timeline: '4-6 weeks',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      plan: 'Unilevel',
      slug: 'unilevel',
      keyFeatures: 'Unlimited width, limited depth',
      requirements: 'Flexible commission structure, auto-updates',
      description: 'Simple and straightforward plan allowing unlimited frontline distributors with depth-based commissions.',
      complexity: 'Simple',
      price: '₹12,000 - ₹20,000',
      timeline: '3-5 weeks',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      plan: 'Matrix',
      slug: 'matrix',
      keyFeatures: 'Fixed grid, spillover required',
      requirements: 'Grid logic, auto-placement',
      description: 'Structured grid system with forced spillover creating powerful team momentum and excitement.',
      complexity: 'Advanced',
      price: '₹20,000 - ₹35,000',
      timeline: '6-8 weeks',
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      plan: 'Stairstep Breakaway',
      slug: 'stairstep-breakaway',
      keyFeatures: 'Rank-based breakaway moves',
      requirements: 'Rank tracking, group volume computation',
      description: 'Traditional leadership structure where high achievers break away to form independent groups.',
      complexity: 'Expert',
      price: '₹25,000 - ₹45,000',
      timeline: '8-10 weeks',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      plan: 'Generation',
      slug: 'generation',
      keyFeatures: 'Depth-based generation rewards',
      requirements: 'Generation-based payouts, advanced logic',
      description: 'Sophisticated compensation based on generational depth with advanced payout mechanisms.',
      complexity: 'Expert',
      price: '₹30,000 - ₹50,000',
      timeline: '10-12 weeks',
      icon: Zap,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      plan: 'Board (Revolving)',
      slug: 'board-revolving',
      keyFeatures: 'Board cycles with bonuses',
      requirements: 'Board tracking, auto advancement',
      description: 'Dynamic board system with automatic cycling and advancement through multiple board levels.',
      complexity: 'Advanced',
      price: '₹18,000 - ₹30,000',
      timeline: '6-8 weeks',
      icon: Settings,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      plan: 'Monoline',
      slug: 'monoline',
      keyFeatures: 'One-chain growth',
      requirements: 'Vertical lineage, simple payout systems',
      description: 'Simplified single-line structure where everyone benefits from collective team growth.',
      complexity: 'Simple',
      price: '₹10,000 - ₹18,000',
      timeline: '3-4 weeks',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      plan: 'Australian / X-Up',
      slug: 'australian-x-up',
      keyFeatures: 'Auto-placement, pass-up commissions',
      requirements: 'Sequence logic, tiered commissions',
      description: 'Sophisticated auto-placement system with pass-up commissions and sequential logic.',
      complexity: 'Expert',
      price: '₹28,000 - ₹45,000',
      timeline: '8-10 weeks',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      plan: 'Hybrid',
      slug: 'hybrid',
      keyFeatures: 'Mixed structures',
      requirements: 'Custom logic, flexible engine settings',
      description: 'Customizable combination of multiple compensation structures for maximum flexibility.',
      complexity: 'Expert',
      price: '₹35,000 - ₹60,000+',
      timeline: '10-14 weeks',
      icon: Settings,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      plan: 'Crowdfunding, etc.',
      slug: 'crowdfunding',
      keyFeatures: 'Niche mechanisms',
      requirements: 'Specialized tracking and reward systems',
      description: 'Specialized platforms for unique business models including crowdfunding and innovative reward systems.',
      complexity: 'Expert',
      price: '₹40,000 - ₹80,000+',
      timeline: '12-16 weeks',
      icon: DollarSign,
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'text-green-400';
      case 'Moderate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getComplexityBadgeColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'from-green-400 to-emerald-500';
      case 'Moderate': return 'from-yellow-400 to-orange-500';
      case 'Advanced': return 'from-orange-400 to-red-500';
      case 'Expert': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

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
            <span className="text-cyan-400 font-semibold text-lg">Compensation Plans</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            Complete MLM Plan Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our expertise covers every MLM compensation structure with custom-built, cutting-edge solutions tailored to your specific business requirements.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className="plan-card group relative scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ultra-glass rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  {/* Complexity badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-4 py-2 rounded-full text-xs font-bold ${getComplexityColor(plan.complexity)} bg-gradient-to-r ${getComplexityBadgeColor(plan.complexity)} text-white border border-current/30`}>
                      {plan.complexity}
                    </div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 font-['Orbitron']">
                      {plan.plan}
                    </h3>

                    {/* Key features */}
                    <p className="text-cyan-400 text-sm font-medium mb-4">
                      {plan.keyFeatures}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Technical Requirements:</h4>
                      <p className="text-gray-400 text-sm">{plan.requirements}</p>
                    </div>

                    {/* Price and Timeline */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="glassmorphism p-3 rounded-xl text-center">
                        <div className="text-cyan-400 font-bold text-sm">{plan.price}</div>
                        <div className="text-gray-400 text-xs">Price Range</div>
                      </div>
                      <div className="glassmorphism p-3 rounded-xl text-center">
                        <div className="text-purple-400 font-bold text-sm">{plan.timeline}</div>
                        <div className="text-gray-400 text-xs">Timeline</div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/mlm-plans/${plan.slug}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-center hover:shadow-2xl transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Link>
                      <button className="flex-1 py-3 px-4 rounded-xl glassmorphism border border-purple-500/30 text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300 text-sm">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="scroll-reveal">
          <div className="ultra-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text-cyan font-['Orbitron'] text-center">
              Plan Comparison Overview
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-4 text-cyan-400 font-semibold">Plan Type</th>
                    <th className="pb-4 text-purple-400 font-semibold">Complexity</th>
                    <th className="pb-4 text-emerald-400 font-semibold">Price Range</th>
                    <th className="pb-4 text-yellow-400 font-semibold">Timeline</th>
                    <th className="pb-4 text-pink-400 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 text-white font-medium">{plan.plan}</td>
                      <td className={`py-4 font-medium ${getComplexityColor(plan.complexity)}`}>{plan.complexity}</td>
                      <td className="py-4 text-gray-300">{plan.price}</td>
                      <td className="py-4 text-gray-300">{plan.timeline}</td>
                      <td className="py-4 text-gray-400 text-sm max-w-xs">{plan.keyFeatures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 mb-12 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text-rainbow font-['Orbitron']">
              Need a Custom MLM Plan?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We specialize in creating unique, tailored compensation plans that perfectly match your business model and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Discuss Your Custom Plan
              </button>
              <button className="glass-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLMPlansPage;