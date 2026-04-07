import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2,
  Brain,
  Mic,
  Heart
} from 'lucide-react';
import { slides, SlideData } from './slidesData';

const Background = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Rice paper texture overlay */}
    <div className="absolute inset-0 paper-texture opacity-20 mix-blend-multiply" />
    
    {/* Ink wash gradients */}
    <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
    <div className="absolute -bottom-40 -right-20 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
    
    {/* Subtle landscape silhouette (SVG) */}
    <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="#1a3a32" 
        d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
);

const SlideContent = ({ slide }: { slide: SlideData }) => {
  const isCover = slide.layout === 'cover' || slide.layout === 'summary';

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-8 md:px-16 pt-20 pb-12">
      {isCover ? (
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block"
          >
            <div className="h-1 w-24 bg-accent mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-ink-dark mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-accent font-light tracking-widest uppercase">
              {slide.subtitle}
            </p>
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className={`${slide.layout === 'split' ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-8`}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {slide.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-ink-dark tracking-tight">
                  {slide.title}
                </h2>
              </div>
              <div className="h-0.5 w-16 bg-accent/30 mb-8" />
            </motion.div>

            <div className="space-y-5">
              {slide.points?.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                  <p className="text-lg md:text-xl text-ink-dark/80 leading-relaxed font-light">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {slide.layout === 'split' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              {slide.id === 5 ? (
                /* Hardware Device Mockup - Circular Design (Small & Portable) */
                <div className="relative w-full max-w-[240px] aspect-square flex items-center justify-center">
                  {/* Outer Shadow/Glow */}
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Device Body */}
                  <div className="relative w-full h-full rounded-full bg-[#0a0a0a] border-4 border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group">
                    {/* Screen */}
                    <div className="w-[92%] h-[92%] rounded-full bg-[#2d5a4e] relative flex items-center justify-center overflow-hidden">
                      {/* Subtle Screen Texture/Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                      
                      {/* Logo Removed as requested */}
                      <div className="w-1/3 h-1/3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
                      </div>
                      
                      {/* Reflection */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 transform translate-y-[-50%]" />
                    </div>
                  </div>
                  
                  {/* Base/Stand Shadow */}
                  <div className="absolute -bottom-4 w-1/2 h-4 bg-black/20 blur-xl rounded-full" />
                </div>
              ) : (
                /* Solution Diagram for Slide 4 or generic split */
                <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-full border border-accent/10 animate-[spin_20s_linear_infinite]" />
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/40 backdrop-blur-md border border-accent/20 rounded-2xl flex flex-col items-center gap-2">
                      <Mic className="w-8 h-8 text-accent" />
                      <span className="text-xs font-medium text-ink-dark">语音交互</span>
                    </div>
                    <div className="p-6 bg-white/40 backdrop-blur-md border border-accent/20 rounded-2xl flex flex-col items-center gap-2">
                      <Brain className="w-8 h-8 text-accent" />
                      <span className="text-xs font-medium text-ink-dark">认知训练</span>
                    </div>
                    <div className="p-6 bg-white/40 backdrop-blur-md border border-accent/20 rounded-2xl flex flex-col items-center gap-2 col-span-2">
                      <Heart className="w-8 h-8 text-accent" />
                      <span className="text-xs font-medium text-ink-dark">情感陪伴</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="relative w-screen h-screen bg-paper overflow-hidden font-sans">
      <Background />

      {/* Header / Navigation Info */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
        <div className="text-xs font-mono tracking-widest text-ink-dark">
          PAGE {String(currentSlide + 1).padStart(2, '0')} / {slides.length}
        </div>
        <div className="h-px w-8 bg-ink-dark" />
        <div className="text-xs font-medium text-ink-dark uppercase tracking-tighter">
          POCI AI COMPANION
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <SlideContent slide={slides[currentSlide]} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls Overlay */}
      <div className="absolute bottom-8 left-0 w-full px-8 z-50 flex justify-between items-end">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/50 backdrop-blur-md border border-accent/20 transition-all group"
            title="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-ink-dark group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/50 backdrop-blur-md border border-accent/20 transition-all group"
            title="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-ink-dark group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleFullscreen}
            className="p-3 rounded-full bg-white/20 hover:bg-white/50 backdrop-blur-md border border-accent/20 transition-all text-ink-dark"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/10 z-50">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Decorative Ink Splashes */}
      <div className="absolute top-1/4 right-0 w-32 h-64 bg-accent/5 rounded-l-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-24 h-48 bg-accent/5 rounded-r-full blur-3xl pointer-events-none" />
    </div>
  );
}
