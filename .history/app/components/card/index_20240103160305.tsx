import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hoverClassName?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  hoverClassName = '',
}) => {
  const handleMouseEnter = () => {
    // Add hover effect on mouse enter if hoverClassName is provided
    if (hoverClassName) {
      const card = document.getElementById('card');
      card?.classList.add(hoverClassName);
    }
  };

  const handleMouseLeave = () => {
    // Remove hover effect on mouse leave if hoverClassName is provided
    if (hoverClassName) {
      const card = document.getElementById('card');
      card?.classList.remove(hoverClassName);
    }
  };

  return (
    <div
      id="card"
      className={`rounded-lg bg-white shadow-md p-6 border border-gray-200 ${className}`}
      style={style}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card;
