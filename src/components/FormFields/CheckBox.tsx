import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

export const CheckBox = ({
  label,
  name,
  required = false,
  disabled = false,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label gap-2">
        <input
          type="checkbox"
          {...register(name, { required })}
          className={`checkbox-primary checkbox ${
            errors[name] ? "checkbox-error" : ""
          }`}
          disabled={disabled}
        />
        <span className="label-text">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      </label>
    </div>
  );
};
