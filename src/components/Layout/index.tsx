import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const pages = [
  { key: "Início", to: "/" },
  { key: "Sobre", to: "/about" },
  { key: "Projetos", to: "/projects" },
  { key: "Novidades", to: "/news" },
  { key: "Contato", to: "/contact" },
];

export const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  console.log("asPath", asPath);
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/assets/logo/logo-bg-white.png"
          alt="Logo"
          width={332}
          height={232}
        />
        <nav className={styles.nav}>
          {pages.map(({ key, to }) => (
            <Link key={key} href={to}>
              <a className={asPath === to ? styles.textYellow : ""}>
                {key.toUpperCase()}
              </a>
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
