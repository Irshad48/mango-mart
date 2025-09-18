import React from "react";
import { TextField } from "@mui/material";

type TextInputProps = {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  autoComplete?: string;
  fullWidth?: boolean;
  className?: string;
};

/**
 * Lightweight wrapper around MUI TextField.
 * Keeps the API small and predictable for reuse across forms.
 */
const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error = false,
  helperText,
  autoComplete,
  fullWidth = true,
  className,
}) => {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      autoComplete={autoComplete}
      fullWidth={fullWidth}
      variant="outlined"
      className={className}
    />
  );
};

export default TextInput;
