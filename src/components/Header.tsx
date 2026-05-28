/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for office contacts */}
      <div className="bg-corporate-dark text-slate-300 text-xs py-2 px-6 border-b border-slate-800 hidden md:flex justify-between items-center z-50 relative font-sans">
        <div className="flex items-center space-x-6">
          <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-1.5 hover:text-corporate-orange transition-colors duration-200">
            <Phone size={13} className="text-corporate-orange" />
            <span>Tel: {COMPANY_INFO.phone}</span>
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-1.5 hover:text-corporate-orange transition-colors duration-200">
            <Mail size={13} className="text-corporate-orange" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>
        <div className="text-[11px] text-slate-400 font-mono tracking-wider">
          CONSTRUCCIÓN & REMODELACIÓN PROFESIONAL
        </div>
      </div>

      {/* Main navigation header */}
      <header
        id="main-nav-header"
        className={`fixed left-0 w-full transition-all duration-300 z-40 ${
          isScrolled 
            ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' 
            : 'top-0 md:top-8 py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand/Logo Area */}
          <a 
            href="#inicio" 
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center space-x-2 group"
          >
            {/* Styled wheelbarrow-like emblem to replicate original branding / logo */}
            <div className="relative w-10 h-10 bg-corporate-blue flex items-center justify-center rounded border border-corporate-orange/40 overflow-hidden shadow-inner shrink-0">
              <Building2 className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute right-0 bottom-0 w-3 h-3 bg-corporate-orange rotate-45 transform translate-x-1.5 translate-y-1.5"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold tracking-tight text-lg leading-tight transition-colors duration-300 ${isScrolled ? 'text-corporate-dark' : 'text-corporate-dark md:text-white'}`}>
                INMOBILIARIA <span className="text-corporate-orange">CRM</span>
              </span>
              <span className={`font-mono text-[9px] tracking-widest leading-none ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                S.A. DE C.V.
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 font-sans">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1.5 hover:text-corporate-orange group ${
                  isScrolled 
                    ? 'text-slate-700' 
                    : 'text-slate-100 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.5)]'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-corporate-orange text-white rounded hover:bg-corporate-orange/90 transition-all duration-200 shadow-md shadow-corporate-orange/20"
            >
              Cotizar
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-md md:hidden transition-colors ${
              isScrolled 
                ? 'text-corporate-dark hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-corporate-dark/95 backdrop-blur-lg z-50 flex flex-col md:hidden"
          >
            {/* Header within overlay for dismissal */}
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-corporate-blue flex items-center justify-center rounded">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-white text-base">
                    INMOBILIARIA <span className="text-corporate-orange">CRM</span>
                  </span>
                  <span className="font-mono text-[8px] text-slate-400 tracking-wider">
                    S.A. DE C.V.
                  </span>
                </div>
              </div>
              <button
                id="close-mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links block */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 space-y-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="text-xl font-display font-medium text-white hover:text-corporate-orange transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={(e) => handleLinkClick(e, '#contacto')}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs text-center py-3 bg-corporate-orange hover:bg-corporate-orange/90 text-white rounded font-semibold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-corporate-orange/20"
              >
                Cotizar Proyecto
              </motion.a>
            </div>

            {/* Footer inside mobile menu */}
            <div className="p-8 border-t border-slate-800 text-center font-sans space-y-4">
              <p className="text-slate-400 text-xs">Llámanos para iniciar hoy mismo:</p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-white hover:text-corporate-orange transition-colors block">
                {COMPANY_INFO.phone}
              </a>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                CRM Constructora © 2025
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
