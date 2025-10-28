export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Post 1",
    date: "2025",
    description:
      "Description of said post",
    image: "./avila.webp",
    imageAlt: "Description of image",
    slug: "post-1",
  },
  {
    title: "Post 2",
    date: "2025",
    description:
      "Description of said post",
    image: "./avila.webp",
    imageAlt: "Description of image",
    slug: "post-2",
  },
];

 export default blogs;
