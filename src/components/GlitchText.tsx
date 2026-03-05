import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function GlitchText({ text, className = '', as: Component = 'span' }: GlitchTextProps) {
  return (
    <Component className={`glitch-text font-display uppercase tracking-wider ${className}`} data-text={text}>
      {text}
    </Component>
  );
}
