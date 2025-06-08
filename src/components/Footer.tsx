
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-garden-forest text-garden-cream py-12">
      <div className="container mx-auto section-padding">
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Ruslan</h3>
          <p className="text-garden-sage mb-6">
            Kompletní realizace zahrad s láskou k detailu
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+420123456789" className="hover:text-garden-sage transition-colors">
              +420 123 456 789
            </a>
            <a href="mailto:ruslan@zahradnik.cz" className="hover:text-garden-sage transition-colors">
              ruslan@zahradnik.cz
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-garden-sage/20">
            <p className="text-garden-sage text-sm">
              © 2024 Ruslan - Zahradnické služby. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
