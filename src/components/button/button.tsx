import * as React from "react";
import './Button.css'; // Import your CSS file

interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  variant?: "default" | "secondary" | "link" | "main"; // Different variants
  onLoading?: React.ReactEventHandler<HTMLButtonElement>; // Loading animation handler
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  // Choose the class based on the variant
  const variantClass = props.variant ? `btn-${props.variant}` : "btn-default";
  
  return (
    <button
      className={`btn ${variantClass} ${props.className || ''}`} // Apply the class based on the variant
      id={props.id}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export { Button };
