import Products from '../shop/Products';
import HeroSection from './HeroSection';
import Whychoose from './Whychoose';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Whychoose />
      <Products headline={'Best Selling Products'} />
    </>
  );
};

export default Home;
