
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/b6dae26d-ef96-4680-9fc3-9b743f9ae50f.png" 
              alt="ISA Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-white">ISA Club</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-space-light transition-colors">Home</Link>
            <Link to="/shop" className="text-white hover:text-space-light transition-colors">Shop</Link>
            <Link to="/training" className="text-white hover:text-space-light transition-colors">Training</Link>
            <Link to="/events" className="text-white hover:text-space-light transition-colors">Events</Link>
            <Link to="/webinars" className="text-white hover:text-space-light transition-colors">Webinars</Link>
            <Link to="/community" className="text-white hover:text-space-light transition-colors">Community</Link>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/isa.astrospace?igsh=cGgyeDB3M2d4dDJ5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-space-light transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="https://chat.whatsapp.com/L3cBfJnQuO3BAbTnr4FbUE?fbclid=PAZXh0bgNhZW0CMTEAAabtBxDh4K2fihtHj_B3jxL87pA6nBaZurvhwesU32G5CftYqkhHFxdlicg_aem_v3_CsBh8Vl8Pxnf3HD8Ltg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-space-light transition-colors"
              >
                <MessageCircle />
              </a>
            </div>

            <Button className="bg-space-accent hover:bg-space-accent/80 text-white">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-6 px-2">
              <Link 
                to="/" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/training" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>
              <Link 
                to="/events" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/webinars" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Webinars
              </Link>
              <Link 
                to="/community" 
                className="text-white hover:text-space-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              
              <div className="flex items-center space-x-4 py-2">
                <a 
                  href="https://www.instagram.com/isa.astrospace?igsh=cGgyeDB3M2d4dDJ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-space-light transition-colors"
                >
                  <Instagram />
                </a>
                <a 
                  href="https://chat.whatsapp.com/L3cBfJnQuO3BAbTnr4FbUE?fbclid=PAZXh0bgNhZW0CMTEAAabtBxDh4K2fihtHj_B3jxL87pA6nBaZurvhwesU32G5CftYqkhHFxdlicg_aem_v3_CsBh8Vl8Pxnf3HD8Ltg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-space-light transition-colors"
                >
                  <MessageCircle />
                </a>
              </div>

              <Button className="bg-space-accent hover:bg-space-accent/80 text-white w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
