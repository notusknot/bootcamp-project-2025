import styles from "./page.module.css";
import Image from "next/image"

export default function Home() {
  return (
    <div className={styles.page}>
      
      <div>
        <h1>This is my awesome portfolio</h1>
        <hr />
        <section><h2>This website</h2>
          <Image src="/screen.png" width={100} height={100} alt="A screenshot of this website" />
          <div className="project-details">
            <p className="project-name">My personal website</p>
            <p className="project-description">This is the website I created for Hack4Impact. It shows off some of my work, my resume, my blog, and a little about me.</p>
            <a href="/">View live (you're already on it)</a>
          </div>
        </section>
        <hr />
        <section>
          <h2>A cool project</h2>
          <p> Description of said project</p>
        </section>
        <hr />
        <section>
          <h2>A cool project</h2>
          <p> Description of said project</p>
        </section>
      </div>

      
    </div>
  );
}
