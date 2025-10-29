export interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "This website",
    date: "2025",
    description:
      "This is the website I created for Hack4Impact. It shows off some of my work, my resume, my blog, and a little about me.",
    image: "/screen.webp",
    imageAlt: "Description of image",
    link: "/",
  },
  {
    title: "A cool project",
    date: "2025",
    description:
      "Description of said project",
    image: "/project_image.webp",
    imageAlt: "Description of image",
    link: "project-2",
  },
  {
    title: "Another cool project",
    date: "2025",
    description:
      "Description of said project",
    image: "/project_image.webp",
    imageAlt: "Description of image",
    link: "project-3",
  },
];

 export default projects;
