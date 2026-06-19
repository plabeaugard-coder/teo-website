import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/images/logo2.png';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Rapid Onsite Response', path: '/services' },
        { name: 'Inventory & Documentation', path: '/services' },
        { name: 'Asset Safeguarding', path: '/services' },
        { name: 'Professional Packing', path: '/services' },
      ]
    },
    { name: 'About', path: '/about' },
    { 
      name: 'Partners', 
      path: '/partners',
      dropdown: [
        { name: 'Property Managers', path: '/partners' },
        { name: 'Senior Living Facilities', path: '/partners' },
        { name: 'Estate Attorneys', path: '/partners' },
      ]
    },
    { name: 'FAQ', path: '/faq' },
    { name: 'Payment', path: '/payment' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top Banner indicating not actual service but prototype */}
      <div className="bg-accent text-white text-xs text-center py-2 px-4 uppercase tracking-widest font-medium">
        Serving the Omaha Metro Area
      </div>

     <header className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-8' : 'bg-white/90 backdrop-blur-md py-10'
  }`}
>
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex w-full justify-center">
            <img src={logo} alt="Tangibles Estate Organizer" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path ? 'text-accent border-b-2 border-accent pb-[2px]' : 'text-charcoal-light'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 text-charcoal-light group-hover:text-accent transition-colors" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div 
                    className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 z-50 ${
                      openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-sm">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          to={dropLink.path}
                          className="block px-5 py-2.5 text-sm text-charcoal hover:bg-gray-50 hover:text-accent transition-colors"
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-4 ml-2 pl-4 border-l border-gray-200 h-6">
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-gray-100 text-charcoal-light transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-gray-100 text-charcoal-light transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                  <Link
                    to={link.path}
                    className="block text-charcoal font-medium text-[15px] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-1 space-y-2 border-l-2 border-gray-100 ml-2">
                      {link.dropdown.map(dropLink => (
                        <Link
                          key={dropLink.name}
                          to={dropLink.path}
                          className="block text-sm text-charcoal-light py-1.5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-2">
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-charcoal-light">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-charcoal-light">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-white pt-20 pb-10">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logo} alt="Tangibles Estate Organizer" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Specialized decedent property transition service for landlords, managers, and families.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Rapid Onsite Response</li>
              <li>Photographic Inventory</li>
              <li>Asset Safeguarding</li>
              <li>Professional Packing</li>
              <li>Proxy Coordination</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Omaha, NE Metro Area</li>
              <li>1-800-555-0199</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-6 border border-white/30 hover:border-white px-6 py-2 transition-colors uppercase text-xs tracking-widest"
            >
              Request Consultation
            </Link>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tangibles Estate Organizer. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
