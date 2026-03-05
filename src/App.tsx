import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import GlitchText from './components/GlitchText';
import GameCard from './components/GameCard';
import InfoSection from './components/InfoSection';
import BackgroundEffects from './components/BackgroundEffects';
import GameModal from './components/GameModal';
import { GAME_SERIES, GameSeries } from './data/lore';
import { Terminal, Crosshair } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState<GameSeries | null>(null);

  useEffect(() => {
    // Simulate initial boot sequence
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black relative overflow-hidden">
      <CustomCursor />
      <BackgroundEffects />
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      
      {/* Effects Overlay */}
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono"
          >
            <div className="w-64">
              <div className="flex justify-between text-xs mb-1 text-green-500">
                <span>SYSTEM_BOOT</span>
                <span>v2.0.4</span>
              </div>
              <div className="h-1 bg-gray-900 w-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="h-full bg-green-500"
                ></motion.div>
              </div>
              <div className="mt-2 text-xs text-gray-500 animate-pulse">
                ESTABLISHING SECURE CONNECTION...
              </div>
            </div>
          </motion.div>
        ) : (
          <main className="relative z-10 container mx-auto px-4 py-12 md:py-24 max-w-6xl">
            
            {/* Header / Hero */}
            <header className="mb-24 text-center relative flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
              >
                {/* Shield Logo Placeholder with Glitch */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 glitch-text" data-text="">
                  {/* USER: Replace this src with your uploaded shield emblem image file */}
                  <img 
                    src="/assets/emblem.png" 
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.src = "https://i.postimg.cc/C5bqBnFx/logo.png";
                      e.currentTarget.style.filter = "invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))";
                    }}
                    alt="Black Over Emblem" 
                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                  
                  {/* Glitch layers for the image */}
                  <div className="absolute inset-0 bg-black/50 mix-blend-overlay animate-pulse"></div>
                </div>

                <h1 className="text-3xl md:text-5xl font-display tracking-widest text-white mb-2">
                  <GlitchText text="BLACK OVER SERIES MAP" />
                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-green-500 font-mono text-sm md:text-base tracking-[0.2em] uppercase mb-8"
              >
                Private Military Company / Classified Archives
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-4 text-xs font-mono text-gray-500"
              >
                <span className="flex items-center"><Terminal size={14} className="mr-2" /> ENCRYPTED</span>
                <span className="flex items-center"><Crosshair size={14} className="mr-2" /> SECURE</span>
              </motion.div>
            </header>

            {/* Lore Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-32"
            >
              <InfoSection />
            </motion.div>

            {/* Games Grid */}
            <section>
              <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                <h2 className="text-3xl md:text-4xl font-display text-white">
                  <span className="text-green-500 mr-2">/</span>
                  ARCHIVES
                </h2>
                <div className="text-xs font-mono text-gray-500">
                  {GAME_SERIES.length} RECORDS FOUND
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {GAME_SERIES.map((game, index) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    index={index} 
                    onOpenModal={setSelectedGame}
                  />
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-32 border-t border-white/10 pt-8 text-center text-xs font-mono text-gray-600">
              <p>BLACK OVER CORP. &copy; 202X. ALL RIGHTS RESERVED.</p>
              <p className="mt-2">UNAUTHORIZED ACCESS WILL BE PROSECUTED.</p>
            </footer>

          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
