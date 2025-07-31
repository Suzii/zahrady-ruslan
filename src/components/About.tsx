
import React from 'react';

const About = () => {
  return (
    <section id="uvod" className="py-20 gradient-about relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8 fade-in-up">
            O mně
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="relative group">
                <div 
                  className="w-full h-80 bg-cover bg-center rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                  }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <div className="text-left space-y-6 fade-in-up">
              <div className="card-gradient rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-gradient mb-6">
                  Ruslan
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Jsem tvrdě pracující zahradník specializující se na kompletní realizace zahrad a jejich údržbu. 
                  S vášní pro detail a láskou k přírodě vytvářím krásné venkovní prostory, které přinášejí radost a klid.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Každý projekt pro mě představuje příležitost vytvořit něco jedinečného – místo, kde se příroda setkává 
                  s promyšleným designem a kde můžete najít svůj osobní kousek ráje.
                </p>
                
                {/* Service area badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-700 rounded-full mr-2"></div>
                  <span className="text-green-800 font-semibold text-sm">
                    Obsluhuji oblasti do 30 km od Brna
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
