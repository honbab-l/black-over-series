import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameSeries } from '../data/lore';
import { X, Shield, ShieldAlert, Network } from 'lucide-react';

interface GameModalProps {
  game: GameSeries | null;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-black border border-green-500/50 shadow-[0_0_50px_rgba(0,255,0,0.2)] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-500/30 bg-green-900/10">
            <div className="flex items-center gap-2 text-green-500">
              <Network className="w-5 h-5" />
              <h2 className="text-xl font-display tracking-wider">RELATED ARCHIVES DETECTED</h2>
            </div>
            <button onClick={onClose} className="text-green-500 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
            {/* Parent Game Info */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-gray-900 border border-green-500/30 relative overflow-hidden group">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-display text-white mb-4">{game.title}</h3>
                <p className="text-gray-300 font-mono mb-6 leading-relaxed">{game.description}</p>
                
                <div className="flex gap-4">
                  {game.safetyLink && (
                    <a href={game.safetyLink} className="px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all font-display text-sm">
                      SAFETY
                    </a>
                  )}
                  {game.unsafetyLink && (
                    <a href={game.unsafetyLink} className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-all font-display text-sm">
                      UNSAFETY
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Sub Games Grid */}
            {game.subGames && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-green-500/30"></div>
                  <h4 className="text-green-500 font-mono text-sm tracking-widest">CONNECTED FILES</h4>
                  <div className="h-px flex-1 bg-green-500/30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.subGames.map((sub) => (
                    <div key={sub.id} className="border border-white/10 bg-white/5 p-4 hover:border-green-500/30 transition-colors flex flex-col gap-4">
                      <div className="flex gap-4">
                        {/* Left: Square Image */}
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-900 border border-white/10 overflow-hidden">
                          <img 
                            src={sub.image} 
                            alt={sub.title} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        {/* Right: Title & Description */}
                        <div className="flex-1 min-w-0">
                          <h5 className="text-lg font-display text-white mb-1 truncate">{sub.title}</h5>
                          <p className="text-xs text-gray-400 font-mono line-clamp-3">{sub.description}</p>
                        </div>
                      </div>

                      {/* Bottom: Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <a href={sub.safetyLink} className="flex items-center justify-center gap-2 py-2 bg-green-900/20 border border-green-500/20 text-green-400 text-xs hover:bg-green-500/20 transition-colors">
                          <Shield className="w-3 h-3" /> SAFETY
                        </a>
                        <a href={sub.unsafetyLink} className="flex items-center justify-center gap-2 py-2 bg-red-900/20 border border-red-500/20 text-red-400 text-xs hover:bg-red-500/20 transition-colors">
                          <ShieldAlert className="w-3 h-3" /> UNSAFETY
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
