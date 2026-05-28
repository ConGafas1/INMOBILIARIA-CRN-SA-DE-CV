/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Phone, Award, ShieldAlert, CheckCircle, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen pt-12 md:pt-0 bg-slate-50 flex items-center relative overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[90vh] md:min-h-screen items-stretch relative">
        
        {/* Left Side: Layout spacing and Typography (Direct tribute to the requested architectural skeleton) */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 bg-white relative z-10 border-r border-slate-100">
          
          {/* Decorative left-edge social vertical deck */}
          <div className="absolute left-0 bottom-16 hidden lg:flex flex-col items-center space-y-6 text-slate-400 pl-4">
            <span className="text-[10px] tracking-widest uppercase origin-bottom -rotate-90 translate-y-[-10px] font-mono whitespace-nowrap">
              EST. {COMPANY_INFO.foundedYear} — MÉXICO
            </span>
            <div className="w-px h-16 bg-slate-200"></div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-corporate-orange font-mono">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-corporate-orange font-mono">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-corporate-orange font-mono">LN</a>
          </div>

          <div className="pl-0 lg:pl-8 space-y-8">
            {/* Tag/Header Orange bar */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[3px] bg-corporate-orange block rounded"></span>
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
                Inmobiliaria CRM S.A. de C.V.
              </span>
            </div>

            {/* Giant Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight text-corporate-dark leading-[1.1]">
                Proyectos <br />
                <span className="text-corporate-blue">que inspiran</span>
              </h1>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                DISEÑO ARQUITECTÓNICO & OBRA EN GENERAL
              </p>
            </div>

            {/* Paragraph description body */}
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              Damos vida a sus proyectos mediante servicios altamente profesionales en el área de construcción, obra civil, pavimentos, terracerías, acabados y tablaroca.
            </p>

            {/* Cotizar call-to-actions row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={(e) => handleScrollToContact(e, '#contacto')}
                className="px-6 py-3.5 bg-corporate-orange hover:bg-corporate-orange/90 text-white rounded font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-corporate-orange/20 flex items-center justify-center space-x-2 group shrink-0"
              >
                <span>Cotizar ahora</span>
                <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              
              <a
                href="#quienes-somos"
                onClick={(e) => handleScrollToContact(e, '#quienes-somos')}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-corporate-dark rounded font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Nuestra Historia</span>
              </a>
            </div>

            {/* Inset grayscale layout box with glowing yellow play overlay (Replicating exact bottom left tile from layout design) */}
            <div className="pt-8 border-t border-slate-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-16 rounded overflow-hidden shadow bg-slate-300 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=200&auto=format&fit=crop"
                    alt="Plafones Tablaroca"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-corporate-yellow/20 flex items-center justify-center">
                    <span className="w-6 h-6 rounded-full bg-corporate-yellow flex items-center justify-center shadow animate-pulse">
                      <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-corporate-dark translate-x-[1px]"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-corporate-dark font-display">Obra Civil y Acabados</p>
                  <p className="text-[11px] text-slate-500">Mano de obra certificada desde 1996</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Huge visual banner with overlay and border highlights (Respecting visual mockup structure) */}
        <div className="col-span-1 md:col-span-7 relative min-h-[45vh] md:min-h-0 bg-slate-900 group overflow-hidden flex items-end">
          
          {/* Main big background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600"
              alt="Obras Inmobiliaria CRM"
              className="w-full h-full object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Elegant deep blue overlay for professional and aesthetic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-dark/30 to-transparent mix-blend-multiply opacity-80"></div>
            {/* Elegant warm orange overlay border lines mimicking grid alignment */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none rounded"></div>
            <div className="absolute top-8 right-8 border-r-2 border-t-2 border-corporate-orange w-12 h-12 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 border-l-2 border-b-2 border-corporate-orange w-12 h-12 pointer-events-none"></div>
          </div>

          {/* Floating features card right on the bottom */}
          <div className="relative p-6 md:p-12 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 z-10 bg-gradient-to-t from-slate-950 to-transparent">
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center space-x-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded border border-white/10 text-xs">
                <CheckCircle className="w-4 h-4 text-corporate-orange shrink-0" />
                <span className="font-medium tracking-wide">100% Profesionalismo</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded border border-white/10 text-xs">
                <Award className="w-4 h-4 text-corporate-amber shrink-0" />
                <span className="font-medium tracking-wide">+25 Años de Experiencia</span>
              </div>
            </div>

            {/* Explorar bottom label widget (Tribute to the bottom right exploratory button from the layout) */}
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-4 bg-white hover:bg-corporate-yellow text-corporate-dark font-display font-bold uppercase text-xs tracking-widest flex items-center space-x-3 transition-colors duration-300 rounded shrink-0 shadow-lg"
            >
              <span>Explorar Servicios</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>

          </div>

          {/* Vertical badge */}
          <div className="absolute right-6 top-1/3 hidden lg:flex flex-col space-y-2 select-none pointer-events-none">
            <span className="text-6xl font-display font-extrabold text-white/5 tracking-wider leading-none select-none">
              CRM
            </span>
            <span className="text-xs uppercase tracking-widest text-corporate-orange/50 text-right transform rotate-90 translate-x-4">
              CONSTRUCTORA
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
