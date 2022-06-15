import Image from "next/image";

export interface Project {
  id: string;
  photoUrl: string;
  title: string;
  description: string;
}

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-96 min-w-fit px-8 pb-5"
      style={{ minWidth: "24rem" }}
    >
      <div className="relative w-96 h-48">
        <Image
          src={project.photoUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h6 className="text-2xl my-2">{project.title}</h6>
      <p className="line-clamp-3 text-base font-thin text-center">
        {project.description}
      </p>
    </div>
  );
};
