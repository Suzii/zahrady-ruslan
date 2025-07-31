
import * as React from 'react';
import { Sprout, TreePine, Droplets, Route, Leaf, Flower2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'pokládka trávníku',
      description: 'Profesionální pokládka travních koberců pro dokonalý zelený trávník',
      icon: Sprout,
      gradient: 'from-green-700 to-emerald-700'
    },
    {
      title: 'sázení',
      description: 'Odborné sázení stromů, keřů a okrasných rostlin podle vašich přání',
      icon: TreePine,
      gradient: 'from-emerald-700 to-teal-700'
    },
    {
      title: 'závlaha',
      description: 'Návrh a instalace efektivních zavlažovacích systémů',
      icon: Droplets,
      gradient: 'from-teal-700 to-cyan-700'
    },
    {
      title: 'realizace chodníčků',
      description: 'Vytváření estetických a funkčních zahradních chodníků',
      icon: Route,
      gradient: 'from-slate-600 to-gray-600'
    },
    {
      title: 'mlatové cesty',
      description: 'Budování přírodních mlatových cest a stezek',
      icon: Leaf,
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'vyvýšené záhony',
      description: 'Konstrukce praktických vyvýšených záhonů pro snadnější pěstování',
      icon: Flower2,
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section id="sluzby" className="py-20 gradient-services relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8 fade-in-up">
              Služby
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto fade-in-up">
              Kompletní spektrum zahradnických služeb pro vytvoření vaší vysněné zahrady
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card with gradient border */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon with subtle gradient background */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="relative text-xl font-playfair font-semibold text-gray-800 mb-4 capitalize group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Subtle border gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 fade-in-up">
            <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-semibold text-gradient mb-4">
                Potřebujete konzultaci?
              </h3>
              <p className="text-gray-600 mb-6">
                Kontaktujte mě a společně vytvoříme vaši vysněnou zahradu
              </p>
              <button className="btn-primary-gradient text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Kontaktovat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
