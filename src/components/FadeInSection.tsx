import { ReactNode } from 'react';
import { useFadeInScroll } from '@/hooks/use-fade-in-scroll';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const FadeInSection = ({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: FadeInSectionProps) => {
  const { elementRef, isVisible } = useFadeInScroll({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}; 