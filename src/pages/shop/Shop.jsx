import React from 'react';
import bannerImg from '../../assets/banner.png';
import Products from './Products';

const Shop = () => {
  return (
    <section className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="w-full bg-cover bg-center h-120 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-white">Shop Our Products</h1>
      </div>
      <Products headline={'Whats Your Choice?'} />
    </section>
  );
};

export default Shop;
