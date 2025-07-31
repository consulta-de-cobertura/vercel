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
    primary: 'bg-blue-900 hover:bg-blue-800 text-white focus:ring-blue-900 shadow-lg',
    secondary: 'bg-purple-800 hover:bg-purple-700 text-white focus:ring-purple-800 shadow-lg',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-blue-900',
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