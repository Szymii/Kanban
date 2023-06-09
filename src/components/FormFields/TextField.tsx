import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  tooltip?: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
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

  const validation = {
    text: { minLength: 4, maxLength: 20 },
    email: {},
    password: { minLength: 4, maxLength: 20 },
  };

  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      </label>
      <input
        type={type}
        {...register(name, { required, ...validation[type] })}
        id={id}
        placeholder={placeholder}
        className={`input-bordered input w-full ${
          errors[name] ? "input-error" : ""
        }`}
        disabled={disabled}
      />
    </div>
  );
};
