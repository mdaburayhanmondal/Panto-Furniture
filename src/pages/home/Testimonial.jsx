import React from 'react';
import { reviews } from '../../utils/reviews';
import Rating from '../../components/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
// css navigation
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section className="section-default flex flex-col gap-y-6">
      <div className="md:w-1/2 w-full mx-auto flex flex-col gap-y-2">
        <h3 className="text-lg uppercase font-semibold text-primary text-center">
          Materials
        </h3>
        <h2 className="text-4xl font-bold capitalize leading-12 text-center">
          Our client reviews
        </h2>
      </div>
      {/* Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${review.coverImg})` }}
            className="bg-no-repeat bg-cover bg-center rounded-lg"
          >
            <div className="h-120 flex flex-col justify-center items-center mb-4">
              <div className="mt-16 mb-4 bg-white dark:bg-darkBg border border-primary rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                  className="size-20 absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-secondary p-2 rounded-full ring ring-primary"
                />
                <div className="mt-16 text-center">
                  <p className="text-lg font-semibold">{review.name}</p>
                  <p className="mb-3 text-xs">Verified Customer</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    "{review.review}"
                  </p>
                  <div className="mx-auto w-full flex justify-center items-center">
                    <Rating
                      rating={review.rating}
                      starClass={'cursor-default'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
