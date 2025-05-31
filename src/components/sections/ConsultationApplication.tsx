
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ConsultationApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    phone: '',
    address: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation application submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      title: "Surface Selection Mastery",
      value: "$4,900 value",
      description: "Dekton/Laminam/MaxFine comparison in your space"
    },
    {
      title: "3D Visualization Preview", 
      value: "$2,400 value",
      description: "See exact installation before we start"
    },
    {
      title: "Material Optimization Blueprint",
      value: "$1,800 value", 
      description: "Avoid $18k+ waste with precise planning"
    },
    {
      title: "Lifetime Craftsmanship Warranty",
      value: "$5,000+ value",
      description: "25-year guarantee on all work"
    }
  ];

  return (
    <section id="consultation-application" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold mb-6">
            Find Out If Your Home Is Our Next Award-Winning Project
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Apply for a 90-minute champagne design consultation with Justin, 
            and discover your project's full premium surface potential.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div>
            <h3 className="font-poppins text-2xl font-bold mb-8">You'll Receive:</h3>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <span className="text-accent font-bold">{benefit.value}</span>
                  </div>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-accent/20 border border-accent rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">Total Value: $14,100</div>
              <div className="text-xl font-semibold">Yours FREE</div>
            </div>
            
            <div className="mt-8 space-y-4">
              <h4 className="font-poppins text-xl font-semibold">How It Works:</h4>
              <ol className="space-y-2 text-gray-200">
                <li>1. Apply for your Champagne Design Consult</li>
                <li>2. Complimentary 90-minute session focused on your project</li>
                <li>3. Walk away with full budget, scope & timeline understanding</li>
                <li>4. Decide if your project & our team are perfect fit (no pressure)</li>
              </ol>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-poppins text-2xl font-bold mb-6 text-center">
              Apply for Your Free Design Consult
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Input
                  type="text"
                  name="address"
                  placeholder="Ottawa Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="bg-white/20 border border-white/30 text-white rounded-md px-3 py-2"
                  required
                >
                  <option value="" className="text-gray-900">Project Type *</option>
                  <option value="kitchen" className="text-gray-900">Kitchen</option>
                  <option value="bathroom" className="text-gray-900">Bathroom</option>
                  <option value="whole-home" className="text-gray-900">Whole Home</option>
                  <option value="commercial" className="text-gray-900">Commercial</option>
                </select>
                
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="bg-white/20 border border-white/30 text-white rounded-md px-3 py-2"
                >
                  <option value="" className="text-gray-900">Timeline</option>
                  <option value="asap" className="text-gray-900">ASAP</option>
                  <option value="3-months" className="text-gray-900">3 Months</option>
                  <option value="6-months" className="text-gray-900">6 Months</option>
                  <option value="planning" className="text-gray-900">Planning Phase</option>
                </select>
              </div>
              
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2"
              >
                <option value="" className="text-gray-900">Investment Range</option>
                <option value="under-25k" className="text-gray-900">Under $25,000</option>
                <option value="25k-50k" className="text-gray-900">$25,000 - $50,000</option>
                <option value="50k-100k" className="text-gray-900">$50,000 - $100,000</option>
                <option value="over-100k" className="text-gray-900">Over $100,000</option>
              </select>
              
              <Textarea
                name="message"
                placeholder="Tell us about your vision and goals for this project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder-white/70"
              />
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 text-lg rounded-lg transition-all transform hover:scale-105"
              >
                APPLY FOR YOUR FREE DESIGN CONSULT
              </Button>
              
              <p className="text-center text-sm text-gray-300">
                "Timely. Precise. Transparent." — Keith K., Rockcliffe
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationApplication;
