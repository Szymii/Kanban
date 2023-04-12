import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "src/components/FormFields";
import { CheckBox } from "src/components/FormFields/CheckBox";

interface IRegisterData {
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const methods = useForm<IRegisterData>();

  const onSubmit = (data: IRegisterData) => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-md"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          <TextField label="First name" name="firstName" type="text" required />
          <TextField label="Last name" name="lastName" type="text" required />
        </div>
        <TextField label="Email address" name="email" type="email" required />
        <TextField label="Password" name="password" type="password" required />
        <TextField
          label="Confirm password"
          name="confirm"
          type="password"
          required
        />
        <button className="btn-primary btn-active btn mt-4 w-full">
          Register
        </button>
      </form>
    </FormProvider>
  );
};
