import Link from "next/link";
import { NavigatePage } from "."; 
import { Translated } from "../Translated";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

interface Props {
  addressLines: string[];
  pages: NavigatePage[];
}

const socialMediaList = [
  {
    key: "github",
    url: "www.github.com/eduwr",
    Icon: GithubIcon,
  },
  {
    key: "linkedin",
    url: "https://www.linkedin.com/in/eduardo-wronscki-ricardo-0633421b/",
    Icon: LinkedinIcon
  },
  {
    key: "twitter",
    url: "https://twitter.com/eduwric",
    Icon: TwitterIcon
  },
  {
    key: "instagram",
    url: "https://www.instagram.com/eduwric/",
    Icon: InstagramIcon
  }
]

export const Footer = ({ addressLines, pages }: Props) => {

  return (
    <footer className="flex flex-col px-2 md:px-20">
      {/* Featured Email */}
      <div className="py-8 md:py-16 px-2 sm:px-10 md:px-24 border-b-2 border-secondary-content">
        <h3 className="text-2xl sm:text-4xl text-primary font-secondary text-center md:text-left mb-4 md:mb-0">
          <Translated
            textKey="home.footer.email"
            defaultText="vitoria@vitoriacavassin.com"
          />
        </h3>
        <p className="text-base sm:text-xl text-secondary-content text-center md:text-left">
          <Translated textKey={"home.footer.featuredPhrase"}/>
        </p>
      </div>
      <div className="flex relative py-8 md:py-16 px-10 md:px-24 flex-col-reverse md:flex-row">
        {/* Office - Address */}
        <div className="max-w-xs mr-16">
          <h3 className="text-tertiary text-3xl mb-4 opacity-90">
            <Translated textKey="home.footer.address.title"/>
          </h3>
          {addressLines.map((line) => (
            <p key={line} className="text-base text-secondary-content">
              {line}
            </p>
          ))}
        </div>
        {/* Links */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-tertiary text-3xl mb-4 opacity-90">
            <Translated textKey="home.footer.links.title"/>
          </h3>
          {pages.map(({ key, to, target }) => (
            <Link key={key} href={to}>
              <a
                target={target}
                className="text-secondary-content text-base mb-4 transition-all duration-300 hover:underline"
              >
                <Translated textKey={key}/>
              </a>
            </Link>
          ))}
        </div>
        {/* Social Media */}
        <div className="flex absolute right-0 top-5 items-end justify-between ">
          {socialMediaList.map(({ key, Icon }) => (
            <a
              key={key}
              className="flex justify-center items-center w-12 h-12 ml-3 border-2 border-tertiary rounded-full overflow-hidden transition-all duration-300 hover:bg-primary"
              target="_blank"
              href="https://www.instagram.com/eduwric"
              rel="noreferrer"
            >
              <Icon />
              <VisuallyHidden>{key}</VisuallyHidden>
            </a>
          ))}
        </div>
      </div>
      {/* Developer Signature */}
      <p className="self-end text-xs text-secondary-content">
        Development By <span className="font-bold">Wilk Technology</span>
      </p>
    </footer>
  );
};
