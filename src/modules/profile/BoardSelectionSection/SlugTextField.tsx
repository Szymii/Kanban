import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const SlugTextField = ({
  label,
  name,
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
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      </label>
      <input
        type="text"
        {...register(name, { required, minLength: 3, maxLength: 3 })}
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
