import React from 'react';
import { Building2, ShieldCheck, MapPin, FileCheck2, Globe, Heart, ChevronRight } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

interface InstitutionalSectionProps {
  onOpenVerificationModal?: () => void;
}

export const InstitutionalSection: React.FC<InstitutionalSectionProps> = ({ onOpenVerificationModal }) => {
  return (
    <section id="institucional" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0033A0] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#0033A0]" />
              <span>Identidad Institucional</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Organización orientada al cuidado integral y la protección
              </h2>
              <p className="text-xl font-bold text-[#0033A0]">
                {COMPANY_DATA.legalName}
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              En <strong className="text-slate-900 font-semibold">{COMPANY_DATA.publicName}</strong> nos enfocamos en promover la salud, el bienestar y la prevención activa en el sector salud. Nuestra gestión corporativa está comprometida con ofrecer orientación clara, soluciones oportunas y un acompañamiento profesional cimentado en la confianza y el respeto.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              A través de un enfoque centrado en las personas, impulsamos iniciativas y recomendaciones orientadas a la adopción de hábitos de vida saludables, la mitigación de riesgos de salud y el fortalecimiento de la tranquilidad de nuestros usuarios y sus familias.
            </p>

            {/* Corporate Focus Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/80 text-[#0033A0]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Enfoque Humano</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Atención guiada por la empatía, el bienestar y la cercanía.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-100/80 text-cyan-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cultura de Prevención</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Fomento proactivo de recomendaciones y hábitos protectores.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Official Corporate Registry Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-[#002B87] to-[#0033A0] rounded-3xl p-7 text-white shadow-xl relative overflow-hidden border border-blue-800/50">
              
              {/* Background watermark icon */}
              <Building2 className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-blue-700/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <FileCheck2 className="w-6 h-6 text-cyan-300" />
                    <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-200">
                      Datos de Registro Oficial
                    </span>
                  </div>
                  <span className="text-[10px] bg-cyan-400/20 text-cyan-200 px-2.5 py-1 rounded-full font-bold border border-cyan-400/30">
                    Vigente
                  </span>
                </div>

                {/* Company Specs List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  
                  <div>
                    <span className="text-blue-300 font-semibold block text-xs">Nombre Comercial</span>
                    <span className="text-lg font-extrabold text-white">{COMPANY_DATA.publicName}</span>
                  </div>

                  <div>
                    <span className="text-blue-300 font-semibold block text-xs">Razón Social Certificada</span>
                    <span className="font-bold text-cyan-100">{COMPANY_DATA.legalName}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="text-blue-300 font-semibold block text-xs">Número de NIT</span>
                      <span className="font-mono font-bold text-white text-base">{COMPANY_DATA.nit}</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold block text-xs">Matrícula Mercantil</span>
                      <span className="font-mono font-bold text-white text-base">{COMPANY_DATA.registrationNumber}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-700/60 space-y-2">
                    <div className="flex items-start gap-2 text-blue-100 text-xs">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{COMPANY_DATA.address}, {COMPANY_DATA.city}, {COMPANY_DATA.department}, {COMPANY_DATA.country}</span>
                    </div>

                    <div className="flex items-center gap-2 text-blue-100 text-xs">
                      <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <a href={COMPANY_DATA.domain} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline font-semibold hover:text-white">
                        {COMPANY_DATA.domainDisplay}
                      </a>
                    </div>
                  </div>

                </div>

                {/* Action button inside card */}
                {onOpenVerificationModal && (
                  <div className="pt-3">
                    <button
                      onClick={onOpenVerificationModal}
                      className="w-full py-3 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Ver Certificado de Existencia</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
