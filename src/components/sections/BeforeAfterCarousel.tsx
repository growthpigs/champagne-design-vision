
import React, { useState } from 'react';

const BeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    {
      title: "Glebe Kitchen Transformation",
      before: "/lovable-uploads/c70d9dd5-873f-43ca-87c2-c4b80b3b7a6b.png",
      after: "/lovable-uploads/8d50ae8b-47c0-400d-8983-b4ec1ea0e221.png",
      description: "Standard counters → Dekton waterfall island with integrated lighting"
    },
    {
      title: "Rockcliffe Bath Sanctuary", 
      before: "/lovable-uploads/a818d696-4b66-49ad-85ac-01a96c9f95dc.png",
      after: "/lovable-uploads/828d324b-20b3-4635-8dd4-de15077d9499.png",
      description: "Builder-grade → Laminam spa sanctuary with floating vanity"
    },
    {
      title: "Westboro Modern Statement",
      before: "/lovable-uploads/94a56ce7-2844-446b-9a17-5efb300cdb7a.png", 
      after: "/lovable-uploads/801c9392-787d-4079-ad80-3a36215e882f.png",
      description: "Dated lobby → MaxFine statement wall with premium finishes"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            See Our Client's Surface Transformations
          </h2>
          <p className="text-xl text-gray-600">
            From ordinary to extraordinary - witness the Urbano difference
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {transformations.map((transformation, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8 bg-gray-50">
                    {/* Before */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-600 text-center">BEFORE</h4>
                      <img 
                        src={transformation.before}
                        alt={`${transformation.title} - Before`}
                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    
                    {/* After */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-accent text-center">AFTER</h4>
                      <img 
                        src={transformation.after}
                        alt={`${transformation.title} - After`}
                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    
                    {/* Description */}
                    <div className="md:col-span-2 text-center">
                      <h3 className="font-poppins text-2xl font-bold text-primary mb-2">
                        {transformation.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {transformation.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            →
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
