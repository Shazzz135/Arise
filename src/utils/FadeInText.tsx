
import type { JSX } from 'react';
import React, { useEffect, useRef } from 'react';

interface FadeInTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  duration?: number; // in ms
}

const FadeInText: React.FC<FadeInTextProps> = ({
  as = 'h1',
  className = '',
  children,
  duration = 1800,
  ...rest
}) => {
  const Tag = as as any;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      // Start fully invisible and hidden
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px) scale(0.95)';
      el.style.filter = 'blur(8px)';
      el.style.transition = 'none';
      // Force style flush
      void el.offsetHeight;
      // Then trigger transition
      el.style.transition = `opacity ${duration}ms cubic-bezier(.4,0,.2,1), transform ${duration}ms cubic-bezier(.4,0,.2,1), filter ${duration}ms cubic-bezier(.4,0,.2,1)`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
        el.style.filter = 'blur(0)';
      }, 10);
    }
  }, [duration]);

  return (
    <Tag
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default FadeInText;
