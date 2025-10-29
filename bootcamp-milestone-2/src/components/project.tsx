import React from 'react';
import Image from "next/image"
import style from './project.module.css'
import type { Project } from "../app/projectData";

export default function ProjectItem(props: Project) {
  return (
    <div className={style.projectItem}>
      <h2><a href={props.link}>{props.title}</a></h2>
			<Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
      <p>{props.description}</p>
			<p>{props.date}</p>
			<hr />
	  </div>
  );
}
