import { Footer } from "./Footer";
import { Header } from "./Header";
import type { Dictionary } from "../../contexts/TranslateContext";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  showCarousel: boolean;
}

export type NavigatePage = {
  key: keyof Dictionary;
  to: string;
};

const pages: NavigatePage[] = [
  { key: "home.nav.home", to: "/" },
  { key: "home.nav.blog", to: "/blog" },
];

export const Layout = ({ children }: Props) =>
  (
    <>
      <Header pages={pages}/>
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
