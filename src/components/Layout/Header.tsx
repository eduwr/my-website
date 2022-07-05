import { Navbar } from "./Navbar";
import { NavigatePage } from ".";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  return (
    <header className="h-32 md:h-56 bg-gradient-to-b from-tertiary-content">
      <Navbar pages={pages}/>
    </header>
  );
};
