import Image from "next/image";
import { LinkButton } from "src/components/LinkButton";
import { PublicLayout } from "src/containers/PublicLayout";
import { PublicMeta, RegisterForm } from "src/modules/publicModules";

export default function Login() {
  return (
    <>
      <PublicMeta />
      <PublicLayout>
        <div className="flex items-center justify-center pt-24 ">
          <div className="container mx-auto flex flex-col items-center justify-center gap-16 px-8 lg:flex-row">
            <Image
              priority
              src="/images/Home.svg"
              height={480}
              width={480}
              alt="Login"
            />
            <div className="flex w-full justify-center">
              <div>
                <RegisterForm />
                <div className="mt-3">
                  <LinkButton direction="/login">
                    {"Already have an account? Log in here."}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    </>
  );
}
