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
    <div className="shadow-xl flex flex-col items-center justify-between w-96 m-2 md:m-0 md:mx-2 pb-5">
      <Image
        src={project.photoUrl}
        alt={project.title}
        width={384}
        height={192}
        objectFit="cover"
      />
      <h6 className="text-2xl my-2">{project.title}</h6>
      <p className="line-clamp-3 text-base font-thin text-center">
        {project.description}
      </p>
    </div>
  );
};
