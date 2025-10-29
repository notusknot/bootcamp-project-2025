import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="resume">
      <h1>This is my awesome resume</h1>
      <a href="/H4I_resume.pdf" download>Download Resume</a>
      <hr />
      <section>
        <h2>Education</h2>
        <div className="entry">
          <h3 className="entry-title">Bachelor of Science in City & Regional Planning</h3>
          <p className="entry-info">California Polytechnic State University, San Luis Obispo | Expected Graduation May 2029</p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Experience</h2>
        <div className="entry">
          <h3 className="entry-title">Linux YouTube channel + teaching</h3>
          <p className="entry-info">Self-employed | October 2020 - Present</p>
          <p className="entry-description">Created a <a href="https://www.youtube.com/@notusknot3002">YouTube channel</a> to teach Linux configuration. Assisted people on Discord and GitHub with troubleshooting Linux systems.</p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Projects</h2>
        <div className="entry">
          <h3 className="entry-title">This website</h3>
          <p className="entry-info">Personal website using HTML and CSS.</p>
          <p className="entry-description">I followed the Hack4Impact Starter Pack to create a personal portfolio website.</p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Coursework</h2>
        <ul className="course-list">
          <li>CSC202: Data Structures</li>
          <li>MATH142: Calculus II</li>
          <li>COMS101: Public Speaking</li>
          <li>CRP212: Intro to Urban Planning</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>Linux, NixOS, Bash</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Git & GitHub</li>
          <li>Rust, Go</li>
        </ul>
      </section>
    </div>
  );
}
