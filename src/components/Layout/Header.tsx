import Image from "next/image";
import { Navbar } from "./Navbar";
import { NavigatePage } from ".";
import { MenuIcon } from "../Icons/MenuIcon";
import { useState } from "react";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  const [ showNavModal, setShowNavModal ] = useState(false);
  const toggleNavModal = () => setShowNavModal((prev) => !prev);

  return (
    <header className="flex flex-col justify-center items-center p-6 relative">
      <button
        className="flex z-10 sm:hidden items-center justify-center absolute right-2 top-2 h-10 w-10"
        onClick={toggleNavModal}
      >
        <MenuIcon/>
      </button>
      <Image
        src="/assets/logo/logo-bg-white.png"
        alt="Logo"
        width={332}
        height={232}
      />
      <Navbar pages={pages} showNavModal={showNavModal}/>
    </header>
  );
};
