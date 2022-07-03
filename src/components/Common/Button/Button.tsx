import { ButtonProps } from "./Interfaces";
import { Button as MaterialButton } from "@mui/material";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  className,
}: ButtonProps) => {
  return (
    <MaterialButton onClick={onClick} className={className} variant="outlined">
      {label}
    </MaterialButton>
  );
};
