var blogContainer = document.getElementById('blog-container');
var Blogs = [
    {
        title: "A cool post",
        date: "7/28/2025 - 8/30/2025",
        description: "Description of said post",
        image: "./avila.webp",
        imageAlt: "Description of image",
        slug: "post-1",
    },
    {
        title: "A cool post",
        date: "7/28/2025 - 8/30/2025",
        description: "Description of said post",
        image: "./avila.webp",
        imageAlt: "Description of image",
        slug: "post-2",
    },
    {
        title: "A cool post",
        date: "7/28/2025 - 8/30/2025",
        description: "Description of said post",
        image: "./avila.webp",
        imageAlt: "Description of image",
        slug: "post-3",
    },
];
Blogs.forEach(function (blog) {
    var postContainer = document.createElement("section");
    var title = document.createElement("h2");
    title.textContent = blog.title;
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
