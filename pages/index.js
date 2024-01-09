// pages/index.js
import Navbar from '../components/Navbar';
import backgroundStyles from '../styles/background.module.css';
import textStyles from '../styles/text-styles.module.css';

const LandingPage = () => {
  return (
    <div className={backgroundStyles.wrapper}>
      <Navbar />
      <main className={backgroundStyles.mainContainer}>
        <h1 className={textStyles.customheading}>Welcome to Cats' Landing Page</h1>
        <p className={textStyles.customparagraph}>Get started by navigating to the Table or Cards page using the links above.</p>
      </main>
    </div>
  );
};

export default LandingPage;
