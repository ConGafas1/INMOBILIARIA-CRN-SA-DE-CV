/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, Tag } from 'lucide-react';
import { PROJECTS_SLIDER } from '../data';

interface GalleryImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

function GalleryImage({ src, fallbackSrc, alt, className }: GalleryImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryStage, setRetryStage] = useState(0);

  useEffect(() => {
    setCurrentSrc(src);
    setRetryStage(0);
  }, [src]);

  const handleError = () => {
    if (retryStage === 0) {
      const pngSrc = src.replace(/\.jpg$/, '.png');
      setCurrentSrc(pngSrc);
      setRetryStage(1);
    } else if (retryStage === 1 && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setRetryStage(2);
    } else if (retryStage === 2) {
      setCurrentSrc(`https://picsum.photos/seed/materiales-${src.replace(/[^0-9]/g, '')}/1200/800`);
      setRetryStage(3);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev === PROJECTS_SLIDER.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_SLIDER.length - 1 : prev - 1));
  };

  const handleJumpTo = (index: number) => {
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const currentProject = PROJECTS_SLIDER[currentIndex];

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section id="galeria" className="py-12 md:py-16 bg-slate-50 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Bento Image Grid — Elegant visual focus, absolutely zero texts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {PROJECTS_SLIDER.map((project, idx) => {
            // Get specific responsive layouts designed to lock perfectly with zero gaps
            let spanClasses = "relative group overflow-hidden bg-slate-900 rounded-xl cursor-pointer shadow-md hover:shadow-2xl border border-slate-200/50 transition-all duration-500";
            
            if (idx === 0) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] sm:h-[400px] lg:h-[450px]";
            } else if (idx === 1) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-2 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 2) {
              spanClasses += " col-span-1 lg:col-span-1 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 3) {
              spanClasses += " col-span-1 lg:col-span-1 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 4) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-2 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 5) {
              spanClasses += " col-span-1 lg:col-span-1 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 6) {
              spanClasses += " col-span-1 lg:col-span-1 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 7) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-2 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 8) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-2 h-[180px] sm:h-[240px] lg:h-[217px]";
            } else if (idx === 9) {
              spanClasses += " col-span-1 sm:col-span-2 lg:col-span-4 h-[220px] sm:h-[300px] lg:h-[320px]";
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsZoomOpen(true);
                }}
                className={spanClasses}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <GalleryImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  />
                  {/* Premium Hover overlay — absolutely no texts, pure visual experience */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-3.5 rounded-full bg-white/20 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-screen Lightbox — Ultra Clean Minimal Theater layout with zero text overlay */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex flex-col justify-center items-center p-4 md:p-10 select-none"
          >
            {/* Action Top-Right Close Button */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-3 rounded-full bg-white/10 hover:bg-corporate-orange hover:scale-105 text-white transition-all backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-orange/20"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left float navigation control */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-corporate-orange text-white hover:scale-110 active:scale-95 transition-all backdrop-blur-md border border-white/10 z-50 focus:outline-none focus:ring-2 focus:ring-corporate-orange/20"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right float navigation control */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-corporate-orange text-white hover:scale-110 active:scale-95 transition-all backdrop-blur-md border border-white/10 z-50 focus:outline-none focus:ring-2 focus:ring-corporate-orange/20"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main view item container */}
            <div className="w-full max-w-6xl max-h-[85vh] flex items-center justify-center p-2 relative">
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={slideDirection}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="max-h-[85vh] max-w-full flex items-center justify-center"
                >
                  <GalleryImage
                    src={PROJECTS_SLIDER[currentIndex].image}
                    fallbackSrc={PROJECTS_SLIDER[currentIndex].fallbackImage}
                    alt="Galería zoom"
                    className="max-h-[85vh] max-w-full object-contain rounded-md shadow-2xl border border-white/5"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
