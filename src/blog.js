var blogContainer = document.getElementById('blog-container');
var Blogs = [
    {
        title: "Post 1",
        date: "2025",
        description: "Description of said post",
        image: "./avila.webp",
        imageAlt: "Description of image",
        slug: "post-1",
    },
    {
        title: "Post 2",
        date: "2025",
        description: "Description of said post",
        image: "./avila.webp",
        imageAlt: "Description of image",
        slug: "post-2",
    },
];
Blogs.forEach(function (blog) {
    var postContainer = document.createElement("section");
    var title = document.createElement("h2");
    var title_link = document.createElement("a");
    title_link.textContent = blog.title;
    title_link.href = "../blogs/".concat(blog.slug, ".html");
    title.appendChild(title_link);
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var description = document.createElement("p");
    description.textContent = blog.description;
    postContainer.appendChild(title);
    postContainer.appendChild(image);
    postContainer.appendChild(description);
    if (blogContainer != null) {
        blogContainer.appendChild(postContainer);
        blogContainer.append(document.createElement("hr"));
    }
});
