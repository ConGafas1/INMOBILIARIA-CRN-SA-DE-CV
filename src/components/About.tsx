/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Award, Compass, Heart, Users } from 'lucide-react';
import { ABOUT_US_TEXT, COMPANY_INFO } from '../data';

export default function About() {
  const stats = [
    { value: '1996', label: 'Fundada por Ing. Mauricio Ramírez', icon: Calendar },
    { value: '1999', label: 'Constitución como S.A. de C.V.', icon: Award },
    { value: '100%', label: 'Compromiso Ético y Profesional', icon: Heart },
    { value: 'Cd. de México', label: 'Zona de operaciones central', icon: Compass }
  ];

  return (
    <section id="quienes-somos" className="py-20 md:py-28 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <div className="flex items-center space-x-2 text-corporate-orange font-mono text-xs uppercase font-bold tracking-widest">
            <span>● Quiénes Somos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-corporate-dark">
            Una trayectoria de seriedad, honestidad y responsabilidad en la construcción
          </h2>
          <div className="w-20 h-1 bg-corporate-blue rounded"></div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Overlay & Floating metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded overflow-hidden aspect-[4/5] shadow-2xl bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
                alt="Instalaciones Inmobiliaria CRM"
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/80 via-transparent to-transparent"></div>
            </div>

            {/* Float Badge 1 */}
            <div className="absolute -top-6 -right-6 bg-corporate-orange text-white p-5 rounded shadow-xl flex items-center space-x-4 max-w-xs z-10 border border-corporate-orange/20">
              <span className="text-3xl md:text-4xl font-display font-black tracking-tight leading-none text-corporate-yellow font-sans">
                +25
              </span>
              <div className="text-[11px] font-bold uppercase tracking-wider font-mono leading-tight">
                Años construyendo <br />con éxito
              </div>
            </div>

            {/* Float Badge 2 */}
            <div className="absolute -bottom-6 -left-6 bg-corporate-dark text-white p-5 rounded shadow-xl flex items-center space-x-3 max-w-xs z-10 border border-slate-800">
              <div className="w-10 h-10 rounded-full bg-corporate-orange/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-corporate-orange" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider font-mono leading-snug">
                Socio estratégico de <br />empresas líderes
              </div>
            </div>
          </div>

          {/* Right Column: Detailed copy from website */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="font-medium text-corporate-dark text-lg md:text-xl border-l-4 border-corporate-orange pl-4">
                Inmobiliaria CRM S.A. de C.V. se enorgullece de formar parte del conjunto de empresas sólidas, éticas y profesionales que edifican el México moderno.
              </p>
              
              <p>
                {ABOUT_US_TEXT.paragraph1}
              </p>

              <p>
                {ABOUT_US_TEXT.paragraph2}
              </p>

              <p className="text-slate-500 text-xs italic bg-slate-50 p-4 border rounded font-mono">
                "Seguros de que si ustedes aceptan que esta empresa sea su opción para el desarrollo de sus proyectos, les aseguramos que sabremos cumplir de manera altamente profesional y ética con la confianza que nos ordenen."
              </p>

              <p>
                {ABOUT_US_TEXT.paragraph3}
              </p>
            </div>

            {/* Grid of stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div key={i} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="p-2 rounded bg-white text-corporate-orange shadow-sm shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-display font-bold text-corporate-dark tracking-tight">{stat.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
