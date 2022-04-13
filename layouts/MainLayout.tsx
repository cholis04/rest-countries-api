import Script from 'next/script';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <Script src="/darkModeConfig.js" strategy="beforeInteractive" />
    </>
  );
};

export default MainLayout;
