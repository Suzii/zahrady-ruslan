
import React from 'react';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-footer text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/20" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Company info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-playfair font-bold">Zahrady Ruslan</h3>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Kompletní realizace zahrad s láskou k detailu a profesionálním přístupem
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-emerald-300" />
                </div>
                <a href="tel:+420123456789" className="text-emerald-100 hover:text-white transition-colors font-medium">
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-emerald-300" />
                </div>
                <a href="mailto:ruslan@zahradnik.cz" className="text-emerald-100 hover:text-white transition-colors font-medium">
                  ruslan@zahradnik.cz
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-emerald-300" />
                </div>
                <span className="text-emerald-100 font-medium">
                  Brno a okolí
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-center items-center">
            <p className="text-emerald-100 text-sm">
              © {new Date().getFullYear()} Ruslan - Zahradnické služby
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
