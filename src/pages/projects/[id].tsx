import type { GetStaticPaths, NextPage, GetStaticProps } from "next";
import db from "../../utils/resources.json";

interface Props {
  project: ReturnType<() => typeof db.projects[0]>;
}

const ProjectDetails: NextPage<Props> = ({ project }) => {
  return (
    <div className="detail">
      <h1>{project.name}</h1>
      <span>{project.type}</span>
      <p>{project.description}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = db.projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = db.projects.find((p) => p.id.toString() === params?.id);

  return { props: { project } };
};

export default ProjectDetails;
