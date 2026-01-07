import React from 'react';
import Button from '../../components/Button';

const Whychoose = () => {
  return (
    <section className="section-default">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 items-stretch">
        <div className="text-4xl font-bold h-full">
          Why
          <br />
          Choosing Us
        </div>

        <div className="h-full flex flex-col gap-y-2">
          <h3 className="text-2xl font-semibold">Luxury facilities</h3>
          <p className="text-base">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <div className="mt-auto">
            <Button buttonText={'More Info'} />
          </div>
        </div>

        <div className="h-full flex flex-col gap-y-2">
          <h3 className="text-2xl font-semibold">Affordable Price</h3>
          <p className="text-base">
            You can get a workspace of the highest quality at an affordable
            price and still enjoy the facilities that are only here.
          </p>
          <div className="mt-auto">
            <Button buttonText={'More Info'} />
          </div>
        </div>

        <div className="h-full flex flex-col gap-y-2">
          <h3 className="text-2xl font-semibold">Many Choices</h3>
          <p className="text-base">
            We provide many unique workspace choices so that you can choose the
            workspace to your liking.
          </p>
          <div className="mt-auto">
            <Button buttonText={'More Info'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
