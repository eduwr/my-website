import Link from "next/link";
import type { NavigatePage } from ".";
import { Translated } from "../Translated";

interface Props {
  pages: NavigatePage[];
}

const navClass = "h-full flex items-center justify-center md:block md:pt-20 md:pr-16"
const listClass = "flex flex-row justify-center md:justify-end divide-x-4 divide-tertiary"

export const Navbar = ({ pages }: Props) => {
  return (
    <nav className={navClass}>
      <ul className={listClass}>
        {pages.map(({ key, to, target }, idx) => {
          const addStyle = (!idx && " nav-decoration-x") || (idx === pages.length - 1 && " nav-decoration-y")

          return (
            <li key={key}>
              <Link href={to}>
                <a
                  className={"text-5xl md:text-6xl text-tertiary lowercase m-7 hover:text-secondary text-shadow transition-fast" + addStyle}
                  target={target}
                >
                  <Translated textKey={key}/>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
