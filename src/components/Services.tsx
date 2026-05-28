/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, HardHat, Paintbrush, Grid, ArrowRight, Check, X, Phone } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

// Map icons dynamically
const iconMap: Record<string, any> = {
  Hammer: Layers, // Pavimentos
  TrendingUp: HardHat, // Terracerías
  Compass: Paintbrush, // Acabados
  Grid: Grid, // Tablaroca
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleScrollToContact = () => {
    setSelectedService(null);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center space-x-2 text-corporate-orange font-mono text-xs uppercase font-bold tracking-widest">
              <span>● Especialidades</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-corporate-dark">
              Nuestros Servicios Profesionales de Construcción
            </h2>
            <div className="w-20 h-1 bg-corporate-blue rounded"></div>
          </div>
          <div className="max-w-md">
            <p className="text-slate-500 text-sm">
              Cada uno de nuestros servicios está respaldado por personal de supervisión especializado, laboratorios de control de calidad externos y mano de obra experta en el ramo constructivo.
            </p>
          </div>
        </div>

        {/* Services Grid (Pavimentos, Terracerías, Acabados, Tablaroca) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Layers;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
              >
                {/* Decorative border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-corporate-orange transition-colors"></div>

                <div>
                  {/* Icon Panel */}
                  <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-corporate-blue shadow-inner group-hover:bg-corporate-blue group-hover:text-white transition-all duration-300 mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-corporate-dark group-hover:text-corporate-blue transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-mono tracking-wide uppercase mb-4 text-[10px] font-bold text-corporate-orange">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-corporate-blue hover:text-corporate-orange transition-colors flex items-center space-x-1.5 group/btn"
                  >
                    <span>Ver detalles técnicos</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Multi-service Quality Note Card */}
        <div className="mt-12 p-6 md:p-8 rounded-lg bg-corporate-dark text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-slate-800 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded overflow-hidden flex items-center justify-center shrink-0">
              <HardHat className="w-6 h-6 text-corporate-orange" />
            </div>
            <div>
              <p className="font-display font-medium text-sm md:text-base tracking-wide">
                ¿Planeas una remodelación integral o construcción mayor en tu inmueble?
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Ofrecemos presupuestos formalizados con análisis detallado de precios unitarios.
              </p>
            </div>
          </div>
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3 bg-corporate-orange hover:bg-corporate-orange/90 text-white rounded font-mono font-bold uppercase text-xs tracking-wider transition-colors shrink-0"
          >
            Preguntar por Cotización
          </button>
        </div>

      </div>

      {/* Expandable Slide-Drawer / Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-lg w-full max-w-4xl shadow-2xl overflow-hidden relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-corporate-dark transition-colors z-20"
                aria-label="Cerrar detalles"
              >
                <X size={18} />
              </button>

              {/* Left Column: Visuals */}
              <div className="md:col-span-5 relative h-48 md:h-auto bg-slate-100">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover grayscale brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-corporate-orange font-bold">
                    Especialistas CRM
                  </span>
                  <h4 className="text-xl font-display font-bold mt-1">
                    {selectedService.title}
                  </h4>
                </div>
              </div>

              {/* Right Column: Detailed parameters */}
              <div className="md:col-span-7 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-medium text-corporate-dark">
                      Ficha de Servicio Técnico
                    </h3>
                    <p className="text-xs font-mono text-corporate-orange uppercase mt-1 tracking-wider">
                      {selectedService.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400">
                      Nuestras ventajas constructivas:
                    </p>
                    <ul className="space-y-2.5">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-700 text-xs">
                          <Check className="w-4 h-4 text-corporate-orange shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between mt-8">
                  <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs">
                    <span>Mano de obra 100% mexicana</span>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 rounded border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors text-xs font-semibold uppercase tracking-wider w-full sm:w-auto"
                    >
                      Cerrar
                    </button>
                    <button
                      onClick={handleScrollToContact}
                      className="px-5 py-2.5 bg-corporate-blue hover:bg-corporate-blue/90 text-white rounded text-xs font-semibold uppercase tracking-wider w-full sm:w-auto transition-colors align-middle"
                    >
                      Cotizar Especialidad
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
