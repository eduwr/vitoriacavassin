import Image from "next/image";
import { ProjectCard } from "../ProjectCard";

interface Project {
  id: string;
  photoUrl: string;
  title: string;
  description: string;
}

const project: Project = {
  id: "id",
  photoUrl: "/assets/images/yoga.png",
  title: "Yoga Spa",
  description:
    "Yoga spa desenvovido com amor e carinho. Yoga spa desenvovido com amor e carinho. Yoga spa desenvovido com amor e carinho.",
};

const projects = [project, project, project];

export const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center py-8 px-20 h-1/2-screen relative bg-white">
      <h1 className="text-5xl font-thin mb-4">PROJETOS</h1>
      <div className="flex justify-center w-full relative">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};
