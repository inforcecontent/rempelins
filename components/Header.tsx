import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import TopBar from './TopBar';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 fixed top-0 transition-all duration-300">
      {!isScrolled && <TopBar />}
      
      <div className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center z-50">
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black text-primary tracking-tighter leading-none">REMPEL</span>
              <span className="text-sm font-bold text-secondary tracking-[0.2em] leading-none">INSURANCE</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className="flex items-center text-secondary font-bold uppercase text-sm tracking-wide hover:text-primary transition-colors py-4"
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>

                {/* Mega Menu / Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-4 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-lg overflow-hidden">
                    <ul className="py-2">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <a 
                            href={sub.href} 
                            className="block px-6 py-3 text-text hover:bg-light hover:text-primary transition-colors text-sm font-medium border-l-4 border-transparent hover:border-primary"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-secondary p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden pt-24 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 overflow-y-auto h-full pb-20">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-100 pb-2">
              <div className="flex justify-between items-center">
                <a 
                  href={item.href} 
                  className="text-lg font-heading font-bold text-secondary uppercase"
                  onClick={() => !item.subItems && setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="p-2 text-primary"
                  >
                    <ChevronDown className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {item.subItems && activeDropdown === item.label && (
                <ul className="mt-2 ml-4 space-y-2 border-l-2 border-primary pl-4">
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <a 
                        href={sub.href} 
                        className="block py-2 text-text font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          
          <div className="pt-6 space-y-4">
             <button className="w-full bg-accent text-white py-3 font-bold uppercase rounded shadow hover:bg-red-700 transition-colors">
               Submit a Claim
             </button>
             <button className="w-full bg-primary text-white py-3 font-bold uppercase rounded shadow hover:bg-secondary transition-colors">
               Request a Quote
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;