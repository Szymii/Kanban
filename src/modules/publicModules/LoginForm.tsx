import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "src/components/FormFields";

interface ILoginData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const methods = useForm<ILoginData>();

  const onSubmit = (data: ILoginData) => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-md"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Password" name="password" type="password" required />
        <button className="btn-primary btn-active btn mt-4 w-full">
          Sign in
        </button>
      </form>
    </FormProvider>
  );
};
