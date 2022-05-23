import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavigatePage } from ".";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  const { asPath } = useRouter();
  return (
    <header className="flex flex-col justify-center items-center p-6">
      <Image
        src="/assets/logo/logo-bg-white.png"
        alt="Logo"
        width={332}
        height={232}
      />
      <nav className="mt-8 divide-x-2 divide-black">
        {pages.map(({ key, to }) => (
          <Link key={key} href={to}>
            <a
              className={`${
                asPath === to && "text-yellow"
              } px-10 text-2xl font-light transition-all duration-300 hover:opacity-50`}
            >
              {key.toUpperCase()}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};
