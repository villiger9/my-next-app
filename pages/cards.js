// pages/cards.js
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import backgroundStyles from '../styles/background.module.css';
import Carousel from '../components/Carousel';
import textStyles from '../styles/text-styles.module.css';


const CardsPage = ({ facts }) => {
  return (
    <div className={backgroundStyles.wrapper}>
      <Navbar />
      <main className={backgroundStyles.mainContainer}>
      <h1 className={textStyles.customheading}>Cats' Cards</h1>
      <Carousel facts={facts} />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const baseUrl = 'https://catfact.ninja/facts?page=';
  const totalPages = 34; // Update this if the number of pages changes
  let allFacts = [];

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${baseUrl}${page}`);
    const data = await response.json();
    allFacts = [...allFacts, ...data.data];
  }

  return {
    props: {
      facts: allFacts,
    },
  };
}

export default CardsPage;
