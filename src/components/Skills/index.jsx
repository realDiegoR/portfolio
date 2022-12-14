import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { TextContent } from "../common/TextContent";
import { SkillsItem } from "./SkillsItem";

function Skills() {
  return (
    <section className="m-sm lg:m-lg">
      <SectionTitle text="Skills" />
      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="xl:w-2/3">
          <TextContent text="I have managed to gather these skills through all my never-ending process as a self-taught developer, deepening on them for being able of provide the appropriate solution to a problem." />
        </div>
        <ul className="flex flex-wrap gap-6 justify-evenly lg:gap-10">
          <SkillsItem name="HTML" iconName="html" />
          <SkillsItem name="CSS" iconName="css" />
          <SkillsItem name="SASS" iconName="sass" />
          <SkillsItem name="JavaScript" iconName="javascript" />
          <SkillsItem name="ReactJS" iconName="react" />
          <SkillsItem name="Tailwind CSS" iconName="tailwind" />
          <SkillsItem name="Vite" iconName="vite" />
          <SkillsItem name="Git" iconName="git" />
        </ul>
      </div>
    </section>
  );
}

export { Skills };
