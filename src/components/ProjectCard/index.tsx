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
    <div className="flex flex-col items-center justify-between w-1/3 px-8">
      <Image
        src={project.photoUrl}
        alt={project.title}
        width={400}
        height={200}
      />
      <h6 className="text-2xl font-bold my-2">{project.title}</h6>
      <p className="text-base font-thin text-center">{project.description}</p>
    </div>
  );
};
