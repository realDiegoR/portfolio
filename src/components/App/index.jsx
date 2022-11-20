import React from "react";

// (async function () {
//   if (!("scrollBehavior" in document.documentElement.style)) {
//     await import("scroll-behavior-polyfill");
//   }
// })();
import("../../features/scrollBehaviorPolyfill");

import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";
import { About } from "../About";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { useIntersectionObserver } from "./useIntersectionObserver";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(
    window.innerWidth >= 768
  );

  React.useEffect(() => {
    window.addEventListener("resize", (ev) => {
      setSidebarIsOpen(ev.target.innerWidth >= 768);
    });
  }, []);

  const { activeNavItem, home, whoami, projects, contact } =
    useIntersectionObserver();

  return (
    <>
      <SidebarMenu
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        activeNavItem={activeNavItem}
      />
      <div className="transition-all duration-700 md:pl-60 lg:pl-72">
        <Hero
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          refference={home}
        />
        <main className="w-11/12 max-w-5xl m-auto font-casual">
          <About refference={whoami} />
          <Skills />
          <Projects refference={projects} />
          <Contact refference={contact} />
          <p className="text-center mt-10 mb-5 lg:mt-20 lg:mb-8">
            Made with 💙 by{" "}
            <a
              href="https://www.linkedin.com/in/diegoreyescabrera/"
              className="underline cursor-pointer text-quaternary hover:text-terciary"
              target="_blank"
              rel="noreferrer"
            >
              Diego Reyes
            </a>
          </p>
        </main>
      </div>
    </>
  );
}

export { App };
