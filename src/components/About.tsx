
import React from 'react';

const About = () => {
  return (
    <section id="uvod" className="py-20 bg-garden-cream">
      <div className="container mx-auto section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-garden-forest mb-8 fade-in-up">
            O mně
          </h2>
          <div className="w-24 h-1 bg-garden-sage mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div 
                className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              />
            </div>
            
            <div className="text-left space-y-6 fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold text-garden-forest">
                Ruslan
              </h3>
              <p className="text-lg text-garden-moss leading-relaxed">
                Jsem tvrdě pracující zahradník specializující se na kompletní realizace zahrad a jejich údržbu. 
                S vášní pro detail a láskou k přírodě vytvářím krásné venkovní prostory, které přinášejí radost a klid.
              </p>
              <p className="text-lg text-garden-moss leading-relaxed">
                Každý projekt pro mě představuje příležitost vytvořit něco jedinečného – místo, kde se příroda setkává 
                s promyšleným designem a kde můžete najít svůj osobní kousek ráje.
              </p>
              <div className="pt-4">
                <p className="text-garden-forest font-semibold">
                  Obsluhuji oblasti do 30 km od Brna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
