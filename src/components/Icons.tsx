import Image from "next/image";

export const Icons = {
  logo: ({ className = "" }: { className?: string }) => (
    <Image
      src="/logo.jpg"
      alt="logo"
      className={`${className}`}
      width={40}
      height={40}
    />
  ),
};
