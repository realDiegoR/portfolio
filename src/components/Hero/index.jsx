import React from "react";
import { HeroButtton } from "./HeroButton";
import { ScrollButton } from "./ScrollButton";
import { useAnimatedText } from "./useAnimatedText";

function Hero({ refference }) {
  const { textValue, answerQuestion, textIsChanging, chosenAnswer } =
    useAnimatedText();
  return (
    <header
      className={`grid grid-cols-6 grid-rows-5 justify-items-center w-full h-screen bg-hero-littlest bg-cover bg-center text-[#16303b] font-luxury xs:bg-hero-mobile md:bg-hero-desktop lg:bg-fixed`}
      id="home"
      ref={refference}
    >
      <div className="col-start-1 row-start-2 col-end-7 tracking-tigh space-y-3 antialiased sm:space-y-4 lg:col-end-6 xl:col-end-5">
        <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl">
          Diego Reyes
        </h1>
        <span className="pl-[2px] text-2xl font-semibold leading-7 lg:text-4xl">
          Frontend Developer
        </span>
        <div className="pt-6 font-medium select-none lg:pt-10">
          <span
            className={`text-xl lg:text-2xl relative after:content-['|'] after:relative after:bottom-[2px] after:left-[3px] after:inline-block   ${
              textIsChanging
                ? undefined
                : "after:motion-safe:animate-text-machine"
            }`}
          >
            {textValue}
          </span>
          <div className="mt-2 space-x-4 lg:mt-4">
            <HeroButtton
              type="option"
              text="Why should I?"
              answerQuestion={answerQuestion}
              triggeringText={textValue}
            />
            <HeroButtton
              type="option"
              text="Of course!"
              answerQuestion={answerQuestion}
              triggeringText={textValue}
            />
            <HeroButtton
              type={"navigation"}
              text="projects"
              answerQuestion={answerQuestion}
              triggeringText={textValue}
              chosenAnswer={chosenAnswer.current}
            />
            <HeroButtton
              type={"navigation"}
              text="contact"
              answerQuestion={answerQuestion}
              triggeringText={textValue}
              chosenAnswer={chosenAnswer.current}
            />
          </div>
        </div>
      </div>
      <ScrollButton />
    </header>
  );
}

export { Hero };
