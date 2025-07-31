
import React from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="uvod" className="py-16 gradient-about relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/15 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" ref={titleRef}>
            <h2 
              id="about-heading"
              className={`text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6 fade-in-up ${titleVisible ? 'animate' : ''}`}
            >
              O mně
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto rounded-full slide-up ${titleVisible ? 'animate' : ''}`} aria-hidden="true"></div>
          </div>
          
          <div className={`fade-in-up ${contentVisible ? 'animate' : ''}`} ref={contentRef}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Jmenuji se Ruslan a jsem zkušený zahradník s vášní pro vytváření krásných a funkčních zahrad. 
                Specializuji se na kompletní realizace zahradních projektů od základních úprav až po složité designové prvky, 
                stejně jako na pravidelnou údržbu zahrad včetně stříhání stromů, keřů a péče o trávník.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Mezi mé služby patří pokládka trávníků, instalace závlahových systémů, výsadba květin, stromů a keřů, 
                budování chodníčků, suchých zídek, skalky, záhonů i konstrukce vyvýšených záhonů na míru.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Vždy naslouchám přáním zákazníka a poskytuji odborné rady. Společně transformujeme vaše představy 
                v krásné zahrady, které přinášejí radost a klid.
              </p>
            </div>
            
            {/* Service area badge */}
            <div className="mt-10 flex justify-center">
              <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-lg scale-in ${contentVisible ? 'animate' : ''}`}>
                <div className="w-3 h-3 bg-white rounded-full mr-3" aria-hidden="true"></div>
                <span className="text-white font-semibold">
                  Obsluhuji oblasti do 30 km od Brna
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
