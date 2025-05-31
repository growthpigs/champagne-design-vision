
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/90'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/6qupXeOG/12bd680e-4414-4664-a182-41b46dce86e9.webp" 
            alt="Urbano Design" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('consultation')}
            className="text-white hover:text-accent transition-colors font-medium"
          >
            Free Consultation
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-accent transition-colors font-medium"
          >
            Ottawa Projects
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-white hover:text-accent transition-colors font-medium"
          >
            Our Process
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-accent transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <Button 
          onClick={() => scrollToSection('consultation-application')}
          className="hidden md:block bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
        >
          APPLY FOR YOUR FREE DESIGN CONSULT
        </Button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <nav className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('consultation')}
              className="block w-full text-left text-white hover:text-accent transition-colors font-medium py-2"
            >
              Free Consultation
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-white hover:text-accent transition-colors font-medium py-2"
            >
              Ottawa Projects
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-white hover:text-accent transition-colors font-medium py-2"
            >
              Our Process
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-accent transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('consultation-application')}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold mt-4"
            >
              APPLY FOR YOUR FREE DESIGN CONSULT
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
