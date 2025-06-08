
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'pokládka trávníku',
      description: 'Profesionální pokládka travních koberců pro dokonalý zelený trávník'
    },
    {
      title: 'sázení',
      description: 'Odborné sázení stromů, keřů a okrasných rostlin podle vašich přání'
    },
    {
      title: 'závlaha',
      description: 'Návrh a instalace efektivních zavlažovacích systémů'
    },
    {
      title: 'realizace chodníčků',
      description: 'Vytváření estetických a funkčních zahradních chodníků'
    },
    {
      title: 'mlatové cesty',
      description: 'Budování přírodních mlatových cest a stezek'
    },
    {
      title: 'vyvýšené záhony',
      description: 'Konstrukce praktických vyvýšených záhonů pro snadnější pěstování'
    }
  ];

  return (
    <section id="sluzby" className="py-20 bg-background">
      <div className="container mx-auto section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-garden-forest mb-8 fade-in-up">
              Služby
            </h2>
            <div className="w-24 h-1 bg-garden-sage mx-auto mb-8"></div>
            <p className="text-xl text-garden-moss max-w-2xl mx-auto fade-in-up">
              Kompletní spektrum zahradnických služeb pro vytvoření vaší vysněné zahrady
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-garden-sage rounded-full mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-garden-forest rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-garden-forest mb-4 capitalize">
                  {service.title}
                </h3>
                <p className="text-garden-moss leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
