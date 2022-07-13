import Link from "next/link";
import type { NavigatePage } from ".";
import { Translated } from "../Translated";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  pages: NavigatePage[];
}

const navClass = "h-full flex items-center justify-center md:block md:pt-20 md:pr-16"
const listClass = "flex flex-row justify-center md:justify-end"

const variants: Variants = {
  initial: {
    scale: 1,
    opacity: 0.5
  },
  zoomIn: {
    scale: 1.2,
    opacity: 1,
  },
  zoomOut: {
    scale: 1.0,
    opacity: 0.5,
  }
}

export const Navbar = ({ pages }: Props) => {
  const { asPath } = useRouter()
  return (
    <nav className={navClass}>
      <ul className={listClass}>
        {pages.map(({ key, to, target }, idx) => {
          const addStyle = (!idx && " nav-decoration-x") || (idx === pages.length - 1 && " nav-decoration-y")

          return (
            <motion.li
              key={key}
              variants={variants}
              initial="initial"
              animate={asPath === to ? "zoomIn" : "zoomOut"}
            >
              <Link href={to} scroll={false}>
                <a
                  className={"text-5xl md:text-6xl text-tertiary lowercase m-7 text-shadow transition-fast" + addStyle}
                  target={target}
                >
                  <Translated textKey={key}/>
                </a>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};
