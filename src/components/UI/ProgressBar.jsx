import React from 'react';

const ProgressBar = ({
  value,
  max = 100,
  height = 'normal',
  color = 'blue',
  showLabel = false,
  className = '',
  ...props
}) => {
  const percentage = Math.round((value / max) * 100);
  
  const heightStyles = {
    small: 'h-1',
    normal: 'h-2',
    large: 'h-4',
  };
  
  const colorStyles = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    gray: 'bg-gray-500',
  };
  
  return (
    <div className={`w-full ${className}`} {...props}>
      <div className={`w-full bg-gray-200 rounded-full ${heightStyles[height]}`}>
        <div
          className={`${colorStyles[color]} ${heightStyles[height]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {percentage}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;