import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.contact}>
      <h1>Contact me here</h1>
      <form id="contact-form">
        <div>
          <label className={styles.formLabel} htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <textarea className={styles.textarea}></textarea>
        <input className={styles.formInput}type="submit" value="Submit" /> 
      </form>
    </div>
  );
}
