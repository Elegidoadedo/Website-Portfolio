import type { Project } from "./projects.types";

const projects: Project[] = [
  {
    name: "Popban - a Funko Pop ecommerce",
    link: "https://popban.com",
    image: "images/popban-screen.webp",
    description:
      "It is a project that I single-handedly created and managed using WordPress and WooCommerce. Additionally, I utilized Google tools such as Analytics and AdWords for marketing and tracking purposes, ensuring effective marketing campaigns and accurate tracking of user behavior.",
    stack: ["WORDPRESS"],
  },
  {
    name: "Lord of the dices",
    link: "https://github.com/Elegidoadedo/lord-of-the-dices-bot",
    image: "images/lord-of-the-dices.webp",
    description:
      "Is a project developed using Node.js. It is designed to simulate the rolling of dice within the Telegram messaging platform. Users can interact with the bot by sending commands to roll different types of dice, such as 6-sided, 10-sided, or even custom-sided dice. The bot provides random results for each dice roll, making it a fun and interactive way to play games or make decisions. It utilizes the Telegram Bot API to handle user interactions and deliver responses.",
    stack: ["NODEJS", "TELEGRAM"],
  },
  {
    name: "Portfolio",
    link: "https://github.com/Elegidoadedo/Website-Portfolio",
    image: "images/portfolio-screen.webp",
    description:
      "This portfolio is built with Astro, Tailwind, and TypeScript. It serves as a code playground where I test new stacks and technologies. It allows me to experiment and showcase my skills while exploring different tools and frameworks.",
    stack: ["ASTRO", "TAILWIND"],
  },
];
export default projects;
