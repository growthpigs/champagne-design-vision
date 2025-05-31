
import React from 'react';

const TestimonialVideos = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      location: "Rockcliffe Park",
      project: "Kitchen & Bath Renovation",
      video: "https://p129.p0.n0.cdn.zight.com/items/d5uk2EBz/c6f92388-6588-472f-b2ad-c84ed8155056.mp4",
      quote: "Justin and his team transformed our 1960s kitchen into a modern masterpiece. The Dekton island is absolutely stunning."
    },
    {
      id: 2,
      name: "David & Emma",
      location: "Glebe",
      project: "Whole Home Surfaces",
      video: "https://p129.p0.n0.cdn.zight.com/items/d5uk2EBz/c6f92388-6588-472f-b2ad-c84ed8155056.mp4",
      quote: "The attention to detail was incredible. Every surface is perfectly installed and the communication throughout was excellent."
    }
  ];

  const writtenTestimonials = [
    {
      quote: "Urbano Design delivered exactly what they promised, when they promised. The Laminam in our bathroom is breathtaking.",
      author: "Jennifer K.",
      location: "Westboro"
    },
    {
      quote: "After three quotes, Urbano was the clear choice. Their expertise with premium materials is unmatched in Ottawa.",
      author: "Robert M.",
      location: "Kanata"
    },
    {
      quote: "Worth every penny. Our home value increased significantly, and we get compliments on the surfaces daily.",
      author: "Lisa & Tom",
      location: "Barrhaven"
    }
  ];

  return (
    <section className="py-20 bg-white pt-[8vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-primary mb-6">
            What Ottawa Homeowners Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real clients, real transformations, real satisfaction
          </p>
        </div>
        
        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="aspect-[9/16] max-h-[500px] bg-gray-900 relative rounded-2xl overflow-hidden shadow-lg mb-6">
                <video 
                  controls
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/300/400"
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h3 className="font-poppins text-lg font-bold text-primary mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-accent font-medium mb-2">{testimonial.location}</p>
                <p className="text-sm text-gray-600 mb-3">{testimonial.project}</p>
                <blockquote className="text-gray-700 italic max-w-md mx-auto">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        {/* Written Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {writtenTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary text-white p-6 rounded-xl">
              <div className="text-accent text-4xl mb-4">"</div>
              <blockquote className="text-gray-200 mb-4 leading-relaxed max-w-xs mx-auto">
                {testimonial.quote}
              </blockquote>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-accent text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof */}
        <div className="text-center">
          <div className="bg-accent/10 border border-accent rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-gray-600">Referral Rate</div>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied Ottawa homeowners who chose Urbano Design for their premium surface installation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
