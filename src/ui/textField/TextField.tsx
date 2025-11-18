import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({ className, ...props }: TextFieldProps) => {
  return (
    <div>
      <input
        type="text"
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500  outline-none transition ${className}`}
        {...props}
      />
    </div>
  );
};
