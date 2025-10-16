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

Blogs.forEach((blog) => {
  const postContainer = document.createElement("section")

  const title = document.createElement("h2")
  const title_link = document.createElement("a")
  title_link.textContent = blog.title
  title_link.href = `../blogs/${blog.slug}.html`
  title.appendChild(title_link)

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
