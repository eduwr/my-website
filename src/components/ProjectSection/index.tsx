import { ProjectCard } from "../ProjectCard";
import db from "../../utils/resources.json";
import { Translated } from "../Translated";
import { BaseButton } from "../BaseButton";

const projects = db.projects.slice(0, 4);

const containerStyle = "flex flex-col items-center justify-evenly bg-white relative";

const headerStyle = {
  wrapper: "flex md:flex-row w-full px-5 sm:px-20 mt-12 mb-8 align-top justify-between",
  title: "text-3xl sm:text-4xl uppercase whitespace-pre-line leading-normal",
  description: "hidden md:flex mx-8 text-xs md:text-lg max-w-1/2 text-grey font-thin",
}

const contentStyle = "flex gap-2 px-5 md:flex-row flex-col items-center justify-evenly w-full mb-12"

export const ProjectSection = () => {
  return (
    <section
      className={containerStyle}>
      <div className={headerStyle.wrapper}>
        <h1 className={headerStyle.title}>
          <Translated textKey="home.projects.title"/>
        </h1>
        <p className={headerStyle.description}>
          <Translated textKey="home.projects.description"/>
        </p>
        <BaseButton to="/projects">
          <Translated textKey="home.projects.see_more"/>
        </BaseButton>
      </div>

      <div className={contentStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
};
