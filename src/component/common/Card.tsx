import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;