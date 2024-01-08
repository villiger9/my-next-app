// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/table">Table</Link>
      <Link href="/cards">Cards</Link>
    </nav>
  );
};

export default Navbar;
