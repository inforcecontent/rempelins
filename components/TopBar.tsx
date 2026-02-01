import React from 'react';
import { Phone, Mail, FileText, ShieldAlert, Calendar } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="bg-light border-b border-gray-200 py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6 text-secondary font-medium">
          <a href={`tel:${COMPANY_PHONE}`} className="flex items-center hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            {COMPANY_PHONE}
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center hover:text-primary transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            {COMPANY_EMAIL}
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center text-secondary font-bold hover:text-primary transition-colors">
            <Calendar className="w-4 h-4 mr-1" />
            Book MPI Test
          </a>
          <a href="#" className="flex items-center text-accent font-bold hover:text-red-700 transition-colors uppercase tracking-wide">
            <ShieldAlert className="w-4 h-4 mr-1" />
            Submit a Claim
          </a>
          <a href="#" className="bg-primary text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-secondary transition-colors shadow-sm">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;