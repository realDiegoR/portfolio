import React from "react";
import { Icon } from "../Icon";

function SkillsItem({ name, iconName }) {
  return (
    <li className="flex flex-col w-20 justify-center items-center text-center leading-4">
      <Icon type={iconName} />
      {name}
    </li>
  );
}

export { SkillsItem };