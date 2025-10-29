import React from "react";
import style from "./contactForm.module.css";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div>
      <h1>Contact me here</h1>
      <form className={style.contactForm}>
        <div>
          <label className={style.formLabel} htmlFor="name">Name</label>
          <input className={style.formInput} type="text" id="name" />
        </div>
        <div>
          <label className={style.formLabel} htmlFor="email">Email</label>
          <input className={style.formInput} type="email" id="email" />
        </div>
        <textarea className={style.textarea}></textarea>
        <input className={style.formInput}type="submit" value="Submit" /> 
      </form>
    </div>
  );
}
