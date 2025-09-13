import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, TrendingUp, Users, DollarSign, Shield, Settings } from 'lucide-react';

interface MLMPlanData {
  name: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  keyFeatures: string[];
  softwareRequirements: string[];
  benefits: string[];
  idealFor: string[];
  technicalSpecs: string[];
  icon: React.ComponentType<any>;
  gradient: string;
  complexity: 'Simple' | 'Moderate' | 'Advanced' | 'Expert';
  estimatedPrice: string;
}

const MLMPlanDetail = () => {
  const { planName } = useParams<{ planName: string }>();
  const [planData, setPlanData] = useState<MLMPlanData | null>(null);

  const mlmPlansData: Record<string, MLMPlanData> = {
    binary: {
      name: 'Binary MLM Plan',
      subtitle: 'Two-Leg Powerhouse Structure',
      description: 'The most popular and balanced MLM compensation plan with two legs and spillover mechanism.',
      detailedDescription: 'The Binary MLM plan is built on a simple yet powerful concept: each distributor can only have two frontline distributors, creating a binary tree structure. This limitation forces spillover, where new recruits are placed under existing members, creating a natural team-building dynamic. The compensation is typically based on the weaker leg, encouraging distributors to help both sides of their organization grow equally. This plan is perfect for companies wanting to create strong team unity and ensure that success is shared across the entire network.',
      keyFeatures: [
        'Two-leg structure with automatic spillover',
        'Balanced growth encouragement',
        'Weaker leg commission calculation',
        'Team building incentives',
        'Capping mechanisms for fair distribution'
      ],
      softwareRequirements: [
        'Advanced genealogy tree visualization',
        'Real-time spillover placement engine',
        'Weaker leg calculation algorithms',
        'Commission tracking and distribution',
        'Automated placement notifications',
        'Balance point management system'
      ],
      benefits: [
        'Encourages teamwork and cooperation',
        'Automatic team building through spillover',
        'Balanced income distribution',
        'Easy to understand and explain',
        'Sustainable long-term growth'
      ],
      idealFor: [
        'Companies focusing on team building',
        'Businesses with strong training programs',
        'Organizations emphasizing cooperation',
        'Companies with product-focused approach'
      ],
      technicalSpecs: [
        'Binary tree data structure implementation',
        'Real-time placement algorithms',
        'Commission calculation engine',
        'Genealogy visualization system',
        'Automated notification system'
      ],
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
      complexity: 'Moderate',
      estimatedPrice: '₹15,000 - ₹25,000'
    },
    unilevel: {
      name: 'Unilevel MLM Plan',
      subtitle: 'Unlimited Width Freedom',
      description: 'Simple and straightforward plan allowing unlimited frontline distributors with depth-based commissions.',
      detailedDescription: 'The Unilevel MLM plan offers the ultimate flexibility in network building by allowing distributors to sponsor unlimited frontline members. Commissions are paid on multiple levels deep, typically 5-10 levels, with decreasing percentages as you go deeper. This plan is ideal for companies that want to give their distributors complete freedom in building their organizations. The simplicity of the structure makes it easy to understand and explain to new recruits, while the unlimited width potential allows for explosive growth when properly executed.',
      keyFeatures: [
        'Unlimited frontline sponsoring',
        'Multiple level depth commissions',
        'Simple structure and explanation',
        'Flexible growth patterns',
        'Breakaway possibilities at higher levels'
      ],
      softwareRequirements: [
        'Unlimited width genealogy system',
        'Multi-level commission engine',
        'Flexible commission rate management',
        'Auto-update mechanisms',
        'Performance tracking across levels',
        'Breakaway detection and management'
      ],
      benefits: [
        'Complete sponsoring freedom',
        'Easy to understand and teach',
        'Rapid expansion potential',
        'Flexible income opportunities',
        'Suitable for various business models'
      ],
      idealFor: [
        'Companies with strong leaders',
        'Businesses focusing on personal sales',
        'Organizations with diverse product lines',
        'Companies emphasizing individual achievement'
      ],
      technicalSpecs: [
        'Dynamic tree structure management',
        'Multi-level commission calculations',
        'Flexible rate configuration system',
        'Performance analytics engine',
        'Automated payout processing'
      ],
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
      complexity: 'Simple',
      estimatedPrice: '₹12,000 - ₹20,000'
    },
    matrix: {
      name: 'Matrix MLM Plan',
      subtitle: 'Structured Grid System',
      description: 'Fixed-width, limited-depth structure with forced spillover creating powerful team momentum.',
      detailedDescription: 'The Matrix MLM plan creates a structured environment where each distributor can only have a fixed number of frontline distributors (commonly 3x7, 4x6, or 5x5 matrices). When a distributor\'s frontline is full, new recruits automatically spill over to the next available position in their downline. This forced spillover creates incredible team momentum and ensures that everyone benefits from the recruiting efforts of their upline. The plan is perfect for creating excitement and urgency, as positions fill up quickly and spillover benefits are immediate and tangible.',
      keyFeatures: [
        'Fixed width and depth structure',
        'Automatic spillover placement',
        'Forced team building dynamics',
        'Matrix completion bonuses',
        'Cycling and re-entry mechanisms'
      ],
      softwareRequirements: [
        'Matrix grid logic implementation',
        'Auto-placement algorithms',
        'Spillover tracking system',
        'Matrix completion detection',
        'Cycling and re-entry management',
        'Position availability monitoring'
      ],
      benefits: [
        'Guaranteed spillover benefits',
        'Strong team building momentum',
        'Predictable income potential',
        'Exciting and engaging structure',
        'Fair distribution of opportunities'
      ],
      idealFor: [
        'Companies wanting rapid team building',
        'Businesses with limited product lines',
        'Organizations focusing on recruitment',
        'Companies seeking predictable structures'
      ],
      technicalSpecs: [
        'Matrix positioning algorithms',
        'Spillover calculation engine',
        'Grid visualization system',
        'Completion bonus tracking',
        'Automated placement notifications'
      ],
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500',
      complexity: 'Advanced',
      estimatedPrice: '₹20,000 - ₹35,000'
    },
    'stairstep-breakaway': {
      name: 'Stairstep Breakaway Plan',
      subtitle: 'Traditional Leadership Structure',
      description: 'Rank-based advancement system where high achievers break away to form independent groups.',
      detailedDescription: 'The Stairstep Breakaway plan is the traditional MLM structure that has stood the test of time. Distributors advance through various ranks based on personal and group sales volume. Once they reach a certain rank, they "break away" from their sponsor\'s group and become independent, earning override commissions from their former sponsor. This plan rewards leadership development and creates strong incentives for building large, productive organizations. It\'s ideal for companies with consumable products and strong training systems.',
      keyFeatures: [
        'Rank-based advancement system',
        'Breakaway independence mechanism',
        'Override commission structure',
        'Leadership development focus',
        'Group volume requirements'
      ],
      softwareRequirements: [
        'Rank tracking and advancement',
        'Group volume computation',
        'Breakaway detection system',
        'Override commission calculations',
        'Leadership qualification monitoring',
        'Historical rank progression tracking'
      ],
      benefits: [
        'Strong leadership development',
        'Independence and autonomy rewards',
        'Proven long-term sustainability',
        'Encourages large organization building',
        'Traditional and trusted structure'
      ],
      idealFor: [
        'Established MLM companies',
        'Businesses with consumable products',
        'Organizations with strong training',
        'Companies focusing on leadership'
      ],
      technicalSpecs: [
        'Rank progression algorithms',
        'Volume calculation engine',
        'Breakaway management system',
        'Override commission processor',
        'Leadership tracking dashboard'
      ],
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      complexity: 'Expert',
      estimatedPrice: '₹25,000 - ₹45,000'
    },
    generation: {
      name: 'Generation MLM Plan',
      subtitle: 'Depth-Based Reward System',
      description: 'Advanced compensation based on generational depth with sophisticated payout mechanisms.',
      detailedDescription: 'The Generation plan is one of the most sophisticated MLM compensation structures, paying commissions based on "generations" rather than levels. A generation is defined as the distance between leaders of the same rank. This plan rewards the development of leaders and creates deep, sustainable organizations. Commissions are paid when there are sales within each generation, making it ideal for companies with high-ticket products or services. The complexity of this plan requires advanced software to track generations and calculate commissions accurately.',
      keyFeatures: [
        'Generation-based commission structure',
        'Leadership development rewards',
        'Compressed generation calculations',
        'Advanced payout algorithms',
        'Rank-based generation definitions'
      ],
      softwareRequirements: [
        'Generation-based payout engine',
        'Advanced genealogy logic',
        'Compression algorithm implementation',
        'Leadership rank tracking',
        'Complex commission calculations',
        'Generation visualization tools'
      ],
      benefits: [
        'Rewards leadership development',
        'Creates deep organizations',
        'Sustainable long-term income',
        'Encourages mentor relationships',
        'Advanced earning potential'
      ],
      idealFor: [
        'Companies with high-ticket products',
        'Businesses focusing on services',
        'Organizations with experienced distributors',
        'Companies emphasizing mentorship'
      ],
      technicalSpecs: [
        'Generation calculation algorithms',
        'Compression logic implementation',
        'Advanced genealogy tracking',
        'Leadership progression monitoring',
        'Complex payout processing'
      ],
      icon: Zap,
      gradient: 'from-indigo-500 to-purple-500',
      complexity: 'Expert',
      estimatedPrice: '₹30,000 - ₹50,000'
    },
    'board-revolving': {
      name: 'Board (Revolving) Plan',
      subtitle: 'Cycling Board System',
      description: 'Dynamic board system with automatic cycling and advancement through multiple board levels.',
      detailedDescription: 'The Board or Revolving Matrix plan creates an exciting, game-like environment where distributors advance through different board levels. Each board has a fixed number of positions, and when a board fills up, the person at the top "cycles out" and receives a bonus while advancing to the next board level. This creates continuous income opportunities and excitement as distributors can cycle multiple times. The plan is perfect for creating urgency and momentum, as positions are limited and boards fill up quickly.',
      keyFeatures: [
        'Multiple board levels',
        'Automatic cycling mechanism',
        'Board completion bonuses',
        'Progressive advancement system',
        'Limited position availability'
      ],
      softwareRequirements: [
        'Board tracking and management',
        'Auto advancement algorithms',
        'Cycling bonus calculations',
        'Position availability monitoring',
        'Board level progression tracking',
        'Automated notification system'
      ],
      benefits: [
        'Multiple income opportunities',
        'Exciting and engaging structure',
        'Continuous earning potential',
        'Creates urgency and momentum',
        'Fair cycling opportunities'
      ],
      idealFor: [
        'Companies wanting high engagement',
        'Businesses with entry-level products',
        'Organizations focusing on excitement',
        'Companies with strong marketing'
      ],
      technicalSpecs: [
        'Board management algorithms',
        'Cycling calculation engine',
        'Position tracking system',
        'Advancement notification system',
        'Board visualization interface'
      ],
      icon: Settings,
      gradient: 'from-cyan-500 to-blue-500',
      complexity: 'Advanced',
      estimatedPrice: '₹18,000 - ₹30,000'
    },
    monoline: {
      name: 'Monoline MLM Plan',
      subtitle: 'Single Line Growth',
      description: 'Simplified single-line structure where everyone benefits from collective team growth.',
      detailedDescription: 'The Monoline plan is the simplest MLM structure where all distributors are placed in a single line, one after another. Everyone earns commissions from the sales of those placed after them in the line, regardless of who sponsored whom. This creates a truly cooperative environment where everyone benefits from the collective efforts of the team. The plan eliminates competition between team members and ensures that even new distributors can benefit from the activities of experienced members placed after them.',
      keyFeatures: [
        'Single line placement system',
        'Collective benefit structure',
        'No competition between members',
        'Simple commission calculations',
        'Equal opportunity for all'
      ],
      softwareRequirements: [
        'Linear placement algorithms',
        'Sequential commission tracking',
        'Simple genealogy management',
        'Automated line positioning',
        'Commission distribution engine',
        'Member sequence visualization'
      ],
      benefits: [
        'Ultimate simplicity and fairness',
        'No complex strategies needed',
        'Everyone benefits from team growth',
        'Easy to understand and explain',
        'Cooperative team environment'
      ],
      idealFor: [
        'Companies emphasizing simplicity',
        'Businesses with cooperative culture',
        'Organizations with diverse skill levels',
        'Companies wanting equal opportunities'
      ],
      technicalSpecs: [
        'Linear data structure management',
        'Sequential processing algorithms',
        'Simple commission calculations',
        'Line visualization system',
        'Automated placement engine'
      ],
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      complexity: 'Simple',
      estimatedPrice: '₹10,000 - ₹18,000'
    },
    'australian-x-up': {
      name: 'Australian / X-Up Plan',
      subtitle: 'Pass-Up Commission System',
      description: 'Sophisticated auto-placement system with pass-up commissions and sequential logic.',
      detailedDescription: 'The Australian or X-Up plan is a sophisticated compensation structure where distributors "pass up" their first few sales to their sponsor, and then keep subsequent sales for themselves. This creates a unique dynamic where sponsors are incentivized to help their new distributors make their first sales quickly. The plan often includes auto-placement features where new distributors are automatically positioned in the most advantageous spots in the organization. This combination of pass-up commissions and strategic placement creates a powerful system for rapid organization growth.',
      keyFeatures: [
        'Pass-up commission mechanism',
        'Auto-placement algorithms',
        'Sequential sales tracking',
        'Strategic positioning system',
        'Tiered commission structure'
      ],
      softwareRequirements: [
        'Pass-up sequence logic',
        'Auto-placement algorithms',
        'Tiered commission calculations',
        'Strategic positioning engine',
        'Sales sequence tracking',
        'Automated placement notifications'
      ],
      benefits: [
        'Rapid organization building',
        'Strategic positioning advantages',
        'Incentivized sponsor support',
        'Automated growth mechanisms',
        'Sophisticated earning potential'
      ],
      idealFor: [
        'Companies with high-ticket products',
        'Businesses emphasizing strategy',
        'Organizations with experienced leaders',
        'Companies wanting rapid expansion'
      ],
      technicalSpecs: [
        'Pass-up calculation algorithms',
        'Auto-placement engine',
        'Sequential logic processor',
        'Strategic positioning system',
        'Advanced genealogy management'
      ],
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      complexity: 'Expert',
      estimatedPrice: '₹28,000 - ₹45,000'
    },
    hybrid: {
      name: 'Hybrid MLM Plan',
      subtitle: 'Multi-Structure Combination',
      description: 'Customizable combination of multiple compensation structures for maximum flexibility.',
      detailedDescription: 'The Hybrid MLM plan represents the pinnacle of compensation plan flexibility, combining elements from multiple traditional plans to create a unique structure tailored to specific business needs. This might include a binary structure for team building combined with unilevel commissions for leadership development, or a matrix system with generation bonuses for advanced distributors. The hybrid approach allows companies to leverage the strengths of different plans while minimizing their weaknesses, creating a truly customized compensation experience.',
      keyFeatures: [
        'Multiple plan combination',
        'Customizable structure elements',
        'Flexible commission mechanisms',
        'Adaptive growth patterns',
        'Tailored business alignment'
      ],
      softwareRequirements: [
        'Multi-structure engine support',
        'Custom logic implementation',
        'Flexible configuration system',
        'Advanced calculation algorithms',
        'Integrated plan management',
        'Customizable rule engine'
      ],
      benefits: [
        'Maximum customization potential',
        'Leverages multiple plan strengths',
        'Adaptable to business changes',
        'Unique competitive advantage',
        'Optimized for specific goals'
      ],
      idealFor: [
        'Established companies with specific needs',
        'Businesses with complex products',
        'Organizations wanting uniqueness',
        'Companies with diverse markets'
      ],
      technicalSpecs: [
        'Multi-engine architecture',
        'Custom rule implementation',
        'Flexible calculation system',
        'Integrated plan management',
        'Advanced configuration tools'
      ],
      icon: Settings,
      gradient: 'from-pink-500 to-rose-500',
      complexity: 'Expert',
      estimatedPrice: '₹35,000 - ₹60,000+'
    },
    crowdfunding: {
      name: 'Crowdfunding & Specialty Plans',
      subtitle: 'Innovative Niche Mechanisms',
      description: 'Specialized platforms for unique business models including crowdfunding and innovative reward systems.',
      detailedDescription: 'Crowdfunding and specialty MLM plans represent the cutting edge of network marketing innovation. These plans incorporate elements from crowdfunding platforms, investment schemes, and unique reward mechanisms that don\'t fit traditional MLM categories. Examples include donation-based systems, investment pools, product pre-orders, and community-funded projects. These plans require highly specialized software solutions that can handle unique tracking requirements, specialized reward calculations, and often integration with external payment systems or blockchain technologies.',
      keyFeatures: [
        'Specialized tracking mechanisms',
        'Unique reward calculations',
        'Custom business logic',
        'Integration capabilities',
        'Innovative payout systems'
      ],
      softwareRequirements: [
        'Specialized tracking systems',
        'Custom reward algorithms',
        'External integration capabilities',
        'Flexible payout mechanisms',
        'Advanced reporting tools',
        'Compliance monitoring systems'
      ],
      benefits: [
        'Innovative business models',
        'Unique market positioning',
        'Specialized functionality',
        'Custom solution development',
        'Cutting-edge technology'
      ],
      idealFor: [
        'Innovative business models',
        'Technology-focused companies',
        'Specialized market niches',
        'Companies wanting differentiation'
      ],
      technicalSpecs: [
        'Custom algorithm development',
        'Specialized tracking systems',
        'Integration architecture',
        'Flexible calculation engine',
        'Advanced monitoring tools'
      ],
      icon: DollarSign,
      gradient: 'from-violet-500 to-purple-500',
      complexity: 'Expert',
      estimatedPrice: '₹40,000 - ₹80,000+'
    }
  };

  useEffect(() => {
    if (planName && mlmPlansData[planName]) {
      setPlanData(mlmPlansData[planName]);
    }
  }, [planName]);

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const IconComponent = planData.icon;

  return (
    <div className="plan-detail-container pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/#mlm-plans" className="back-button mb-8 inline-flex">
          <ArrowLeft className="w-5 h-5" />
          Back to MLM Plans
        </Link>

        {/* Hero Section */}
        <div className="plan-detail-hero ultra-glass mb-12 scroll-reveal">
          <div className="relative z-10 text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${planData.gradient} flex items-center justify-center animate-pulse-glow`}>
              <IconComponent className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text-rainbow font-['Orbitron']">
              {planData.name}
            </h1>
            <p className="text-2xl text-cyan-400 mb-6 font-medium">
              {planData.subtitle}
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {planData.description}
            </p>
            
            {/* Complexity and Price */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <div className="glassmorphism px-6 py-3 rounded-full">
                <span className="text-cyan-400 font-semibold">Complexity: </span>
                <span className="text-white font-bold">{planData.complexity}</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-full">
                <span className="text-purple-400 font-semibold">Price Range: </span>
                <span className="text-white font-bold">{planData.estimatedPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
            Comprehensive Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {planData.detailedDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-purple font-['Orbitron']">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {planData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glassmorphism rounded-xl">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Requirements */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
            Software Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {planData.softwareRequirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glassmorphism rounded-xl">
                <Settings className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-purple font-['Orbitron']">
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {planData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glassmorphism rounded-xl">
                <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-cyan font-['Orbitron']">
            Ideal For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {planData.idealFor.map((ideal, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glassmorphism rounded-xl">
                <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{ideal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="plan-detail-content scroll-reveal">
          <h2 className="text-3xl font-bold mb-6 gradient-text-purple font-['Orbitron']">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {planData.technicalSpecs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glassmorphism rounded-xl">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 mb-12 scroll-reveal">
          <div className="ultra-glass rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text-rainbow font-['Orbitron']">
              Ready to Build Your {planData.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a custom quote for implementing this advanced MLM compensation plan with our cutting-edge software solutions.
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

export default MLMPlanDetail;