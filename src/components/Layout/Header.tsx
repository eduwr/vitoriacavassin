import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavigatePage } from ".";
import { MenuIcon } from "../Icons/MenuIcon";

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

      <nav className="mt-8">
        {/* <button>
          <MenuIcon />
        </button> */}
        <ul className="sm:flex hidden divide-x-2 divide-black">
          {pages.map(({ key, to }) => (
            <li key={key}>
              <Link href={to}>
                <a
                  className={`${
                    asPath === to && "text-yellow"
                  } px-4 md:px-6 lg:px-10 text-xl md:text-2xl font-light transition-all duration-300 hover:opacity-50 uppercase`}
                >
                  {key}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
