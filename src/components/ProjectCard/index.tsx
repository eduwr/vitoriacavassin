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
      <a
        className="flex group relative grayscale hover:grayscale-0 transition-all duration-1000 border-4 overflow-hidden">
        <Image
          src={_project.pictures[0]}
          alt={_project.name}
          width={360}
          height={600}
          objectFit="cover"
        />
        <div
          className="translate-y-20 group-hover:translate-y-0 flex flex-col items-start absolute bottom-0 px-5 w-full h-20 bg-black opacity-50 transition-all duration-1000 ">
          <h6 className="text-white text-2xl my-2">{_project.name}</h6>
          <p className="line-clamp-3 text-base font-thin text-center text-white opacity-70">
            {_project.location}
          </p></div>
      </a>
    </Link>
  );
};
