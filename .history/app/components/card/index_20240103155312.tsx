import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg bg-white shadow-md p-6 border border-gray-200">
      {children}
    </div>
  );
};

export default Card;
