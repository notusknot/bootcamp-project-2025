import styles from "./page.module.css";
import BlogPreview from "@/components/blogPreview"
import blogs from "../blogData"

export default function Home() {
  return (
    <div className={styles.blog}>
      <h1> This is my awesome blog </h1>
      <hr />
      {blogs.map(blog =>
        <BlogPreview key={blog.slug} {...blog} />
      )}
    </div>
  );
}
