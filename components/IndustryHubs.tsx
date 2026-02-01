import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const IndustryHubs: React.FC = () => {
  return (
    <section className="py-20 lg:pt-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            SPECIALIZED INDUSTRIES
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We focus on what we know best. Our team brings deep industry expertise to deliver coverage that actually works when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Overlay - Blue Color Burn Effect */}
              <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40"></div>
              
              {/* Gradient for text readability on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center mb-4">
                   {service.icon && <service.icon className="text-accent w-8 h-8 mr-3" />}
                   <h3 className="text-2xl font-heading font-bold text-white uppercase">{service.title}</h3>
                </div>
                
                <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
                
                <span className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wider hover:text-accent transition-colors">
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryHubs;