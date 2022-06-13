import { Carousel } from "../Carousel";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
  showCarousel: boolean;
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

export const Layout = ({ children, showCarousel }: Props) => (
  <>
    <div
      className={
        showCarousel ? " flex flex-col relative h-screen justify-between" : ""
      }
    >
      <Header pages={pages} />
      {showCarousel && <Carousel />}
    </div>
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
