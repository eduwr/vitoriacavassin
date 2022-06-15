import { ProjectCard } from "../ProjectCard";
import db from "../../data/resources.json";

const projects = db.projects.slice(0, 3);

export const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center justify-evenly py-8 md:h-1/2-screen md:min-h-[26rem] bg-white">
      <h1 className="text-4xl font-thin uppercase mb-5 md:mb-0">PROJETOS</h1>
      <div className="flex md:flex-row flex-col items-center justify-evenly w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
