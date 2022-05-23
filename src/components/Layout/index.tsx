import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export type NavigatePage = {
  key: string;
  to: string;
};

const pages: NavigatePage[] = [
  { key: "Início", to: "/" },
  { key: "Sobre", to: "/about" },
  { key: "Projetos", to: "/projects" },
  { key: "Novidades", to: "/news" },
  { key: "Contato", to: "/contact" },
];

export const Layout = ({ children }: Props) => (
  <>
    <Header pages={pages} />
    <main>{children}</main>
    <Footer
      addressLines={[
        "Rua Marechal Floriano Peixoto, 196 Curitiba - PR",
        "CEP 88140-000",
      ]}
      pages={pages}
    />
  </>
);
