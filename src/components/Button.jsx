import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary border border-primary hover:bg-blue-50 focus:ring-blue-500",
    outline: "bg-transparent text-white border border-white hover:bg-white/10 focus:ring-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
