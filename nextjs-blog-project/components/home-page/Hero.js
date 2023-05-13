import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image of Udemy instructor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Benja</h1>
      <p>I like reading - especially medieval fantasy such as LOTR or GOT</p>
    </section>
  );
}
