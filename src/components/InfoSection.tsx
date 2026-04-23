import React from 'react';
import { LORE } from '../data/lore';

export default function InfoSection() {
  return (
    <div className="space-y-12 text-gray-300 font-mono text-sm md:text-base">
      {/* Notice Info */}
      <section className="border-l-2 border-white/20 pl-6 relative">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white/20 rounded-full"></div>
        <h2 className="text-2xl font-display text-white mb-4">NOTICE</h2>
        <div className="max-w-3xl">
          <p className="mb-4 text-white/80 leading-relaxed font-mono">
            {LORE.notice}
          </p>
        </div>
      </section>

      {/* Tip Info */}
      <section className="border-l-2 border-white/20 pl-6 relative">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white/20 rounded-full"></div>
        <h2 className="text-2xl font-display text-white mb-4">TIP</h2>
        <div className="max-w-3xl">
          <p className="mb-4 text-white/80 leading-relaxed font-mono">
            {LORE.tip}
          </p>
        </div>
      </section>
    </div>
  );
}
