import React from 'react';
import { motion } from 'motion/react';
import { GameSeries } from '../data/lore';
import { Shield, ShieldAlert, Layers } from 'lucide-react';

interface GameCardProps {
  game: GameSeries;
  index: number;
  onOpenModal: (game: GameSeries) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, index, onOpenModal }) => {
  const hasSubGames = game.subGames && game.subGames.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative group bg-black border border-white/10 hover:border-green-500/50 transition-colors duration-300 p-4 flex flex-col h-full"
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-green-500 transition-colors"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-green-500 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-green-500 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-green-500 transition-colors"></div>

      {/* Image Container - Clickable for Modal if has subgames */}
      <div 
        className={`aspect-[2/3] flex items-center justify-center w-full overflow-hidden mb-4 relative bg-black ${hasSubGames ? 'cursor-pointer' : ''}`}
        onClick={() => hasSubGames && onOpenModal(game)}
      >
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
        
        {/* Overlay Text */}
        <div className="absolute bottom-2 left-2">
          <p className="text-xs font-mono text-green-500">CASE FILE: {game.id.toUpperCase()}</p>
        </div>

        {/* Bundle Indicator */}
        {hasSubGames && (
          <div className="absolute top-2 right-2 bg-green-500 text-black text-[10px] font-bold px-2 py-1 flex items-center gap-1 animate-pulse">
            <Layers size={12} />
            BUNDLE
          </div>
        )}
      </div>

      {/* Title */}
      <h3 
        className={`text-xl md:text-2xl font-display text-white mb-2 text-center group-hover:text-green-400 transition-colors ${hasSubGames ? 'cursor-pointer' : ''}`}
        onClick={() => hasSubGames && onOpenModal(game)}
      >
        {game.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 font-mono mb-6 text-center min-h-[3rem] flex-grow">
        {game.description}
      </p>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        {hasSubGames ? (
          <button 
            onClick={() => onOpenModal(game)}
            className="col-span-2 flex items-center justify-center p-3 border border-green-500 bg-green-500/10 hover:bg-green-500 hover:text-black text-green-500 transition-all group/btn"
          >
            <Layers className="w-5 h-5 mb-0 mr-2" />
            <span className="text-sm font-display tracking-widest uppercase">ACCESS ARCHIVES</span>
          </button>
        ) : (
          <>
            <a 
              href={game.safetyLink}
              className="flex flex-col items-center justify-center p-3 border border-green-900/50 bg-green-900/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 transition-all group/btn"
            >
              <Shield className="w-6 h-6 mb-2 group-hover/btn:scale-110 transition-transform" />
              <span className="text-sm font-display tracking-widest uppercase">SAFETY</span>
            </a>
            
            <a 
              href={game.unsafetyLink}
              className="flex flex-col items-center justify-center p-3 border border-red-900/50 bg-red-900/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all group/btn"
            >
              <ShieldAlert className="w-6 h-6 mb-2 group-hover/btn:scale-110 transition-transform" />
              <span className="text-sm font-display tracking-widest uppercase">UNSAFETY</span>
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default GameCard;
