
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://p129.p0.n0.cdn.zight.com/items/9ZuO4Xer/09f5eca1-c5d3-4e15-8f8e-9cbd55e36c45.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-accent font-medium mb-4 tracking-wide">OTTAWA'S PREMIER SURFACE INSTALLATION</p>
          
          <h1 className="font-merriweather text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Museum-Grade<br />
            <span className="text-accent">Craftsmanship</span><br />
            For Your Forever Home
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dekton • Laminam • MaxFine certified installers serving discerning Ottawa homeowners
            who demand precision, beauty, and lifetime value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Book Your Free Champagne Design Consult
            </Button>
            
            <p className="text-sm text-gray-300 sm:ml-4">
              ★★★★★ Rated by 100+ Ottawa Homeowners
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
