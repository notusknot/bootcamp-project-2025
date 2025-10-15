type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogContainer = document.getElementById('blog-container');

const Blogs: Blog[] = [
  {
    title: "A cool post",
    date: "2025",
    description:
      "Description of said post",
    image: "./avila.webp",
    imageAlt: "Description of image",
    slug: "post-1",
  },
  {
    title: "A cool post",
    date: "2025",
    description:
      "Description of said post",
    image: "./avila.webp",
    imageAlt: "Description of image",
    slug: "post-2",
  },
  {
    title: "A cool post",
    date: "2025",
    description:
      "Description of said post",
    image: "./avila.webp",
    imageAlt: "Description of image",
    slug: "post-3",
  },
];

Blogs.forEach((blog) => {
  const postContainer = document.createElement("section")

  const title = document.createElement("h2")
  title.textContent = blog.title

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const description = document.createElement("p")
  description.textContent = blog.description
  
  postContainer.appendChild(title)
  postContainer.appendChild(image)
  postContainer.appendChild(description)

  if (blogContainer != null) {
    blogContainer.appendChild(postContainer)
    blogContainer.append(document.createElement("hr"))
  }
})
