import React, { useState } from 'react';
import { HeartPulse, Sparkles, ShieldCheck, Headphones, ArrowRight, Check, X, Shield } from 'lucide-react';
import { SERVICES_DATA, ServiceCategory } from '../constants/companyData';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 text-[#0033A0]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0033A0]" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-cyan-600" />;
      default:
        return <Shield className="w-7 h-7 text-[#0033A0]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0033A0] text-xs font-bold uppercase tracking-wider">
            <span>Áreas de Atención e Información</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soluciones orientadas al <span className="text-[#0033A0]">bienestar y la salud</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ofrecemos orientación estructurada e información integral para acompañarte en la toma de decisiones informadas sobre tu salud y calidad de vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon badge */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#0033A0] group-hover:text-white transition-all duration-300 flex items-center justify-center border border-blue-100 shadow-xs">
                  <div className="group-hover:text-white group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0033A0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Quick Feature Checklist */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-6">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full text-left text-xs font-bold text-[#0033A0] hover:text-cyan-600 flex items-center justify-between group-hover:underline pt-2 border-t border-slate-100"
                >
                  <span>Ver detalles de esta área</span>
                  <ArrowRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Área Institucional</span>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Aspectos Clave:</h4>
              <div className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    <Check className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="bg-[#0033A0] hover:bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
