"use client";
import { useEffect, useState } from 'react';

const UseCaseImage = ({ imageUrl, isActive, direction }) => {
  const [animationState, setAnimationState] = useState('initial'); // 'initial', 'exiting', 'entering'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setAnimationState('entering');
      setIsVisible(true);
    } else if (isVisible) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setIsVisible(false);
        setAnimationState('initial');
      }, 1000); // Duración total de la animación de salida
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-in-out transform';
    
    switch (animationState) {
      case 'entering':
        return `${baseClasses} translate-x-0 opacity-100 scale-100`;
      case 'exiting':
        return `${baseClasses} ${direction === 'right' ? 'translate-x-full' : '-translate-x-full'} opacity-0 scale-95`;
      case 'initial':
        return `${baseClasses} ${direction === 'right' ? '-translate-x-full' : 'translate-x-full'} opacity-0 scale-95`;
      default:
        return baseClasses;
    }
  };

  if (!isVisible && animationState === 'initial') return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={imageUrl}
        alt=""
        className={`
          absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg
          ${getAnimationClasses()}
        `}
      />
      <div 
        className={`
          absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent
          transition-opacity duration-1000
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};

export default UseCaseImage;