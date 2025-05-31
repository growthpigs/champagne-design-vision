
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://p129.p0.n0.cdn.zight.com/items/6qupXeOG/12bd680e-4414-4664-a182-41b46dce86e9.webp" 
              alt="Urbano Design" 
              className="h-8 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ottawa's premier certified installers of Dekton, Laminam, and MaxFine premium surfaces. 
              Serving discerning homeowners who demand museum-grade craftsmanship and lifetime value.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">📍 Serving All of Ottawa & Surrounding Areas</p>
              <p className="text-gray-300">📞 (613) 555-SURFACE</p>
              <p className="text-gray-300">✉️ hello@urbanodesign.ca</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-6">Premium Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Dekton Installation</li>
              <li>Laminam Surfaces</li>
              <li>MaxFine Applications</li>
              <li>Natural Stone</li>
              <li>Design Consultation</li>
              <li>Project Management</li>
            </ul>
          </div>
          
          {/* Areas Served */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-6">Areas Served</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Rockcliffe Park</li>
              <li>Glebe</li>
              <li>Westboro</li>
              <li>Kanata</li>
              <li>Barrhaven</li>
              <li>Orleans</li>
            </ul>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="font-poppins text-lg font-semibold mb-4">Our Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span className="bg-white/10 px-4 py-2 rounded-lg">Dekton Certified Master</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg">Laminam Elite Installer</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg">MaxFine Specialist</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg">$2M Insured & Bonded</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
            <p className="text-gray-300 text-sm">
              © 2024 Urbano Design. All rights reserved. | Licensed & Insured in Ottawa, ON
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
