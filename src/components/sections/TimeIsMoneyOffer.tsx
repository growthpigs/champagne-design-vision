
import React from 'react';
import { Button } from '@/components/ui/button';

const TimeIsMoneyOffer = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "What's realistic for your budget (and where to avoid $18k+ waste)",
    "What timeframe you can expect (our 12-week guarantee vs 8-month industry average)",
    "The next steps to take (whether we work with you or not)", 
    "The key 'material traps' when selecting premium surfaces"
  ];

  return (
    <section id="consultation" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold mb-6">
            Time Is Money: Speak With Us Before You Waste Another Minute
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            If you're serious about investing in premium surface installation for your Ottawa home, 
            you can't afford to get bogged down with poor advice, workmanship, or project planning.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-4">
              Book a complimentary 90-minute 'Champagne Design Consultation' 
              with Justin and the Urbano team today.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-poppins text-xl font-semibold mb-6 text-accent">
                We'll Show You:
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/20 border border-accent rounded-2xl p-8 mb-6">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">90</div>
                <div className="text-lg text-gray-200">Minutes of Expert Guidance</div>
                <div className="text-sm text-gray-300 mt-2">Completely FREE</div>
              </div>
              
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 w-full"
              >
                Book Your FREE Consultation Now
              </Button>
              
              <p className="text-sm text-gray-300 mt-4">
                No pressure • No obligation • Just expert advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeIsMoneyOffer;
