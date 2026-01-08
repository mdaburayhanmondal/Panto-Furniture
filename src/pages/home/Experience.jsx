import React from 'react';
import experiences from '../../assets/expricences.png';
import Button from '../../components/Button';

const Experience = () => {
  return (
    <section className="my-24 flex flex-col md:flex-row items-center justify-between md:gap-12 pr-10">
      <div className="md:w-1/2 md:h-135">
        <img
          src={experiences}
          alt="experiences"
          className="w-full backdrop-blur-xs opacity-75 hover:opacity-100 transition-all duration-300 ease-in cursor-pointer"
        />
      </div>
      <div className="pl-5 md:pl-0 md:w-1/2 w-full mx-auto flex flex-col gap-y-4">
        <h3 className="text-lg uppercase font-semibold text-primary">
          Experiences
        </h3>
        <h2 className="text-4xl font-bold capitalize leading-12">
          we provide you the best experience
        </h2>
        <p className="text-secondary font-extralight tracking-wide text-sm">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <Button buttonText={'More Info'} />
      </div>
    </section>
  );
};

export default Experience;
