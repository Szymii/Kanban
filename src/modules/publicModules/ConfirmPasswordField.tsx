import { type ComponentProps, useId } from "react";
import { useFormContext } from "react-hook-form";
import { type TextField } from "src/components/FormFields";

interface IProps extends ComponentProps<typeof TextField> {
  passwordField: string;
}

export const ConfirmPasswordField = ({
  label,
  name,
  type,
  required = false,
  disabled = false,
  placeholder,
  passwordField,
}: IProps) => {
  const id = useId();
  const {
    register,
    watch,
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
        type={type}
        {...register(name, {
          required,
          validate: (value: string) => {
            if (watch(passwordField) !== value) {
              return "Your passwords do no match";
            }
          },
        })}
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
