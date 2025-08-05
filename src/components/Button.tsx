import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent-dark text-white focus:ring-accent shadow-2xl border border-accent-light',
    secondary: 'bg-accent hover:bg-accent-dark text-white focus:ring-accent shadow-2xl border border-accent-light',
    outline: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-50 focus:ring-navy-700',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;