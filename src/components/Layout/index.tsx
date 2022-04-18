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
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h3>vitoria@vitoriacavassin.com</h3>
          <p>
            Let tell us know your dream and we will help you make it become
            reality
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.address}>
            <h3>Escritório</h3>
            <p>Rua Marechal Floriano Peixoto, 196 Curitiba - PR</p>
            <p>CEP 88140-000</p>
          </div>
          <div className={styles.links}>
            <h3>Links</h3>
            {pages.map(({ key, to }) => (
              <Link key={key} href={to}>
                <a>{key}</a>
              </Link>
            ))}
          </div>
          <div className={styles.icons}>
            <a
              className={styles.roundIcon}
              target="_blank"
              href="https://www.instagram.com/vitoriacavassinarquiteta"
              rel="noreferrer"
            >
              <Image
                alt="Instagram"
                src="/icons/instagram.png"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <p className={styles.developerInfo}>
          Development By <span>Wilk Technology</span>
        </p>
      </footer>
    </>
  );
};
