import ipTrackerImg from "./../assets/img/ip-tracker.webp";
import toDoAppImg from "./../assets/img/todo-app.webp";
import countryQuizImg from "./../assets/img/quiz-game.webp";
import portfolioImg from "./../assets/img/portfolio.webp";

const projects = [
  {
    id: 1,
    title: "IP Tracker App",
    img: {
      src: ipTrackerImg,
      alt: "IP Tracker - Tool for finding server locations",
    },
    description:
      "Tracks the IP Address or Domain Name inserted by fetching data from <strong>Ipify API</strong> and placed a markup on its location using the coordinates provided, and a global map provided by <strong>Leaflet</strong>.",
    demo: "https://realdiegor.github.io/ip_tracker/",
    source: "https://github.com/realDiegoR/ip_tracker",
    technologies: [
      { id: 1, name: "html" },
      { id: 2, name: "css" },
      { id: 3, name: "javascript" },
    ],
  },
  {
    id: 2,
    title: "ToDo App",
    img: {
      src: toDoAppImg,
      alt: "Todo App - An app for managing your daily goals",
    },
    description:
      "Manage your daiy tasks by creating, marking as active or completed, filtering and deleting ToDo's. This app features fetching from <strong>LocalStorage</strong> and multiple tabs synchronization.",
    demo: "https://realdiegor.github.io/Todo-App-React/",
    source: "https://github.com/realDiegoR/Todo-App-React",
    technologies: [
      { id: 1, name: "react" },
      { id: 2, name: "sass" },
    ],
  },
  {
    id: 3,
    title: "Country Quiz",
    img: {
      src: countryQuizImg,
      alt: "Country Quiz - A Game for those who love geography ",
    },
    description:
      "Fetches the data it needs from the <strong>REST Countries API</strong>. It chooses a question and a country, three thinkfully wrong options and the correct one among the others. It contains a timer and a correct counter.",
    demo: "https://realdiegor.github.io/Country-quiz/",
    source: "https://github.com/realDiegoR/Country-quiz",
    technologies: [
      { id: 1, name: "html" },
      { id: 2, name: "css" },
      { id: 3, name: "javascript" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    img: {
      src: portfolioImg,
      alt: "Personal website that showcases my professional skills.",
    },
    description:
      "My personal and professional skills and progress. It features an amazing <strong>chat-like animation</strong> made with JavaScript, applying <strong>recursion</strong> on a tree data structure.",
    demo: "https://www.realdiegor.dev/",
    source: "https://github.com/realDiegoR/portfolio",
    technologies: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],
  },
];

export default projects;
