
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Leaf } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#uvod', label: 'Úvod' },
    { href: '#sluzby', label: 'Služby' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#kontakt', label: 'Kontakt' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-green-700 to-emerald-700 shadow-lg' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Leaf className={`w-5 h-5 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <span className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Ruslan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-green-700' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-700 to-emerald-700 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'group-hover:w-full' : 'group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'btn-primary-gradient' 
                  : 'glass text-white border-white/20 hover:bg-white/30'
              }`}
              onClick={() => scrollToSection('#kontakt')}
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden transition-all duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-6 shadow-2xl backdrop-blur-md border border-white/20">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-white hover:text-green-300 transition-colors duration-200 font-medium rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  className="w-full btn-primary-gradient"
                  onClick={() => scrollToSection('#kontakt')}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
