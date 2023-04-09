import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const TextField = ({
  label,
  name,
  type,
  required = false,
  disabled = false,
  placeholder,
}: IProps) => {
  const id = useId();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={id}>
        <span className="label-text">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      </label>
      <input
        type={type}
        {...register(name, { required })}
        id={id}
        placeholder={placeholder}
        className={`input-bordered input w-full max-w-xs ${
          errors[name] ? "input-error" : ""
        }`}
        disabled={disabled}
      />
    </div>
  );
};
