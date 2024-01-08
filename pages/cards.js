// pages/cards.js
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const CardsPage = ({ facts }) => {
  return (
    <div>
      <Navbar />
      <h1>Cards Page</h1>
      <Carousel facts={facts} />
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
