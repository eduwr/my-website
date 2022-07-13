import { Navbar } from "./Navbar";
import { NavigatePage } from ".";
import { useRouter } from "next/router";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

interface Props {
  pages: NavigatePage[];
}

const variants: Variants = {
  hover: {
    scale: 1.2,
    originX: 0,
  },
};

export const Header = ({ pages }: Props) => {
  const { asPath } = useRouter();
  const routeParams = asPath.split("/").filter(Boolean);

  const isHidden = routeParams.length >= 2;

  return (
    <header
      className={`flex w-full pt-5 items-top justify-center sm:justify-between h-32 md:h-40 bg-gradient-to-b from-tertiary-content ${
        isHidden && "hidden lg:flex"
      }`}
    >
      <Link href={"/"} passHref>
        <motion.a
          variants={variants}
          whileHover="hover"
          className="ml-8 hidden sm:inline mb-10"
        >
          <Image
            src="/assets/logo/logo-large.png"
            objectFit="contain"
            width={250}
            height={100}
            alt="Wilk Technology Logo"
          />
        </motion.a>
      </Link>

      <Navbar pages={pages} />
    </header>
  );
};
