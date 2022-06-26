import Image from "next/image";
import db from "../../data/resources.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { LANGUAGES } from "../../contexts/TranslateContext";

export type Project = ReturnType<() => typeof db.projects[0]>;

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const { locale } = useRouter();

  const _project: Project = {
    ...project,
    ...(project.dictionary[locale as LANGUAGES] || {})
  }
  return (
    <Link href={`/projects/${_project.id}`} passHref>
      <a className="shadow-xl flex flex-col items-center justify-between w-96 m-2 md:m-0 md:mx-2 pb-5">
        <Image
          src={_project.pictures[0]}
          alt={_project.name}
          width={384}
          height={192}
          objectFit="cover"
        />
        <h6 className="text-2xl my-2">{_project.name}</h6>
        <p className="line-clamp-3 text-base font-thin text-center">
          {_project.description}
        </p>
      </a>
    </Link>
  );
};
