import React from "react";

function ScrollButton() {
  return (
    <button
      className="relative row-start-4 col-start-3 justify-self-center self-center col-end-5 border-[3px] border-solid rounded-full text-white md:row-start-5 md:place-self-center"
      type="button"
      name="Scroll Down"
      title="Scroll Down"
      onClick={() => {
        scrollTo({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="relative top-[2px] w-10 h-12 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}

export { ScrollButton };
