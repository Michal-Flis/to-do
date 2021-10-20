import React from 'react';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';
import Container from '../Container/Container';

const FAQ = () => (
  <Container>
    <Hero background={faqData.image} titleText={faqData.title} />
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;