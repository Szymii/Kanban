import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  tooltip?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const TextAreaField = ({
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
      <textarea
        {...register(name, { required })}
        id={id}
        placeholder={placeholder}
        rows={5}
        className={`textarea-bordered textarea w-full ${
          errors[name] ? "input-error" : ""
        }`}
        disabled={disabled}
      />
    </div>
  );
};
