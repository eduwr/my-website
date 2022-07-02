import { Navbar } from "./Navbar";
import { NavigatePage } from ".";
import { useState } from "react";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  const [ showNavModal, setShowNavModal ] = useState(false);
  return (
    <header className="flex flex-col justify-center items-center p-6 relative">
      <Navbar pages={pages} showNavModal={showNavModal}/>
    </header>
  );
};
