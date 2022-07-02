import Image from "next/image";
import db from "../../utils/resources.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { LANGUAGES } from "../../contexts/TranslateContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { BREAKPOINTS } from "../../utils/breakpoints";

export type Project = ReturnType<() => typeof db.projects[0]>;

interface Props {
  project: Project;
}

const linkStyle = "flex group relative grayscale hover:grayscale-0 transition-all duration-1000 border-4 overflow-hidden"
const infoStyle = "translate-y-20 group-hover:translate-y-0 flex flex-col items-start absolute bottom-0 px-5 w-full h-20 bg-black opacity-50 transition-all duration-1000"

export const ProjectCard = ({ project }: Props) => {
  const { locale } = useRouter();
  const { width } = useWindowDimensions();

  const isSmall = width && width <= BREAKPOINTS.MEDIUM;

  const _project: Project = {
    ...project,
    ...(project.dictionary[locale as LANGUAGES] || {})
  }

  return (
    <Link href={`/projects/${_project.id}`} passHref>
      <a
        className={linkStyle}>
        <Image
          src={_project.pictures[0]}
          alt={_project.name}
          width={isSmall ? 600 : 360}
          height={isSmall ? 360 : 600}
          objectFit="cover"
        />
        <div
          className={infoStyle}>
          <h6 className="text-white text-2xl md:text-lg lg:text-2xl my-2">{_project.name}</h6>
          <p className="text-base font-thin text-white opacity-70">
            {_project.location}
          </p>
        </div>
      </a>
    </Link>
  );
};
