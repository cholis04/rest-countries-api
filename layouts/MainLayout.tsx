import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  const component = (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return component;
};

export default MainLayout;
