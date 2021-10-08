import React from 'react';
import PropsTypes from 'prop-types';
import styles from "./Hero.scss";

const Hero = props => (

  <header className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img className={styles.image} src={props.images} />
  </header>
);

export default Hero;

Hero.propTypes = {
    titleText: PropsTypes.node.isRequired,
};