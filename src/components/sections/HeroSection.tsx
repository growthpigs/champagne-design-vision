
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const HeroSection = () => {
  const redirectToQuiz = () => {
    window.open('https://urbano-design.scoreapp.com/', '_blank');
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-[7vh]">
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
          <p className="text-accent font-medium mb-4 tracking-wide text-sm uppercase">FROM PINTEREST BOARD TO DREAM HOME</p>
          
          <h1 className="font-merriweather text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Apply For Your 'Champagne Design Consultation' With Ottawa's Top Remodeling & Additions Firm
          </h1>
          
          <div className="mb-8 space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-lg">
              <Check className="text-accent mr-3 h-5 w-5" />
              <span>On time & on budget guarantee</span>
            </div>
            <div className="flex items-center justify-center text-lg">
              <Check className="text-accent mr-3 h-5 w-5" />
              <span>Every home design is unique & on trend</span>
            </div>
            <div className="flex items-center justify-center text-lg">
              <Check className="text-accent mr-3 h-5 w-5" />
              <span>Design to construction, we look after everything</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Button 
              onClick={redirectToQuiz}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl mb-4"
            >
              APPLY FOR YOUR FREE DESIGN CONSULT
            </Button>
            
            <p className="text-sm text-gray-300 italic">
              "Timely. Efficient. Transparent." — Bryan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
