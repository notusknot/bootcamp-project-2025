import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>This is Gabe's Hack4Impact website</h1>
      <div className="about">
        <img width="100%" src="avila.webp" alt="A pretty picture of Avila Beach" />
        <p>And this is a paragraph with a little about myself. I'm a <em> first-year</em> student at <strong>Cal Poly, SLO</strong> excited to apply for <strong>Hack4Impact</strong>. I have a lot of experience with computers (especially Linux), and would love to use that experience to help others.</p>
        <p>In my free time, I also love playing drums and spending time with friends and family. At Cal Poly, I'm also excited to try <em>rock climbing</em> and <em>triathlon</em>!</p>
      </div>

    </div>
  );
}
