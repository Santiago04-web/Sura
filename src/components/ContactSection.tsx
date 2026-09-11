import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Consulta de Información General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0033A0] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Canales de Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Estamos para <span className="text-[#0033A0]">orientarte y escucharte</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Comunícate directamente con nuestros canales corporativos o déjanos un mensaje.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Card & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
              
              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="border-b border-slate-800 pb-5">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-400">Sede Principal</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">{COMPANY_DATA.publicName}</h3>
                  <p className="text-xs text-slate-400 font-semibold">{COMPANY_DATA.legalName}</p>
                </div>

                {/* Info List */}
                <div className="space-y-4 text-sm">
                  
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-900/50 text-cyan-400 border border-blue-800/60 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Dirección Física</span>
                      <p className="font-semibold text-slate-100 leading-snug">
                        {COMPANY_DATA.address}
                      </p>
                      <p className="text-xs text-cyan-300 font-medium mt-0.5">
                        {COMPANY_DATA.city}, {COMPANY_DATA.department}, {COMPANY_DATA.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-900/50 text-cyan-400 border border-blue-800/60">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Teléfono Comercial</span>
                      <a 
                        href={`tel:${COMPANY_DATA.phoneClean}`}
                        className="font-bold text-white text-base hover:text-cyan-300 transition-colors"
                      >
                        {COMPANY_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-900/50 text-cyan-400 border border-blue-800/60">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Correo Electrónico</span>
                      <a 
                        href={`mailto:${COMPANY_DATA.email}`}
                        className="font-bold text-cyan-300 text-sm hover:underline"
                      >
                        {COMPANY_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-900/50 text-cyan-400 border border-blue-800/60">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Sitio Web Oficial</span>
                      <a 
                        href={COMPANY_DATA.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white text-sm hover:text-cyan-300 underline"
                      >
                        {COMPANY_DATA.domainDisplay}
                      </a>
                    </div>
                  </div>

                </div>

                {/* Three Action Buttons strictly specified in prompt */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2">
                  <a
                    href="#formulario-contacto"
                    className="py-3 px-2 rounded-xl bg-blue-800/60 hover:bg-blue-700 text-white text-xs font-bold text-center border border-blue-700/60 transition-colors block"
                  >
                    Contactar
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.phoneClean}`}
                    className="py-3 px-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold text-center transition-colors block shadow-sm"
                  >
                    Llamar
                  </a>
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="py-3 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold text-center border border-slate-700 transition-colors block"
                  >
                    Enviar correo
                  </a>
                </div>

              </div>

            </div>

            {/* Business Hours Note */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-xs text-slate-700">
              <Clock className="w-5 h-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#0033A0]">Atención Directa:</span>
                <p className="mt-0.5 text-slate-600">
                  Respuesta a mensajes y solicitudes dentro de días hábiles corporativos.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7" id="formulario-contacto">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm">
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Envíanos una Mensaje</h3>
              <p className="text-xs text-slate-600 mb-6">
                Completa tus datos para recibir orientación o resolver tus inquietudes sobre nuestros servicios.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Gracias por comunicarse con <strong className="font-bold">{COMPANY_DATA.publicName}</strong>. Hemos recibido su consulta y nos pondremos en contacto al correo <span className="font-semibold text-emerald-900">{formData.email}</span> lo antes posible.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'Consulta de Información General', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. María Rodríguez"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0033A0] focus:ring-2 focus:ring-blue-200 text-sm bg-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0033A0] focus:ring-2 focus:ring-blue-200 text-sm bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Teléfono de Contacto
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+57 300 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0033A0] focus:ring-2 focus:ring-blue-200 text-sm bg-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Asunto de Consulta
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0033A0] focus:ring-2 focus:ring-blue-200 text-sm bg-white outline-none transition-all"
                      >
                        <option value="Consulta de Información General">Información General</option>
                        <option value="Orientación sobre Bienestar">Orientación sobre Bienestar</option>
                        <option value="Atención Corporativa">Atención Corporativa</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mensaje / Consulta *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe tu consulta aquí..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0033A0] focus:ring-2 focus:ring-blue-200 text-sm bg-white outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#0033A0] hover:bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Al enviar este formulario aceptas el tratamiento de datos personales para la atención de tu solicitud.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
