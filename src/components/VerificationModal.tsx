import React from 'react';
import { X, ShieldCheck, CheckCircle2, Building } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 flex-shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Verificación de Existencia Legal</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Certificado de Existencia y Representación
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {COMPANY_DATA.chamberOfCommerce}
            </p>
          </div>
        </div>

        {/* Body content matching exact OCR & PDF certified data */}
        <div className="space-y-4 text-xs sm:text-sm">
          
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 grid sm:grid-cols-2 gap-4">
            <div>
              <span className="text-slate-500 text-xs font-medium block">Razón Social Certificada</span>
              <span className="font-extrabold text-slate-900 text-base">{COMPANY_DATA.legalName}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs font-medium block">Nombre Comercial / Sigla</span>
              <span className="font-extrabold text-[#0033A0] text-base">{COMPANY_DATA.publicName}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
              <span className="text-slate-500 text-[11px] block font-medium">Número de NIT</span>
              <span className="font-mono font-bold text-blue-950 text-sm">{COMPANY_DATA.nit}</span>
            </div>

            <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
              <span className="text-slate-500 text-[11px] block font-medium">Matrícula Mercantil</span>
              <span className="font-mono font-bold text-blue-950 text-sm">{COMPANY_DATA.registrationNumber}</span>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
              <span className="text-slate-500 text-[11px] block font-medium">Grupo NIIF</span>
              <span className="font-bold text-blue-950 text-sm">Grupo I. NIIF Plenas</span>
            </div>
          </div>

          {/* Location details */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-3 bg-white">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#0033A0]" />
              <span>Domicilio y Datos de Ubicación</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Dirección Principal:</span>
                <span className="font-semibold text-slate-900 text-right">{COMPANY_DATA.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Municipio:</span>
                <span className="font-semibold text-slate-900">{COMPANY_DATA.city}, {COMPANY_DATA.department}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Correo Electrónico:</span>
                <span className="font-bold text-cyan-700">{COMPANY_DATA.email}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Teléfono Comercial:</span>
                <span className="font-bold text-slate-900">{COMPANY_DATA.phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Página Web Dominio:</span>
                <span className="font-bold text-cyan-700">{COMPANY_DATA.domainDisplay}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <span className="text-[11px] text-slate-500">
            Documento de consulta pública oficial de registro mercantil.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0033A0] hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
