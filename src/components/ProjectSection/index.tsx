import { Project, ProjectCard } from "../ProjectCard";

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
    <section className="flex flex-col items-center justify-evenly py-8 h-1/2-screen bg-white">
      <h1 className="text-5xl font-thin uppercase">PROJETOS</h1>
      <div className="flex justify-evenly w-full">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};
