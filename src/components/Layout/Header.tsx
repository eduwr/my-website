import { Navbar } from "./Navbar";
import { NavigatePage } from ".";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  pages: NavigatePage[];
}

export const Header = ({ pages }: Props) => {
  const { asPath } = useRouter();
  const routeParams = asPath.split("/").filter(Boolean);

  const isHidden = routeParams.length >= 2;

  return (
    <header
      className={`flex w-full pt-5 items-top justify-center sm:justify-between h-32 md:h-40 bg-gradient-to-b from-tertiary-content ${
        isHidden && "hidden lg:block"
      }`}
    >
      <div className="ml-8 hidden sm:inline">
        <Image
          src="/assets/logo/logo-large.png"
          objectFit="contain"
          width={250}
          height={100}
          alt="Wilk Technology Logo"
        />
      </div>
      <Navbar pages={pages} />
    </header>
  );
};
