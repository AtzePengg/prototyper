import React from 'react';

const Card = ({
  children,
  className = '',
  padding = 'normal',
  shadow = 'normal',
  rounded = 'normal',
  ...props
}) => {
  const baseStyle = 'bg-white';
  
  const paddingStyles = {
    none: '',
    small: 'p-2',
    normal: 'p-4',
    large: 'p-6',
  };
  
  const shadowStyles = {
    none: '',
    normal: 'shadow',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };
  
  const roundedStyles = {
    none: '',
    small: 'rounded',
    normal: 'rounded-md',
    large: 'rounded-lg',
  };
  
  const cardStyles = `${baseStyle} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${roundedStyles[rounded]} ${className}`;
  
  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;