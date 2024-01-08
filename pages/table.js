// pages/table.js
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/table.module.css';

const TablePage = () => {
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://catfact.ninja/breeds?page=${currentPage}`);
        const data = await response.json();
        setBreeds(data.data);
        setTotalPages(data.last_page);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Navbar />
      <h1>Table Page</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Country</th>
            <th>Origin</th>
            <th>Coat</th>
            <th>Pattern</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed) => (
            <tr key={breed.breed}>
              <td>{breed.breed}</td>
              <td>{breed.country}</td>
              <td>{breed.origin}</td>
              <td>{breed.coat}</td>
              <td>{breed.pattern}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePage;