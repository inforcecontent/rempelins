import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Value Prop */}
          <div className="lg:w-1/2 p-10 bg-gray-50 flex flex-col justify-center">
            <span className="text-accent font-bold tracking-widest uppercase mb-2">Get Started Today</span>
            <h2 className="text-3xl font-heading font-black text-secondary mb-6">
              Expert Advice is Just a Click Away
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Don't leave your business exposed. Get a comprehensive quote from Manitoba's specialized brokers.
            </p>
            <ul className="space-y-4">
              {[
                'Tailored coverage analysis',
                'Competitive market rates',
                'Dedicated claims advocacy',
                'Annual risk reviews'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500 w-5 h-5 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2 p-10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Interest</label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                  <option>Trucking Insurance</option>
                  <option>Agribusiness Insurance</option>
                  <option>Commercial Insurance</option>
                  <option>Personal / Home</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="button" className="w-full bg-accent hover:bg-red-700 text-white font-bold text-lg py-4 rounded shadow-md transition-all duration-300 transform hover:-translate-y-1">
                Request My Free Quote
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Your information is secure. We never share your data with third parties.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;