'use client';

import React from 'react';
import { CardProps, ComponentProps } from './index.prop';
import Component from './index.component';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  hoverClassName = '',
  padding,
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

  const props: ComponentProps = {
    className,
    style,
    onClick,
    handleMouseEnter,
    handleMouseLeave,
    children,
    padding
  };

  return (
    <Component {...props} />
  );
};

export default Card;
