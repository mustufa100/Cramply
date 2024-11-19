'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Import Swiper core and the Mousewheel and Autoplay modules
import SwiperCore, { Mousewheel, Autoplay } from 'swiper';

// Initialize Swiper with the Mousewheel and Autoplay modules
SwiperCore.use([Mousewheel, Autoplay]);

import { useRef } from 'react'; // To use Swiper instance
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import CommunitySection from './components/Sections/ComunitySection';
import Testimonials from './components/Sections/Testimonials';
import FAQSection from './components/Sections/FAQsection';
import Footer from './components/Layout/Footer';

export default function Home() {
  const swiperRef = useRef<SwiperCore | null>(null); // Specify SwiperCore as the ref type

  const handleAutoplayStop = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleAutoplayStart = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div>
      {/* Swiper container with mousewheel and autoplay control */}
      <Swiper
        direction="vertical" // Change scroll direction to vertical
        spaceBetween={0} // Adjust space between slides
        slidesPerView={1} // Show one slide at a time
        mousewheel={true} // Enable mousewheel control
        speed={800} // Speed of transition
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Assign the Swiper instance
        }}
        style={{ height: '100vh', overflow: 'hidden' }} // Ensure full viewport height and hide overflow
        onTouchStart={handleAutoplayStop} // Stop autoplay on touch/click
        onTouchEnd={handleAutoplayStart} // Resume autoplay on release
        onMouseDown={handleAutoplayStop} // Stop autoplay on mouse click
        onMouseUp={handleAutoplayStart} // Resume autoplay on mouse release
      >
        <SwiperSlide>
          <Header />
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Features />
          <CommunitySection />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <FAQSection />
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
