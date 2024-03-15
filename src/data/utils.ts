export const name = "Shirhabeel Awan";
export const role = "Software Engineer - Web Designer";
export const heroImage = "/assets/Profile-Pic.jpg";

export const locationTitleMap: { [key: string]: string } = {
  "/": "My Base",
  "/journey": "Journey",
  "/sorcery": "Sorcery",
  "/braindumps": "Brain Dumps",
  "/pingme": "Ping Me",
};

import { RiCodeBoxLine, RiComputerLine, RiPaletteLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaRegHandshake,
} from "react-icons/fa";
import { GiJourney, GiFilmProjector } from "react-icons/gi";

import { SiMinutemailer } from "react-icons/si";
import { IoIosLocate } from "react-icons/io";
import { HiRocketLaunch } from "react-icons/hi2";
import {
  BsFillCalendarEventFill,
  BsFillGrid1X2Fill,
  // BsFillPhoneFill,
} from "react-icons/bs";

export const navLinks = [
  { name: "Inside Scoop", path: "/", icon: HiRocketLaunch },
  { name: "Tech Journey", path: "/journey", icon: GiJourney },
  { name: "Code Sorcery", path: "/sorcery", icon: GiFilmProjector },
  // { name: "Brain Dump", path: "/braindumps", icon: GiScrollQuill },
  { name: "Ping Me", path: "/pingme", icon: FaRegHandshake },
];
export const personalInfoData = [
  // { label: "Phone", value: "+1 123-456-7890", icon: BsFillPhoneFill },
  { label: "Location", value: "Bahawalpur, Pk", icon: IoIosLocate },
  { label: "Email", value: "shirhabeelawan@gmail.com", icon: SiMinutemailer },
  {
    label: "Birthday",
    value: "December 25, 2002",
    icon: BsFillCalendarEventFill,
  },
];

///////////////////////// CORRECT KARNY HEIN /////////////////////////
export const socialMediaLinks = [
  { icon: FaFacebook, link: "https://www.facebook.com/shirhabeel.awan.73" },
  { icon: FaInstagram, link: "https://www.instagram.com/shirha.exe/" },
  { icon: FaTwitter, link: "https://twitter.com/awan_shirhabeel" },
  { icon: FaGithub, link: "https://github.com/shirhabeel" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/shirhabeel-awan" },
];

export const servicesData = [
  {
    title: "Web Development",
    description: "Creating responsive and interactive web applications",
    icon: RiCodeBoxLine,
  },
  {
    title: "Software Engineering",
    description: "Building scalable and robust software solutions",
    icon: RiComputerLine,
  },
  {
    title: "Web Desigining",
    description: "Designing visually appealing UI & UX",
    icon: RiPaletteLine,
  },
  {
    title: "React Development",
    description: "Developing user interfaces using React framework",
    icon: FaReact,
  },
  {
    title: "UI Design",
    description:
      "Designing user interfaces that are intuitive, user-friendly, and visually appealing.",
    icon: BsFillGrid1X2Fill,
  },
];

// export const clientImages = [
//   { name: "Client 1", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 2", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
// ];

export const AboutMe =
  "I am Shirhabeel Awan, a graduating software engineer and Web Designer specializing in web development using ReactJS. With a keen eye for detail and a passion for creating exceptional user experiences, I am dedicated to delivering high-quality projects that seamlessly blend functionality and aesthetics. My academic background, combined with my hands-on experience in web development and design, has equipped me with a strong foundation in problem-solving, collaboration, and innovation. As an adaptable and enthusiastic individual, I thrive in dynamic environments and continuously seek opportunities to learn and grow. With a drive to make a positive impact through technology, I am excited to embark on new challenges and contribute to the ever-evolving world of software development.";

export const events = [
  {
    id: 1,
    title: "BS Software Engineering, Islamia University of Bahawalpur",
    date: "2020 - 2024",
    description:
      "Studied software engineering with a focus on web development and related technologies.",
  },
  {
    id: 2,
    title: "Volunteer - Hacktober Fest",
    date: "2022",
    description:
      "Volunteered in Hacktoberfest 2023 and delivered a presentation on GitHub to peers. Assisted in organizing the event and provided technical assistance to participants.",
  },
];

/* 
  These will use below in upcoming days.
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
*/

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiOracle,
  SiGit,
  SiFigma,
} from "react-icons/si";

export const techStackData = [
  { name: "ReactJS", icon: SiReact },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwindcss", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  // { name: "NextJS", icon: SiNextdotjs },
  { name: "Oracle", icon: SiOracle },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  // { name: "Node.js", icon: SiNodedotjs },
  // { name: "MongoDB", icon: SiMongodb },
  // { name: "Mysql", icon: SiMysql },
  // { name: "Express.js", icon: SiExpress },
];

export const knowledgeList = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "ReactJS" },
  { id: 3, name: "HTML" },
  { id: 4, name: "CSS" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "Frontend Development" },
  { id: 7, name: "UI/UX Design" },
  { id: 8, name: "Graphic Design" },
  { id: 9, name: "Problem Solving" },
  { id: 10, name: "Teamwork" },
  { id: 11, name: "Communication" },
  { id: 12, name: "Leadership" },
  { id: 13, name: "Project Management" },
  { id: 14, name: "Time Management" },
  { id: 15, name: "Creativity" },
];

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  project: string;
  techUsed: string;
  repoLink: [string, string];
  liveLink?: string;
}

export const projectList: Project[] = [
  {
    id: 1,
    title: "OmniFood",
    project: "Web Development",
    category: "Front-end",
    description: `<li>During my learning journey of HTML & CSS, I built a front-end design for a recipe web application which are responsive too.</li>`,
    image: "/assets/omnifood.jpg",
    techUsed: "HTML, SASS & JS ",
    liveLink: "https://omnifood-shirha.netlify.app/",
    repoLink: [
      "github",
      "https://github.com/Shirhabeel/omnifood-fully-responsive",
    ],
  },
  {
    id: 2,
    title: "Rainy-Wainy",
    project: "Web Application",
    category: "Web",
    description: `<p>The real-time weather application. I built this website after i finished my JS course. So as a practice I implemented JavaScript async/await functions.</p>`,
    image: "/assets/rainy-wainy.jpg",
    techUsed: "HTML, CSS & JS",
    liveLink: "https://rainy-wainy-shirha.netlify.app/",
    repoLink: ["GitHub", "https://github.com/Shirhabeel/weather-app"],
  },
  {
    id: 3,
    title: "Forkify",
    project: "Web App",
    category: "Web",
    description: `A recipe Application in which users can add their own recipe and also search many recipes they want.`,
    image: "/assets/forkify.jpg",
    techUsed: "HTML, CSS, JS, GitHub API",
    liveLink: "https://forkify-by-shirhabeel.netlify.app/",
    repoLink: ["GitHub", "https://github.com/Shirhabeel/forkify"],
  },
  {
    id: 4,
    title: "Rolling Dice Game",
    project: "Web Application Game",
    category: "Web",
    description: `The Rolling Dice is a web-based game application designed and developed by Shirhabeel Awan. Two users can play this game and when a user reached at 100 score he/she win and its side gets black as a mark for winner`,
    image: "/assets/rolling-dice.jpg",
    techUsed: "HTML , CSS, JS",
    liveLink: "https://rolling-dice-game-shirha.netlify.app/",
    repoLink: ["GitHub", "https://github.com/Shirhabeel/Pig-Game"],
  },
];
