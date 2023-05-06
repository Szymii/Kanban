import { signIn } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "src/components/FormFields";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

import { ConfirmPasswordField } from "./ConfirmPasswordField";

interface IRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
}

export const RegisterForm = () => {
  const methods = useForm<IRegisterData>();
  const { mutateAsync, isLoading } = api.auth.signUp.useMutation();
  const showNotification = useToastConsumer();

  const onSubmit = async (data: IRegisterData) => {
    try {
      const result = await mutateAsync(data);
      if (result.status === 201) {
        methods.reset();
        showNotification({
          id: "registration-failure",
          message: "Success! User account created.",
          type: "success",
        });

        await signIn("credentials", {
          email: data.email,
          password: data.password,
        });
      }
    } catch (e) {
      const { message } = e as { message: string };

      showNotification({
        id: "registration-failure",
        message: message ?? "Error! User already exists.",
        type: "error",
      });
    }
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
        <TextField
          label="Password (min 4 and max 20 signs)"
          name="password"
          type="password"
          tooltip="min 4 and max 20 signs"
          required
        />
        <ConfirmPasswordField
          label="Confirm password"
          name="confirm"
          passwordField="password"
          type="password"
          required
        />
        <button
          className={`${
            isLoading ? "disabled" : ""
          } btn-primary btn-active btn mt-4 w-full`}
        >
          Register
        </button>
      </form>
    </FormProvider>
  );
};
