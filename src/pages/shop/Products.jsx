import React, { useState } from 'react';
import { products } from '../../utils/products';
import ProductCard from './ProductCard';

const Products = ({ headline }) => {
  const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];
  const [currentCategory, setCurrentCategory] = useState('Chair');
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filterProducts = products.filter((product) => {
    return product.category === currentCategory;
  });

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-default flex flex-col gap-y-6">
        <h2 className="text-4xl font-bold text-center text-black">
          {headline}
        </h2>
        {/* categories */}
        <div className="bg-[#EEEEEE] w-fit mx-auto rounded-full px-6 py-3">
          <div className="flex gap-x-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setCurrentCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={` px-4 py-2 rounded-4xl transition-all ease-in-out duration-300 cursor-pointer ${
                  currentCategory === category
                    ? 'bg-white text-primary hover:bg-white'
                    : 'text-secondary hover:bg-white/50 hover:text-primary/66'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filterProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* show more button */}
        {visibleProducts < filterProducts.length && (
          <button
            onClick={showMoreProducts}
            className="bg-white px-3 py-1 w-fit mx-auto rounded-xl shadow cursor-pointer"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
