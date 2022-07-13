import { Footer } from "./Footer";
import { Header } from "./Header";
import type { Dictionary } from "../../contexts/TranslateContext";
import type { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export type NavigatePage = {
  key: keyof Dictionary;
  to: string;
  target?: HTMLAttributeAnchorTarget
};

const pages: NavigatePage[] = [
  { key: "home.nav.home", to: "/" },
  { key: "home.nav.blog", to: "/posts" },

];

export const Layout = ({ children }: Props) =>
  (
    <>
      <Header pages={pages}/>
      <main>{children}</main>
      <Footer
        addressLines={[
          "Santo Amaro da Imperatriz, SC", "Brazil"
        ]}
        pages={pages}
      />
    </>
  );
