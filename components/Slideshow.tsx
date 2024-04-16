
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slideshow = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      grabCursor={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
