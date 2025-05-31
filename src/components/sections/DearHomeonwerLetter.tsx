
import React from 'react';
import { Button } from '@/components/ui/button';

const DearHomeonwerLetter = () => {
  const redirectToQuiz = () => {
    window.open('https://urbano-design.scoreapp.com/', '_blank');
  };

  return (
    <section id="letter" className="py-20 bg-white pt-[8vh]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl text-primary mb-4 max-w-4xl mx-auto">
            A Personal Message From Justin, Certified Dekton Master
          </h2>
        </div>
        
        <div className="bg-secondary/50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-primary mb-6 font-medium">
              Dear Fellow Ottawa Homeowner,
            </p>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-primary leading-relaxed">
                The $3,000 Dekton slab cracked during installation at the Ottawa Art Gallery restoration project.
              </p>
              
              <p className="text-primary leading-relaxed">
                My apprentice's face went white. "I barely touched it," he whispered.
              </p>
              
              <p className="text-primary leading-relaxed">
                That moment changed everything about how we approach premium surface installation.
              </p>
              
              <p className="text-primary leading-relaxed">
                You see, most contractors treat Dekton, Laminam, and natural stone like they're installing standard tile. They rush. They guess. They hope for the best.
              </p>
              
              <p className="text-primary leading-relaxed">
                But premium materials demand precision. Patience. Understanding.
              </p>
              
              <p className="text-primary leading-relaxed">
                Each slab whispers its installation secrets to trained hands. The grain tells you where to cut. The temperature reveals when to install. The substrate speaks of preparation needs.
              </p>
              
              <p className="text-primary leading-relaxed">
                After 15 years and 34+ industry awards, I've learned that true craftsmanship isn't about speed—it's about respect for materials that cost more than most people's cars.
              </p>
              
              <p className="text-primary leading-relaxed">
                That's why we limit ourselves to 8 installations monthly. Your Ottawa home deserves nothing less than museum-grade precision.
              </p>
              
              <p className="text-primary leading-relaxed mb-8">
                Ready to experience the difference? Book your complimentary 90-minute Champagne Design Consultation and discover what's possible for your Ottawa home.
              </p>
            </div>
            
            <p className="text-primary mb-6 leading-relaxed">
              To bringing your vision to reality,
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
              <div>
                <div className="font-script text-2xl text-accent mb-2">Justin Urbano</div>
                <p className="font-semibold text-primary">Master Craftsman & Founder</p>
                <p className="text-sm text-gray-600">Dekton Certified | Laminam Elite | MaxFine Specialist</p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <img 
                  src="https://p129.p0.n0.cdn.zight.com/items/YEuYJoGB/3c49dd27-1d2b-4568-a825-ba63cc6b011f.jpg" 
                  alt="Justin Urbano, Certified Master Craftsman" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-accent"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={redirectToQuiz}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl"
          >
            APPLY FOR YOUR FREE DESIGN CONSULT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DearHomeonwerLetter;
