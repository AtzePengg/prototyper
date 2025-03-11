import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'border border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500',
    danger: 'border border-transparent text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };
  
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonStyles = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;