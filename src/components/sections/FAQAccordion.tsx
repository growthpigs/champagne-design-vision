
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What makes Urbano Design different from other Ottawa contractors?",
      answer: "We're Ottawa's only certified installers for Dekton, Laminam, and MaxFine premium surfaces. Our team has 15+ years of specialized experience with these materials, and we offer a 25-year craftsmanship warranty backed by $2M insurance. We limit ourselves to 8 installations monthly to ensure museum-grade precision for every project."
    },
    {
      question: "How long does a typical installation take?",
      answer: "We guarantee completion within 12 weeks from project start, compared to the 6-8 month industry average. Our ironclad timeline includes daily SMS updates with photos, so you're never left wondering about progress. Ottawa winter weather is factored into our scheduling, so there are no seasonal delays."
    },
    {
      question: "What's included in your free Champagne Design Consultation?",
      answer: "Your 90-minute consultation includes: Surface Selection Mastery ($4,900 value), 3D Visualization Preview ($2,400 value), Material Optimization Blueprint ($1,800 value), and Lifetime Craftsmanship Warranty details ($5,000+ value). Total value: $14,100 - completely free with no obligation."
    },
    {
      question: "Do you work with these premium materials exclusively?",
      answer: "While we also install natural stone and quartz, our specialty and certification focus is on Dekton, Laminam, and MaxFine. These ultra-thin, large-format surfaces require specialized knowledge, tools, and techniques that most contractors simply don't have. We're the only Ottawa firm certified by all three manufacturers."
    },
    {
      question: "What areas of Ottawa do you serve?",
      answer: "We serve all of Ottawa and surrounding areas including Rockcliffe Park, Glebe, Westboro, Kanata, Barrhaven, and Orleans. We've completed 427 homes across the region and understand the unique architectural styles and requirements of each neighborhood."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "You'll receive daily SMS updates with photos showing progress, plus weekly detailed reports. Our project manager is available by phone during business hours, and we provide 48-hour response time for any questions or concerns. No more wondering what's happening with your investment."
    },
    {
      question: "What's your warranty and what does it cover?",
      answer: "We offer a 25-year craftsmanship warranty covering installation quality, structural integrity, and material performance. This is backed by our $2M liability insurance and the manufacturer warranties for each material. If anything goes wrong due to our installation, we fix it at no cost to you."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about premium surface installation
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="font-poppins text-xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-200 mb-6">
              We're here to help. Book your free consultation and get all your questions answered by our experts.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('consultation-application');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
