
import React from 'react';
import { Building, Diamond, Shield, Clock } from 'lucide-react';

const EpicProjectsGrid = () => {
  const projects = [
    {
      title: "You Want Museum-Grade Craftsmanship",
      description: "Why settle for standard when your Rockcliffe home deserves Ottawa Art Gallery precision? Our certified artisans treat every installation like a permanent exhibition.",
      icon: <Building className="w-8 h-8 text-gray-500" />
    },
    {
      title: "You Want Exclusive Material Access", 
      description: "Dekton, Laminam, MaxFine—we're Ottawa's only certified installers for premium surfaces most contractors can't even order.",
      icon: <Diamond className="w-8 h-8 text-gray-500" />
    },
    {
      title: "You Want Zero Timeline Surprises",
      description: "12-week ironclad guarantee with daily SMS updates. No 'Ottawa winter delays' or vanishing contractor syndrome.",
      icon: <Clock className="w-8 h-8 text-gray-500" />
    },
    {
      title: "You Want Lifetime Investment Protection",
      description: "25-year craftsmanship warranty backed by $2M liability coverage. Your surfaces outlast your mortgage.",
      icon: <Shield className="w-8 h-8 text-gray-500" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 pt-[8vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-primary mb-6 max-w-4xl mx-auto">
            Epic Surface Projects For Ottawa Homeowners Who Want To Make Their Best Investment - Ever
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Urbano Design is Ottawa's premier surface installation firm. We're the right fit for you if...
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="font-poppins text-xl font-bold text-primary mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpicProjectsGrid;
