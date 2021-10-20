import React from 'react';
import { infoData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero background={infoData.image} titleText={infoData.title} />
    <p>{infoData.description}</p>
  </Container>
);

export default Info;