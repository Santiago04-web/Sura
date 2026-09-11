import React from 'react';
import { Shield, Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

interface FooterProps {
  onOpenVerificationModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerificationModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001D60] text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-xs">
                <img 
                  src="/assets/eps_sura_logo.jpg" 
                  alt="EPS SURA Logo" 
                  className="h-9 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight leading-none block">
                  {COMPANY_DATA.publicName}
                </span>
                <span className="text-[10px] text-cyan-300 font-semibold tracking-wider uppercase">
                  {COMPANY_DATA.legalName}
                </span>
              </div>
            </div>

            <p className="text-xs text-blue-200/80 leading-relaxed max-w-sm">
              Organización del sector salud orientada a brindar información, bienestar, prevención y protección para las personas y familias en Colombia.
            </p>

            <div className="pt-2 text-xs font-mono text-cyan-300 space-y-1">
              <p>Razón Social: <span className="font-bold text-white">{COMPANY_DATA.legalName}</span></p>
              <p>NIT: <span className="font-bold text-white">{COMPANY_DATA.nit}</span></p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Navegación Interna
            </h4>
            <ul className="space-y-2 text-xs font-medium text-blue-100">
              <li>
                <a href="#inicio" className="hover:text-cyan-300 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-300 transition-colors">Servicios & Áreas de Atención</a>
              </li>
              <li>
                <a href="#institucional" className="hover:text-cyan-300 transition-colors">Información Institucional</a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-cyan-300 transition-colors">Pilares de Confianza</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-300 transition-colors">Contacto & Ubicación</a>
              </li>
              {onOpenVerificationModal && (
                <li>
                  <button onClick={onOpenVerificationModal} className="text-cyan-400 hover:underline flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Verificación de Registro Mercantil</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Datos Oficiales de Contacto
            </h4>

            <div className="space-y-2.5 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address}, {COMPANY_DATA.city}, {COMPANY_DATA.department}, {COMPANY_DATA.country}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_DATA.phoneClean}`} className="hover:text-cyan-300 font-bold">
                  {COMPANY_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-cyan-300 font-semibold">
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={COMPANY_DATA.domain} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 font-semibold underline">
                  {COMPANY_DATA.domainDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
          <div>
            <p>© {new Date().getFullYear()} {COMPANY_DATA.publicName} - {COMPANY_DATA.legalName}. Todos los derechos reservados.</p>
            <p className="text-[10px] text-blue-300/60 mt-0.5">
              NIT {COMPANY_DATA.nit} • {COMPANY_DATA.fullAddress}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-blue-900/80 hover:bg-cyan-500 hover:text-slate-950 rounded-xl transition-all border border-blue-800 flex items-center gap-1.5 text-xs font-semibold"
              title="Volver al inicio"
            >
              <span>Ir arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
