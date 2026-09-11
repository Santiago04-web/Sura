import React from 'react';
import { Heart, Sun, Shield, Lock, Award, Activity, Users, CheckCircle } from 'lucide-react';
import { TRUST_VALUES } from '../constants/companyData';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-8 h-8 text-[#0033A0]" />;
      case 'Sun':
        return <Sun className="w-8 h-8 text-cyan-600" />;
      case 'Shield':
        return <Shield className="w-8 h-8 text-[#0033A0]" />;
      case 'Lock':
        return <Lock className="w-8 h-8 text-cyan-600" />;
      default:
        return <Award className="w-8 h-8 text-[#0033A0]" />;
    }
  };

  return (
    <section id="confianza" className="py-20 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-700" />
            <span>Valores Institucionales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilares fundamental de <span className="text-[#0033A0]">confianza y protección</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Nuestro compromiso se basa en principios esenciales guiados hacia la excelencia corporativa y la máxima serenidad para las personas.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0033A0] to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center border border-slate-100 transition-colors">
                  {getIcon(val.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0033A0] transition-colors">
                  {val.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0033A0] via-blue-900 to-[#002B87] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Compromiso Corporativo Continuo</h3>
            <p className="text-blue-100 text-sm max-w-2xl">
              Trabajamos diariamente por mantener altos estándares de transparencia y cercanía con nuestros usuarios.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
              <Activity className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
              <span className="text-xs text-blue-200 font-semibold uppercase">Calidad</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
              <Users className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
              <span className="text-xs text-blue-200 font-semibold uppercase">Cercanía</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
