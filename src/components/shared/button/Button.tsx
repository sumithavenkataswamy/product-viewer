import React from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

// pure component
// React.memo is used to prevent unnecessary re-renders
// It will only re-render if the props change
const Button = React.memo(({ label, onClick, type, className, disabled}: ButtonProps) => {
  return <button type={type} className={className} disabled={disabled} onClick={onClick}>{label}</button>;
});

export default Button;
