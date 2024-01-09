// components/Navbar.js
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">Home</a>
      <a href="/table">Table</a>
      <a href="/cards">Cards</a>
    </nav>
  );
};

export default Navbar;
