
import * as React from 'react';
import { Sprout, TreePine, Droplets, Route, Leaf, Flower2, Square, Layers, Layers2, Grid, Boxes, LucideBoxes, Mountain } from 'lucide-react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const Services = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  
  const services: Service[] = React.useMemo(() => [
    {
      title: 'Pokládka trávníku',
      description: 'Profesionální pokládka travních koberců pro dokonalý zelený trávník',
      icon: Sprout,
      gradient: 'from-green-700 to-emerald-700'
    },
    {
      title: 'Závlaha',
      description: 'Návrh a instalace zavlažovacích systémů pro trávníky i záhony',
      icon: Droplets,
      gradient: 'from-teal-700 to-cyan-700'
    },
    {
      title: 'Výsadba',
      description: 'Odborné sázení stromů, keřů a okrasných rostlin podle vašich přání',
      icon: TreePine,
      gradient: 'from-emerald-700 to-teal-700'
    },
    {
      title: 'Chodníčky',
      description: 'Vytváření zahradních stezek a nášlapů, sterku nebo mlatových cest',
      icon: Route,
      gradient: 'from-slate-600 to-gray-600'
    },
    {
      title: 'Suché zídky a skalky',
      description: 'Budování skalek a zídek z prírodního kamene nebo betonových bloků',
      icon: Boxes,
      gradient: 'from-gray-700 to-cyan-700'
    },
    {
      title: 'Vyvýšené záhony',
      description: 'Konstrukce vyvýšených záhonů na míru pro snadnější pěstování',
      icon: Flower2,
      gradient: 'from-emerald-600 to-teal-600'
    }
  ], []);

  return (
    <section id="sluzby" className="py-20 gradient-services relative overflow-hidden" aria-labelledby="services-heading" itemScope itemType="https://schema.org/Service">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" ref={headerRef}>
            <h2 
              id="services-heading"
              className={`text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8 fade-in-up ${headerVisible ? 'animate' : ''}`}
            >
              Služby
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto mb-8 rounded-full slide-up ${headerVisible ? 'animate' : ''}`} aria-hidden="true"></div>
            <p className={`text-xl text-gray-700 max-w-2xl mx-auto fade-in-up ${headerVisible ? 'animate' : ''}`}>
              Kompletní spektrum zahradnických služeb pro vytvoření a udržbu vaší vysněné zahrady
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${servicesVisible ? 'animate' : ''}`} ref={servicesRef}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                 <article 
                  key={index}
                  className={`group relative stagger-item ${servicesVisible ? 'animate' : ''}`}
                  itemScope 
                  itemType="https://schema.org/Service"
                >
                  {/* Card with gradient border */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                    
                    {/* Icon with subtle gradient background */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="relative text-xl font-playfair font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors" itemProp="name">
                      {service.title}
                    </h3>
                    <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors" itemProp="description">
                      {service.description}
                    </p>
                    
                    {/* Subtle border gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
