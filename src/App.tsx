/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="crm-app-root" className="min-h-screen bg-slate-50 flex flex-col selection:bg-corporate-orange selection:text-white">
      {/* Responsive Navigation Header */}
      <Header />

      {/* Main Structural Page Flow */}
      <main id="main-content-flow" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Quiénes Somos Section */}
        <About />

        {/* Especialidades y Servicios Section */}
        <Services />

        {/* Galería de Obras / Portfolio Section */}
        <Gallery />

        {/* Contacto & Formulario de Cotización Section */}
        <Contact />
      </main>

      {/* Repeating Contacts / Footer Credits section */}
      <Footer />
    </div>
  );
}
