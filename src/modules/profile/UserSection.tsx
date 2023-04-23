import { FormProvider, useForm } from "react-hook-form";
import { Avatar } from "src/components/Avatar";
import { TextField } from "src/components/FormFields";

import { useUserConsumer } from "../profile";
import { type IUserData } from "./IUserData";

export const UserSection = () => {
  const user = useUserConsumer();
  const methods = useForm<IUserData>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: "***********",
    },
  });
  const onSubmit = (data: IUserData) => {
    //
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:flex-row md:gap-40 lg:gap-72">
      <Avatar
        name={user.firstName}
        surname={user.lastName}
        avatarUrl={user.image}
        size="xl"
      />
      <FormProvider {...methods}>
        <form
          className="w-full max-w-md"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <TextField
              label="First name"
              name="firstName"
              type="text"
              disabled
            />
            <TextField label="Last name" name="lastName" type="text" disabled />
          </div>
          <TextField label="Email address" name="email" type="email" disabled />
          <TextField
            label="Password"
            name="password"
            type="password"
            disabled
          />
          <button className="btn-primary btn-active btn mt-4 w-full">
            Edit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
