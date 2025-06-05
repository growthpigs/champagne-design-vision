import React from 'react';

const ProjectGallery = () => {
  const projects = [
    {
      title: "Rockcliffe Heritage Kitchen",
      material: "Dekton Surfaces",
      image: "/lovable-uploads/c70d9dd5-873f-43ca-87c2-c4b80b3b7a6b.png"
    },
    {
      title: "Westboro Modern Bath",
      material: "Laminam Installation",
      image: "/lovable-uploads/828d324b-20b3-4635-8dd4-de15077d9499.png"
    },
    {
      title: "Glebe Open Concept",
      material: "MaxFine Surfaces",
      image: "/lovable-uploads/a818d696-4b66-49ad-85ac-01a96c9f95dc.png"
    },
    {
      title: "Richard Family Dock",
      material: "Premium Stone",
      image: "/lovable-uploads/94a56ce7-2844-446b-9a17-5efb300cdb7a.png"
    },
    {
      title: "Kanata Luxury Suite",
      material: "Dekton & Laminam",
      image: "/lovable-uploads/8d50ae8b-47c0-400d-8983-b4ec1ea0e221.png"
    },
    {
      title: "Barrhaven Statement Wall",
      material: "MaxFine Feature",
      image: "/lovable-uploads/801c9392-787d-4079-ad80-3a36215e882f.png"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            Our Ottawa Project Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Completed premium surface installations across Ottawa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-poppins text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-accent font-medium">
                  {project.material}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
