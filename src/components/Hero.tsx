import React from 'react';
import { Shield, ArrowRight, HeartPulse, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-[#002B87] to-[#0033A0] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Lighting & Waves */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,224,0.3),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>Plataforma Digital de Salud & Bienestar</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Tu salud, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white">
                nuestra prioridad
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-blue-100/90 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Información y soluciones orientadas al bienestar y la protección de las personas.
            </p>

            {/* Micro value badges */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-cyan-100">
              <div className="flex items-center gap-1.5 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Salud & Prevención</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Protección Integral</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-700/50">
                <HeartPulse className="w-4 h-4 text-cyan-400" />
                <span>Atención Cercana</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#servicios"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Conoce más</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2.5"
              >
                <PhoneCall className="w-4 h-4 text-cyan-300" />
                <span>Contáctanos</span>
              </a>
            </div>

            {/* Quick Contact Ribbon */}
            <div className="pt-4 text-xs text-blue-200/80 flex items-center justify-center lg:justify-start gap-2">
              <span>Razón Social:</span>
              <span className="font-bold text-white">{COMPANY_DATA.legalName}</span>
              <span>•</span>
              <span>NIT: {COMPANY_DATA.nit}</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic / Card Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-lg" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/60 shadow-2xl backdrop-blur-xl">
                
                {/* Official Hero Media Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                  <img
                    src="/assets/eps_sura_hero.jpg"
                    alt="EPS SURA Cuidamos tu salud y tu bienestar"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/40 text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Organización de Salud</span>
                  </div>
                </div>

                {/* Floating Micro-Cards below Image */}
                <div className="p-5 bg-gradient-to-b from-slate-900/95 to-blue-950/95 text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-800/50 pb-3">
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Atención Corporativa</p>
                      <p className="text-sm font-bold text-white">{COMPANY_DATA.publicName}</p>
                    </div>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-medium border border-cyan-400/30">
                      Medellín, CO
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800/60">
                      <span className="block text-slate-400 text-[10px] uppercase">Línea Directa</span>
                      <span className="font-bold text-cyan-300">{COMPANY_DATA.phone}</span>
                    </div>
                    <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800/60">
                      <span className="block text-slate-400 text-[10px] uppercase">Correo Electrónico</span>
                      <span className="font-bold text-cyan-300 truncate block">{COMPANY_DATA.email}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
