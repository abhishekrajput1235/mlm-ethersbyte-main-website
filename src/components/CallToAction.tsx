import React from 'react';
import { Calendar, MessageCircle, Mail, Phone, Globe, Headphones } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-32 px-4">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main CTA */}
        <div className="ultra-glass rounded-3xl p-16 border border-white/20 mb-16 relative overflow-hidden scroll-reveal">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-shimmer"></div>
          
          {/* Floating elements */}
          <div className="absolute top-8 left-8 w-8 h-8 border border-cyan-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-8 right-8 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text-rainbow font-['Orbitron']">
              Ready to Transform Your MLM Business?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of successful MLM companies who trust our cutting-edge software solutions to power their growth
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <button className="neon-button group px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 flex items-center gap-4">
                <Calendar className="w-6 h-6" />
                Book a Demo
              </button>
              <button className="glass-button group px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 flex items-center gap-4">
                <MessageCircle className="w-6 h-6" />
                Get Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2 font-['Orbitron']">500+</div>
                <div className="text-gray-400">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2 font-['Orbitron']">10M+</div>
                <div className="text-gray-400">Users Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2 font-['Orbitron']">99.9%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 scroll-reveal">
          <div className="ultra-glass p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Mail className="w-12 h-12 text-cyan-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-white mb-4 font-['Orbitron']">Email Us</h3>
              <p className="text-gray-400 leading-relaxed">Get detailed proposals and technical specifications delivered to your inbox</p>
            </div>
          </div>
          
          <div className="ultra-glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <MessageCircle className="w-12 h-12 text-purple-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-white mb-4 font-['Orbitron']">Live Chat</h3>
              <p className="text-gray-400 leading-relaxed">Instant support from our technical experts and solution architects</p>
            </div>
          </div>
          
          <div className="ultra-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Calendar className="w-12 h-12 text-emerald-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-white mb-4 font-['Orbitron']">Schedule Call</h3>
              <p className="text-gray-400 leading-relaxed">Book a personalized consultation session with our senior developers</p>
            </div>
          </div>
        </div>

        {/* Additional contact methods */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 scroll-reveal">
          <div className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group text-center">
            <Phone className="w-8 h-8 text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">Phone Support</h4>
            <p className="text-gray-400 text-sm">Direct line to our technical team</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group text-center">
            <Globe className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
            <p className="text-gray-400 text-sm">Serving clients in 50+ countries</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 group text-center">
            <Headphones className="w-8 h-8 text-pink-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
            <p className="text-gray-400 text-sm">Round-the-clock assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;