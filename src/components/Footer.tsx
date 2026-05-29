/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_INFO } from '../data';
import { Phone, Mail, MapPin, Building2, ExternalLink } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-corporate-dark text-slate-300 font-sans border-t border-slate-800">
      
      {/* Top Footer Desk */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Brand Description Column */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <a href="#inicio" onClick={handleScrollToTop} className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-corporate-blue flex items-center justify-center rounded border border-corporate-orange/30">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base leading-none">
                INMOBILIARIA <span className="text-corporate-orange">CRM</span>
              </span>
              <span className="font-mono text-[8px] text-slate-400 tracking-wider mt-0.5">
                S.A. DE C.V.
              </span>
            </div>
          </a>

          <p className="text-xs text-slate-400 leading-relaxed pt-2">
            Desde 1996 sumando profesionalismo, ética y eficiencia en el ramo de la construcción civil, pavimentos masivos, terracerías, acabados finos e instalaciones metálicas de tablaroca en México.
          </p>
          
          <div className="pt-2 flex space-x-3 text-slate-500 text-[10px] font-mono">
            <span>RFC: ICR991122XXX</span>
            <span>•</span>
            <span>Est. 1996</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-white border-l-2 border-corporate-orange pl-2.5">
            Menú de Enlaces
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <a href="#inicio" className="hover:text-corporate-orange transition-colors duration-200">Inicio (Hero principal)</a>
            </li>
            <li>
              <a href="#quienes-somos" className="hover:text-corporate-orange transition-colors duration-200">Quiénes Somos - Historia</a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-corporate-orange transition-colors duration-200">Especialidades Técnicas</a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-corporate-orange transition-colors duration-200">Galería de Proyectos</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-corporate-orange transition-colors duration-200">Solicitar Cotización</a>
            </li>
          </ul>
        </div>

        {/* Duplicated Contact Columns (Meeting item (5) of structural constraints) */}
        <div className="col-span-1 md:col-span-5 space-y-4">
          <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-white border-l-2 border-corporate-orange pl-2.5">
            Canales de Contacto Directo
          </h4>
          
          <div className="space-y-3.5 text-xs text-slate-400">
            {/* Phone */}
            <div className="flex items-start space-x-2.5">
              <Phone size={14} className="text-corporate-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-300">Oficina Administrativa:</p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-corporate-orange text-slate-300 font-semibold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-2.5">
              <Mail size={14} className="text-corporate-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-300">Correos Electrónicos:</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-corporate-orange text-slate-300 block transition-colors mt-0.5">
                  {COMPANY_INFO.email}
                </a>
                <a href={`mailto:${COMPANY_INFO.altEmail}`} className="hover:text-corporate-orange text-slate-300 block transition-colors">
                  {COMPANY_INFO.altEmail}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-2.5">
              <MapPin size={14} className="text-corporate-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-300 flex items-center">
                  <span>Oficinas Centrales:</span>
                </p>
                <p className="text-[11px] leading-relaxed text-slate-400 mt-0.5">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Deep Copyright Bottom Bar (Fulfills requested string format) */}
      <div className="bg-slate-950 text-slate-400 text-xs py-6 border-t border-slate-900 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-medium tracking-wide">
              © 2026 Website by <a href="http://inkmark.mx" target="_blank" rel="noopener noreferrer" className="text-corporate-orange hover:underline font-bold inline-flex items-center space-x-0.5">
                <span>inkmark.mx</span>
                <ExternalLink size={10} className="inline" />
              </a>
            </p>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
              Inmobiliaria CRM S.A. de C.V. • Todos los derechos reservados.
            </p>
          </div>
          <div>
            <a 
              href="#inicio" 
              onClick={handleScrollToTop}
              className="text-[11px] font-mono tracking-widest uppercase text-slate-500 hover:text-corporate-orange transition-colors"
            >
              ▲ Regresar al inicio
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
