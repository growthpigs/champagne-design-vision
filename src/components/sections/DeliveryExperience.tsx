
import React from 'react';

const DeliveryExperience = () => {
  const steps = [
    {
      number: "1",
      title: "Design Comes First",
      description: "We've pioneered a material-first process matching your vision with certified surface expertise.",
      icon: "🎨"
    },
    {
      number: "2", 
      title: "Every Expert Under One Roof",
      description: "Our team includes certified installers, project manager & material specialists—all expertise from one Ottawa firm.",
      icon: "👥"
    },
    {
      number: "3",
      title: "On Budget, On Time, On Trend", 
      description: "We guarantee your installation within agreed timeline and budget—backed by $2M insurance.",
      icon: "⏱️"
    },
    {
      number: "4",
      title: "Your Home's Full Potential & Value",
      description: "Premium surfaces are your #1 value investment. We ensure maximum return on every dollar spent.",
      icon: "📈"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            How We Deliver An Incredible Ottawa Surface Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures flawless execution from design to completion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/30 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="font-poppins text-xl font-bold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold text-primary mb-4">
              Ready to Experience the Urbano Difference?
            </h3>
            <p className="text-gray-600 mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default DeliveryExperience;
