// components/Navbar.js
import { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={`${styles.navbar} ${visible ? '' : styles.hidden}`}>
      <a href="/">Home</a>
      <a href="/table">Table</a>
      <a href="/cards">Cards</a>
    </nav>
  );
};

export default Navbar;
