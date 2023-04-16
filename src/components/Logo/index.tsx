import Image from "next/image";
import Link from "next/link";

export const Logo = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="flex items-center space-x-2">
      <div className="relative h-24 w-48">
        <Image src="/images/Logo.svg" alt="Go to home page" fill />
      </div>
    </Link>
  );
};
