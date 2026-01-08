import Products from '../shop/Products';
import Experience from './Experience';
import HeroSection from './HeroSection';
import Material from './Material';
import Whychoose from './Whychoose';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Whychoose />
      <Products headline={'Best Selling Products'} />
      <Experience />
      <Material />
    </>
  );
};

export default Home;
