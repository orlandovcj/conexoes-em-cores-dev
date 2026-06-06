'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'left' | 'right' | 'scale' | 'blur';
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  variant = 'default',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold });

  const variantClass = {
    default: 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
    blur: 'scroll-reveal-blur',
  }[variant];

  return (
    <div
      ref={ref}
      className={`${variantClass} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Componente para revelar múltiplos filhos com stagger
interface ScrollRevealStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function ScrollRevealStagger({
  children,
  className = '',
  staggerDelay = 100,
}: ScrollRevealStaggerProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  );
}

// Componente específico para grid de artworks
interface ArtworkGridRevealProps {
  children: ReactNode;
  className?: string;
}

export function ArtworkGridReveal({ children, className = '' }: ArtworkGridRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div ref={ref} className={`grid ${className}`}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              className={`artwork-reveal ${isVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  );
}
