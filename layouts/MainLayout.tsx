import Head from 'next/head';
import { useTheme } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.backgroundColor} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={theme.backgroundColor}
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
