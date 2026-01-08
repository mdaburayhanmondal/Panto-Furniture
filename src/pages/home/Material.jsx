import React from 'react';
import Button from '../../components/Button';
import material1 from '../../assets/material1.png';
import material2 from '../../assets/material2.png';
import material3 from '../../assets/material3.png';

const Material = () => {
  return (
    <section className="my-24 flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0 md:gap-12 pl-10">
      <div className="md:w-1/2 w-full mx-auto flex flex-col gap-y-4">
        <h3 className="text-lg uppercase font-semibold text-primary">
          Materials
        </h3>
        <h2 className="text-4xl font-bold capitalize leading-12">
          Very serious materials for making furniture
        </h2>
        <p className="text-secondary font-extralight tracking-wide text-sm">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Button buttonText={'More Info'} />
      </div>
      <div
        className="
        md:w-1/2 max-h-120 grid grid-cols-2 grid-rows-2 auto-rows-fr overflow-hidden
        [&>img]:w-full [&>img]:h-full 
        [&>img]:cursor-pointer 
        [&>img]:transition-all [&>img]:duration-300 [&>img]:ease-in 
        [&>img]:backdrop-blur-xs [&>img]:opacity-75 [&>img]:hover:opacity-100
        "
      >
        <img
          src={material1}
          alt="experiences"
          className="object-fill rounded-4xl"
        />
        <img
          src={material3}
          alt="experiences"
          className="object-contain row-span-2"
        />
        <img
          src={material2}
          alt="experiences"
          className="object-fill rounded-4xl"
        />
      </div>
    </section>
  );
};

export default Material;
