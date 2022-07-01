import { ProjectCard } from "../ProjectCard";
import db from "../../data/resources.json";
import { Translated } from "../Translated";
import Link from "next/link";
import { BaseButton } from "../BaseButton";

const projects = db.projects.slice(0, 3);

const containerStyle = "flex flex-col items-center justify-evenly py-12 bg-white relative";

const headerStyle = {
  wrapper: "flex w-full px-10 align-top justify-between",
  title: "text-4xl uppercase whitespace-pre-line leading-normal",
  description: "mx-8 mt-1 text-lg max-w-1/2 text-grey font-thin",
}

export const ProjectSection = () => {
  return (
    <section
      className={containerStyle}>
      <div className={headerStyle.wrapper}>
        <h1 className={headerStyle.title}>
          <Translated textKey="home.projects.title"/>
        </h1>
        <p className={headerStyle.description}>
          <Translated textKey="home.projects.description"/>
        </p>
        <BaseButton>
          <Translated textKey="home.projects.see_more"/>
        </BaseButton>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-evenly w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
      <Link href="/projects">
        <a className="">
          <Translated textKey={"home.projects.see_more"} defaultText={"Ver mais"}/>
        </a>
      </Link>
    </section>
  );
};
