import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      hero.style.setProperty('--mouse-x', `${x}`);
      hero.style.setProperty('--mouse-y', `${y}`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
            rgba(0, 212, 255, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 30%, 
            transparent 70%
          )
        `
      }}
    >
      {/* Advanced animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-cyan-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-purple-500/20 rotate-45 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${10 + Math.random() * 10}s infinite linear`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center pt-24 md:pt-24">
        {/* Animated badge */}
        <div className="inline-block mb-8 animate-fade-in-scale">
          <div className="glassmorphism px-8 py-4 rounded-full border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-shimmer"></div>
            <div className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Next-Generation MLM Technology</span>
            </div>
          </div>
        </div>

        {/* Main headline with enhanced animations */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight animate-slide-in-up font-['Orbitron']">
          <span className="block gradient-text-rainbow">Revolutionizing</span>
          <span className="block gradient-text-cyan mt-4">MLM Software</span>
        </h1>

        {/* Enhanced tagline */}
        <div className="mb-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
            with Next-Gen Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg">
            <span className="glassmorphism px-4 py-2 rounded-full text-cyan-400 border border-cyan-500/30">
              Fully Customized
            </span>
            <span className="glassmorphism px-4 py-2 rounded-full text-purple-400 border border-purple-500/30">
              Scalable
            </span>
            <span className="glassmorphism px-4 py-2 rounded-full text-emerald-400 border border-emerald-500/30">
              Secure
            </span>
            <span className="glassmorphism px-4 py-2 rounded-full text-pink-400 border border-pink-500/30">
              Decentralized & Centralized
            </span>
          </div>
        </div>

        {/* Pricing highlight with enhanced design */}
        <div className="inline-block mb-12 animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
          <div className="ultra-glass px-6 sm:px-8 md:px-12 py-4 md:py-6 rounded-full border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
            <div className="relative flex gap-8 items-center justify-center">
              <span className="text-cyan-400 text-lg sm:text-xl font-semibold">Starting from </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Orbitron']">₹ 9,999</span>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-20 animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
          <button className="neon-button group px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 flex items-center gap-3 md:gap-4 w-full sm:w-auto">
            Get a Quote
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="glass-button group px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 flex items-center gap-3 md:gap-4 w-full sm:w-auto">
            <Play className="w-5 h-5 md:w-6 md:h-6" />
            Explore Solutions
          </button>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-purple-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/3 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;