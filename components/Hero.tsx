import React from 'react';
import { ArrowRight, Truck, Wheat, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Truck driving on highway at sunset"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white mt-10 md:mt-0">
        <div className="max-w-3xl">
          <span className="block text-accent font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            Manitoba's Specialized Authority
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-6 shadow-sm">
            PROTECTING YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              BUSINESS & FUTURE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
            Expert insurance solutions for the trucking industry, agribusinesses, and commercial enterprises. We don't just sell policies; we manage risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center group shadow-lg">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded font-bold uppercase tracking-wider transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Feature Cards */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 hidden lg:block z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-t-lg shadow-xl border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-heading font-bold text-secondary">Trucking</h3>
                <Truck className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-600 text-sm">Comprehensive fleet and cargo solutions for the long haul.</p>
            </div>
             {/* Card 2 */}
             <div className="bg-white p-6 rounded-t-lg shadow-xl border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-heading font-bold text-secondary">Agribusiness</h3>
                <Wheat className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-600 text-sm">Protecting your harvest, livestock, and equipment.</p>
            </div>
             {/* Card 3 */}
             <div className="bg-white p-6 rounded-t-lg shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-heading font-bold text-secondary">Commercial</h3>
                <Building2 className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-600 text-sm">Tailored risk management for Manitoba businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;