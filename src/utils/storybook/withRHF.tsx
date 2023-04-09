import { type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const withRHF = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <WithRHF>
      <Story />
    </WithRHF>
  );
};

const WithRHF = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
