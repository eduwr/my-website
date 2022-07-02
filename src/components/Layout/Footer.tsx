import Image from "next/image";
import Link from "next/link";
import { NavigatePage } from ".";
import { LanguageButton } from "../LanguageButton";
import { Translated } from "../Translated";

interface Props {
  addressLines: string[];
  pages: NavigatePage[];
}

export const Footer = ({ addressLines, pages }: Props) => {
  return (
    <footer className="flex flex-col px-2 md:px-20">
      <div className="py-8 md:py-16 px-2 sm:px-10 md:px-24 border-b-2 border-grey">
        <h3 className="text-2xl sm:text-4xl text-yellow font-light text-center md:text-left mb-4 md:mb-0">
          <Translated
            textKey="home.footer.email"
            defaultText="vitoria@vitoriacavassin.com"
          />
        </h3>
        <p className="text-base sm:text-xl text-grey text-center md:text-left">
          <Translated textKey={"home.footer.featuredPhrase"}/>
        </p>
      </div>
      <div className="flex py-8 md:py-16 px-10 md:px-24 flex-col-reverse md:flex-row">
        <div className="max-w-xs mr-16">
          <h3 className="text-black text-3xl mb-4">
            <Translated textKey="home.footer.address.title"/>
          </h3>
          {addressLines.map((line) => (
            <p key={line} className="text-base text-grey">
              {line}
            </p>
          ))}
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-black text-3xl mb-4">
            <Translated textKey="home.footer.links.title"/>
          </h3>
          {pages.map(({ key, to }) => (
            <Link key={key} href={to}>
              <a className="text-grey text-base mb-4 transition-all duration-300 hover:underline">
                <Translated textKey={key}/>
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-end justify-between w-full pt-8">
          <a
            className="flex justify-center items-center w-10 h-10 rounded-full border-black border-2 transition-all duration-300 hover:bg-yellow"
            target="_blank"
            href="https://www.instagram.com/vitoriacavassinarquiteta"
            rel="noreferrer"
          >
            <Image
              alt="Instagram"
              src="/icons/instagram.png"
              width={24}
              height={24}
            />
          </a>


          <LanguageButton/>

        </div>

      </div>
      <p className="self-end text-xs text-grey">
        Development By <span className="font-bold">Wilk Technology</span>
      </p>
    </footer>
  );
};
