import React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
import { IoIosAdd } from 'react-icons/io';
import Rating from '../../components/Rating';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-start gap-y-2 rounded-t-xl cursor-pointer">
      <img src={getImgUrl(`${product.imageUrl}`)} alt={product.name} />
      <div className="w-full bg-white dark:bg-darkBg px-3 py-1 rounded-b-xl flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <p className="text-xs">{product.category}</p>
          <h4 className="text-base font-semibold">{product.name}</h4>
          <p>
            {<Rating rating={product.rating} starClass={'cursor-pointer'} />}
          </p>
        </div>
        <div className="w-full flex items-center justify-between ">
          <p className="text-lg text-secondary font-semibold">
            <sup>$</sup>
            {product.price}
          </p>
          <button className="cursor-pointer bg-secondary rounded-full hover:scale-105">
            <IoIosAdd className="text-2xl text-white dark:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
