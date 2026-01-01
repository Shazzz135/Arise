import React from 'react';

type Props = React.PropsWithChildren<{
  show: boolean;
  duration?: number;
  className?: string;
}>;

const FadeTransition = ({ show, duration = 600, children, className = '', ...rest }: Props) => (
  <div
    className={`fade-transition ${show ? 'fade-in' : 'fade-out'} ${className}`}
    style={{ transition: `opacity ${duration}ms cubic-bezier(.4,0,.2,1)` }}
    {...rest}
  >
    {children}
  </div>
);

export default FadeTransition;
