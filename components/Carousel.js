// components/Carousel.js
import { useState } from 'react';
import styles from '../styles/carousel.module.css';

const Carousel = ({ facts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : facts.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < facts.length - 1 ? prevIndex + 1 : 0));
  };

  // Check if facts is undefined or empty
  if (!facts || facts.length === 0) {
    return <p>No facts available</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.button} onClick={handlePrev}>
          Previous
        </button>
        <p className={styles.fact}>{facts[currentIndex].fact}</p>
        <button className={styles.button} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
