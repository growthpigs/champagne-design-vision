import React from 'react';
import { Button } from '@/components/ui/button';

const DeliveryExperience = () => {
  const redirectToQuiz = () => {
    window.open('https://urbano-design.scoreapp.com/', '_blank');
  };

  const steps = [
    {
      number: "1",
      title: "Design Comes First",
      description: "We've pioneered a material-first process matching your vision with certified surface expertise."
    },
    {
      number: "2", 
      title: "Every Expert Under One Roof",
      description: "Our team includes certified installers, project manager & material specialists—all expertise from one Ottawa firm."
    },
    {
      number: "3",
      title: "On Budget, On Time, On Trend", 
      description: "We guarantee your installation within agreed timeline and budget—backed by $2M insurance."
    },
    {
      number: "4",
      title: "Your Home's Full Potential & Value",
      description: "Premium surfaces are your #1 value investment. We ensure maximum return on every dollar spent."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white pt-[8vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-primary mb-6">
            Our Four-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures flawless execution from design to completion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative z-10 text-center">
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="font-poppins text-xl font-bold text-primary mb-4 max-w-xs mx-auto">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="font-poppins text-2xl font-bold text-primary mb-4">
              Ready to Experience the Urbano Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join 400+ satisfied Ottawa homeowners who chose excellence over compromise.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">427</div>
                <div className="text-sm text-gray-600">Homes Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">34+</div>
                <div className="text-sm text-gray-600">Industry Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">25</div>
                <div className="text-sm text-gray-600">Year Warranty</div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={redirectToQuiz}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl"
          >
            BOOK YOUR CHAMPAGNE DESIGN CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryExperience;
