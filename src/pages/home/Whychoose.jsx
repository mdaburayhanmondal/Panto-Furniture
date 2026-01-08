import React from 'react';
import Button from '../../components/Button';

export const Box = ({ heading, description }) => {
  const boxStyles =
    'border rounded-lg p-2 border-gray-300 md:border-gray-100 md:hover:border-gray-200 transition-all duration-300 ease-in';
  return (
    <div
      className={`h-full flex flex-col gap-y-2 text-center md:text-left ${boxStyles}`}
    >
      <h3 className="text-2xl font-semibold">{heading}</h3>
      <p className="text-base">{description}</p>
      <div className="mt-auto mx-auto md:mx-0">
        <Button buttonText={'More Info'} />
      </div>
    </div>
  );
};

const Whychoose = () => {
  const features = [
    {
      heading: 'Luxury facilities',
      description:
        'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    },
    {
      heading: 'Affordable Price',
      description:
        'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
    },
    {
      heading: 'Many Choices',
      description:
        'We provide many unique workspace choices so that you can choose the workspace to your liking.',
    },
  ];

  return (
    <section className="section-default">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 items-stretch">
        {/* col 1 */}
        <div className="text-4xl font-bold h-full text-center md:text-left flex items-center justify-center">
          Why
          <br />
          Choose Us?
        </div>
        {features.map((feature, index) => (
          <Box
            key={index}
            heading={feature.heading}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Whychoose;
