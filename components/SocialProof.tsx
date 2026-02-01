import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        
        {/* Logos */}
        <div className="mb-20">
          <p className="text-center text-gray-500 font-bold uppercase tracking-widest mb-8 text-sm">
            Trusted Partnerships with Canada's Top Carriers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - In production use actual SVGs */}
            <h3 className="text-2xl font-bold text-gray-400">Wawanesa</h3>
            <h3 className="text-2xl font-bold text-gray-400">Intact</h3>
            <h3 className="text-2xl font-bold text-gray-400">Aviva</h3>
            <h3 className="text-2xl font-bold text-gray-400">SGI CANADA</h3>
            <h3 className="text-2xl font-bold text-gray-400">Red River Mutual</h3>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-secondary rounded-2xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Quote Icon */}
          <Quote className="absolute top-8 left-8 text-white/10 w-32 h-32 -rotate-12" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white">Client Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-secondary mr-4">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{t.author}</h4>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;