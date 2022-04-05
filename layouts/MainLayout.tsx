import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
