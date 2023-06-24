import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "src/containers/PublicLayout";
import { PublicMeta } from "src/modules/publicModules";

export default function Home() {
  return (
    <>
      <PublicMeta />
      <PublicLayout>
        <div className="flex flex-col items-center justify-center gap-16 lg:-mt-8">
          <div className="container mx-auto flex flex-col items-center justify-center gap-16 px-8 lg:flex-row">
            <div className="flex w-full max-w-md flex-col justify-center">
              <p className="mb-8 text-xl font-semibold">
                Increase your productivity with our advanced project management
                application. Log in or register to enjoy a personalized
                dashboard, efficient task tracking, and an intuitive interface.
                Build a structured workflow and achieve better results.
              </p>
            </div>
            <Image
              priority
              src="/images/CompleteTask.svg"
              height={380}
              width={380}
              alt="Login"
              className="hidden lg:block"
            />
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center gap-16 px-8 lg:flex-row">
            <Image
              priority
              src="/images/AddTask.svg"
              height={480}
              width={480}
              alt="Login"
            />
            <div className="flex w-full max-w-md flex-col justify-center">
              <p className="mb-8 text-xl font-semibold">
                Join now and take your project management efficiency to the next
                level!
              </p>
              <Link href="/login">
                <button className="btn-primary btn-active btn mt-4 w-full">
                  Sign in
                </button>
              </Link>
              <Link href="/register">
                <button className="btn-primary btn-active btn mt-4 w-full">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PublicLayout>
    </>
  );
}
