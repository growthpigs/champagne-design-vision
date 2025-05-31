
import React from 'react';

const TeamProfiles = () => {
  const team = [
    {
      name: "Justin Urbano",
      title: "Master Craftsman & Founder",
      certifications: ["Dekton Certified Master", "Laminam Elite Installer", "MaxFine Specialist"],
      experience: "15+ years, 427 homes completed",
      image: "https://p129.p0.n0.cdn.zight.com/items/YEuYJoGB/3c49dd27-1d2b-4568-a825-ba63cc6b011f.jpg",
      quote: "Every surface tells a story. My job is to make sure it's a beautiful one that lasts forever."
    },
    {
      name: "Wendy Urbano", 
      title: "Design Director & Co-Founder",
      certifications: ["Interior Design Certified", "Project Management Professional", "Material Specialist"],
      experience: "12+ years, 300+ design projects",
      image: "https://p129.p0.n0.cdn.zight.com/items/YEuYJoGB/3c49dd27-1d2b-4568-a825-ba63cc6b011f.jpg",
      quote: "Great design isn't just about beauty—it's about creating spaces that enhance your daily life."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            Meet Your Ottawa Surface Experts
          </h2>
          <p className="text-xl text-gray-600">
            Certified professionals dedicated to bringing your vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-accent"
                />
                
                <h3 className="font-poppins text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-4">{member.title}</p>
                <p className="text-gray-600 mb-6">{member.experience}</p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-primary mb-3">Certifications:</h4>
                  <ul className="space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <li key={certIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="text-accent mr-2">✓</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <blockquote className="italic text-gray-600 border-l-4 border-accent pl-4">
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold mb-4">
              Why Experience Matters in Premium Surface Installation
            </h3>
            <p className="text-gray-200 mb-6">
              Working with Dekton, Laminam, and MaxFine isn't just about installation—it's about understanding 
              the unique properties, handling requirements, and design possibilities of each material.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
                <div className="text-sm">Materials Installed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <div className="text-sm">Installation Failures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
