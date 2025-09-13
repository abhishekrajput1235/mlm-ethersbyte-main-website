import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Settings, Zap, DollarSign } from 'lucide-react';

const MLMPlans = () => {
  const plans = [
    {
      plan: 'Binary',
      slug: 'binary',
      keyFeatures: '2 legs, spillover mechanism',
      requirements: 'Commissions engine, genealogy, tracking',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
      complexity: 'Moderate'
    },
    {
      plan: 'Unilevel',
      slug: 'unilevel',
      keyFeatures: 'Unlimited width, limited depth',
      requirements: 'Flexible commission structure, auto-updates',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
      complexity: 'Simple'
    },
    {
      plan: 'Matrix',
      slug: 'matrix',
      keyFeatures: 'Fixed grid, spillover required',
      requirements: 'Grid logic, auto-placement',
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500',
      complexity: 'Advanced'
    },
    {
      plan: 'Stairstep Breakaway',
      slug: 'stairstep-breakaway',
      keyFeatures: 'Rank-based breakaway moves',
      requirements: 'Rank tracking, group volume computation',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      complexity: 'Expert'
    },
    {
      plan: 'Generation',
      slug: 'generation',
      keyFeatures: 'Depth-based generation rewards',
      requirements: 'Generation-based payouts, advanced logic',
      icon: Zap,
      gradient: 'from-indigo-500 to-purple-500',
      complexity: 'Expert'
    },
    {
      plan: 'Board (Revolving)',
      slug: 'board-revolving',
      keyFeatures: 'Board cycles with bonuses',
      requirements: 'Board tracking, auto advancement',
      icon: Settings,
      gradient: 'from-cyan-500 to-blue-500',
      complexity: 'Advanced'
    },
    {
      plan: 'Monoline',
      slug: 'monoline',
      keyFeatures: 'One-chain growth',
      requirements: 'Vertical lineage, simple payout systems',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      complexity: 'Simple'
    },
    {
      plan: 'Australian / X-Up',
      slug: 'australian-x-up',
      keyFeatures: 'Auto-placement, pass-up commissions',
      requirements: 'Sequence logic, tiered commissions',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      complexity: 'Expert'
    },
    {
      plan: 'Hybrid',
      slug: 'hybrid',
      keyFeatures: 'Mixed structures',
      requirements: 'Custom logic, flexible engine settings',
      icon: Settings,
      gradient: 'from-pink-500 to-rose-500',
      complexity: 'Expert'
    },
    {
      plan: 'Crowdfunding, etc.',
      slug: 'crowdfunding',
      keyFeatures: 'Niche mechanisms',
      requirements: 'Specialized tracking and reward systems',
      icon: DollarSign,
      gradient: 'from-violet-500 to-purple-500',
      complexity: 'Expert'
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

  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-lg">Compensation Plans</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
            We Build Software for All MLM Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our expertise covers every MLM compensation structure with custom-built, cutting-edge solutions
          </p>
        </div>

        {/* Enhanced MLM Plans Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Link
                key={index}
                to={`/mlm-plans/${plan.slug}`}
                className="plan-card group relative block scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ultra-glass rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${plan.gradient} blur-xl`}></div>
                  
                  {/* Complexity badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${getComplexityColor(plan.complexity)} bg-black/30 border border-current/30`}>
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

                    {/* Requirements */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {plan.requirements}
                    </p>

                    {/* Learn more indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Click to learn more</span>
                      <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r ${plan.gradient} blur-2xl -z-10`}></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
                Need a Custom MLM Plan?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We specialize in creating unique, tailored compensation plans that perfectly match your business model and goals.
              </p>
              <button className="neon-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Discuss Your Custom Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLMPlans;