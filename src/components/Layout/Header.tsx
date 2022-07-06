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
  if(isHidden) {
    return <></>
  }

  return (
    <header className='h-32 md:h-56 bg-gradient-to-b from-tertiary-content'>
      <Navbar pages={pages}/>
    </header>
  );
};
