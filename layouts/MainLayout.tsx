import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  const component = (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return component;
};

export default MainLayout;
