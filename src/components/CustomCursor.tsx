import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} hidden md:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Crosshair lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/30 -translate-x-1/2 pointer-events-none"></div>
      
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
    </div>
  );
}
