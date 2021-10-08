import React from "react";
import styles from "./Hero.scss";

const Hero = () => (
  <header className={styles.component}>
      <h2 className={styles.title}>Things to do</h2>
      <img className={styles.image} src="https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress%26cs=tinysrgb%26dpr=3%26h=750%26w=1260"></img>
  </header>
);

export default Hero;