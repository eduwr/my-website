import Link from "next/link";
import { useRouter } from "next/router";
import type { NavigatePage } from ".";
import { useTranslate } from "../../hooks/useTranslate";

interface Props {
  pages: NavigatePage[];
}

export const Navbar = ({ pages }: Props) => {
  const { asPath } = useRouter();
  const { translate } = useTranslate()

  const navClass = ""
  const listClass = ""
  return (
    <nav className={navClass}>
      <ul className={listClass}>
        {pages.map(({ key, to }) => (
          <li key={key}>
            <Link href={to}>
              <a
                className={`${
                  asPath === to && "text-primary"
                } px-4 md:px-6 lg:px-10 text-xl md:text-2xl font-secondary transition-all duration-300 hover:opacity-50 uppercase`}
              >
                {translate(key)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
