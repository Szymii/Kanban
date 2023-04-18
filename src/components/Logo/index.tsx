import Image from "next/image";
import Link from "next/link";

export const Logo = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="flex items-center space-x-2">
      <div className="relative hidden h-24 w-48 md:block">
        <Image src="/images/Logo.svg" alt="Go to home page" fill />
      </div>
      <div className="relative block  md:hidden">
        <Image
          src="/images/LogoSmall.svg"
          alt="Go to home page"
          height={72}
          width={72}
        />
      </div>
    </Link>
  );
};
