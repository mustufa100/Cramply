import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', className }) => {
  const baseStyle = 'px-6 py-3 font-semibold'; // Removed 'rounded-md' here
  const variants = {
    primary: 'bg-black text-black',
    secondary: 'bg-gray-100 text-black border border-black',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`} // 'rounded-full' passed from parent will apply here
    >
      {text}
    </button>
  );
};

export default Button;
