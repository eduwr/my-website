import { Navbar } from "./Navbar";
import { NavigatePage } from ".";
import { useRouter } from "next/router";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  const {asPath} = useRouter();
  const routeParams = asPath.split("/").filter(Boolean);

  const isHidden = routeParams.length >= 2;

  return (
    <header className={`h-32 md:h-56 bg-gradient-to-b from-tertiary-content ${isHidden && 'hidden lg:block'}`}>
      <Navbar pages={pages}/>
    </header>
  );
};
