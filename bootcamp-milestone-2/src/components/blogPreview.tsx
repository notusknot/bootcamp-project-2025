import React from 'react';
import Image from "next/image"
import style from './blogPreview.module.css'
import type { Blog } from "../app/blogData";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogPreview}>
      <div>
        <h2>{props.title}</h2>
				<Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
      <hr />
	  </div>
  );
}
