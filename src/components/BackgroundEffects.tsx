import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(1);
    
    // Binary/Hex characters
    const chars = "0101010101ABCDEF";

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // Green text
      ctx.font = '14px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* Radar Sweep - Enhanced Visibility */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] rounded-full border border-green-500/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmax] h-[100vmax] rounded-full border border-green-500/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vmax] h-[50vmax] rounded-full border border-green-500/30"></div>
        
        <div className="absolute top-1/2 left-1/2 w-[100vmax] h-[100vmax] -translate-x-1/2 -translate-y-1/2 origin-center animate-[spin_4s_linear_infinite] bg-gradient-to-r from-transparent via-green-500/20 to-transparent" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%)' }}></div>
      </div>

      {/* HUD Grid - Enhanced Visibility */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #00ff00 1px, transparent 1px),
            linear-gradient(to bottom, #00ff00 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Random Data Blocks - Enhanced */}
      <div className="absolute top-20 right-10 w-64 h-auto border border-green-500/50 p-4 opacity-70 hidden md:block bg-black/50 backdrop-blur-sm">
        <div className="text-xs font-mono text-green-400 leading-relaxed">
          <span className="animate-pulse">&gt;&gt; SYSTEM_OVERRIDE_INIT</span><br/>
          TARGET: BLACK_OVER_ARCHIVES<br/>
          ENCRYPTION: BYPASSED<br/>
          ACCESS_LEVEL: ADMIN<br/>
          <br/>
          <span className="text-green-600">
            [LOG] Connection established.<br/>
            [LOG] Retrieving classified data...<br/>
            [LOG] 16 Records found.
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-64 h-24 border-l-4 border-b-4 border-green-500/50 p-2 opacity-60 hidden md:block">
        <div className="h-full flex items-end gap-1">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="w-4 bg-green-500/60 animate-pulse"
              style={{ 
                height: `${Math.random() * 100}%`,
                animationDuration: `${0.5 + Math.random()}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
