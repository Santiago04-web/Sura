import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Shield } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

interface HeaderProps {
  onOpenVerificationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVerificationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Información', href: '#institucional' },
    { name: 'Confianza', href: '#confianza' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Top Banner with Quick Info */}
      <div className="bg-[#002880] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-blue-100 flex-wrap justify-center sm:justify-start">
            <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              {COMPANY_DATA.legalName}
            </span>
            <span className="hidden md:inline text-blue-300">|</span>
            <span className="hidden md:inline">NIT: {COMPANY_DATA.nit}</span>
          </div>

          <div className="flex items-center gap-4 text-blue-100">
            <a 
              href={`tel:${COMPANY_DATA.phoneClean}`}
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
            <span className="text-blue-300">|</span>
            <a 
              href={`mailto:${COMPANY_DATA.email}`}
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">{COMPANY_DATA.email}</span>
              <span className="sm:hidden">Correo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
              <div className="relative overflow-hidden rounded-xl bg-slate-100 p-1 border border-slate-200 group-hover:border-cyan-400 transition-colors shadow-xs">
                <img 
                  src="/assets/eps_sura_logo.jpg" 
                  alt="EPS SURA Logo" 
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#0033A0] group-hover:text-cyan-600 transition-colors leading-none">
                  {COMPANY_DATA.publicName}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mt-0.5">
                  Salud y Bienestar
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0033A0] hover:bg-blue-50/60 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              {onOpenVerificationModal && (
                <button
                  onClick={onOpenVerificationModal}
                  className="text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                  title="Verificar registro mercantil oficial"
                >
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  Verificación Oficial
                </button>
              )}
              
              <a
                href="#contacto"
                className="bg-[#0033A0] hover:bg-blue-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Contáctanos</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0033A0] hover:bg-slate-100 rounded-lg focus:outline-none"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-[#0033A0] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
              {onOpenVerificationModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVerificationModal();
                  }}
                  className="w-full text-center text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4 text-blue-600" />
                  Verificar Razón Social & NIT
                </button>
              )}

              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#0033A0] hover:bg-blue-900 text-white font-semibold py-3 rounded-xl shadow-md text-center block"
              >
                Contáctanos Ahora
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
