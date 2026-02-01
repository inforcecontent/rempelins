import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Hours */}
          <div>
            <div className="mb-6">
               <div className="flex flex-col mb-4">
                  <span className="text-3xl font-heading font-black text-white tracking-tighter leading-none">REMPEL</span>
                  <span className="text-sm font-bold text-gray-400 tracking-[0.2em] leading-none">INSURANCE</span>
               </div>
               <p className="text-gray-300 text-sm leading-relaxed mb-6">
                 Manitoba's trusted insurance partner since 1965. Specializing in trucking, agribusiness, and commercial insurance solutions tailored to your unique needs.
               </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 uppercase text-sm tracking-wider">Hours of Operation</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li className="flex justify-between max-w-[200px]"><span>Mon - Fri:</span> <span>8:30 AM - 5:00 PM</span></li>
                <li className="flex justify-between max-w-[200px]"><span>Sat - Sun:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider border-b border-gray-600 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`tel:${COMPANY_PHONE}`} className="text-gray-300 text-sm hover:text-white transition-colors">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-300 text-sm hover:text-white transition-colors">{COMPANY_EMAIL}</a>
              </li>
            </ul>
            
            <div className="mt-8">
               <button className="w-full bg-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded uppercase tracking-wider transition-colors shadow-lg">
                 Submit a Claim
               </button>
            </div>
          </div>

          {/* Column 3: Quick Links & Social */}
          <div>
             <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider border-b border-gray-600 pb-2 inline-block">Quick Links</h4>
             <ul className="space-y-2 mb-8">
               {['Trucking Insurance', 'Farm Insurance', 'Commercial Insurance', 'Get a Quote', 'Report a Claim'].map(link => (
                 <li key={link}>
                   <a href="#" className="text-gray-300 text-sm hover:text-primary transition-colors flex items-center group">
                     <ArrowRight className="w-3 h-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
             
             <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
             <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rempel Insurance Brokers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;