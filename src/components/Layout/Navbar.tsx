import Link from "next/link";
import { useRouter } from "next/router";
import { NavigatePage } from ".";

interface Props {
  pages: NavigatePage[];
  showNavModal: boolean;
}

export const Navbar = ({ pages, showNavModal }: Props) => {
  const { asPath } = useRouter();
  const navClass = showNavModal ? "flex flex-col" : "mt-8 sm:flex hidden";
  const listClass = showNavModal
    ? "absolute opacity-95 flex flex-col divide-y-2 pt-20 divide-black top-0 left-0 right-0 bottom-0 bg-light"
    : "flex divide-x-2 divide-black";
  return (
    <nav className={navClass}>
      <ul className={listClass}>
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
  );
};
