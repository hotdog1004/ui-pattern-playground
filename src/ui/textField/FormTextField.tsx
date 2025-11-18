import type { InputHTMLAttributes } from "react";

type FormTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const FormTextField = ({
  label,
  error,
  helperText,
  id,
  className,
  ...props
}: FormTextFieldProps) => {
  const inputId = id ?? `textfield-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-md border px-3 py-2 text-sm outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          }
          ${className}
        `}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};
