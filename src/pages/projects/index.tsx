import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../../components/ProjectCard";
import resources from "../../utils/resources.json";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vitória Cavassin | Projetos</title>
        <meta name="description" content="Vitória Cavassin Arquiteta"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <section className="flex flex-wrap justify-center gap-4">
        {resources.projects.map((project) => {
          return <ProjectCard key={project.id} project={project}/>;
        })}
      </section>
    </div>
  );
};

export default Projects;
