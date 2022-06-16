import type { NextPage } from "next";
import { useRouter } from "next/router";
import db from "../../data/resources.json";

const projects = db.projects;

const ProjectDetails: NextPage = () => {
  const { query } = useRouter();

  const project = projects.find((project) => project.id === Number(query.id));

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className="detail">
      <h1>{project.name}</h1>
      <span>{project.type}</span>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
