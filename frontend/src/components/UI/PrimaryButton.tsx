import React from "react";
import { Button } from "@mui/material";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = true,
  className,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      size="large"
      className={className}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
