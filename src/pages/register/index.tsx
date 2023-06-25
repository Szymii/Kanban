import { type GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import { LinkButton } from "src/components/LinkButton";
import { PublicLayout } from "src/containers/PublicLayout";
import { RegisterForm } from "src/modules/publicModules";
import { authOptions } from "src/server/auth";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default function Login() {
  return (
    <>
      <PublicLayout>
        <div className="flex items-center justify-center">
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
