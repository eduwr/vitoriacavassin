import Image from "next/image";
import db from "../../data/resources.json";
import Link from "next/link";

export type Project = ReturnType<() => typeof db.projects[0]>;

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => (
  <Link href={`/projects/${project.id}`} passHref>
    <a className="shadow-xl flex flex-col items-center justify-between w-96 m-2 md:m-0 md:mx-2 pb-5">
      <Image
        src={project.pictures[0]}
        alt={project.name}
        width={384}
        height={192}
        objectFit="cover"
      />
      <h6 className="text-2xl my-2">{project.name}</h6>
      <p className="line-clamp-3 text-base font-thin text-center">
        {project.description}
      </p>
    </a>
  </Link>
);
