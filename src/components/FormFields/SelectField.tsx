import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  tooltip?: string;
  required?: boolean;
  disabled?: boolean;
  options: { value: string; label: string }[];
}

export const SelectField = ({
  label,
  name,
  required = false,
  disabled = false,
  options,
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
      <select
        {...register(name, { required })}
        id={id}
        className={`select-bordered select w-full  ${
          errors[name] ? "input-error" : ""
        }`}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
