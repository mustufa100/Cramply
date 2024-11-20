'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Import Swiper core and the Mousewheel and Autoplay modules
import SwiperCore, { Mousewheel, Autoplay } from 'swiper';

import { useRef } from 'react'; // Import React hooks
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import CommunitySection from './components/Sections/ComunitySection';
import Testimonials from './components/Sections/Testimonials';
import FAQSection from './components/Sections/FAQsection';
import Footer from './components/Layout/Footer';

// Create a custom hook to initialize SwiperCore.use
function useSwiperModules() {
  SwiperCore.use([Mousewheel, Autoplay]);
}

export default function Home() {
  // Call the custom hook to initialize Swiper modules
  useSwiperModules();

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
         direction="vertical"
         spaceBetween={0}
         slidesPerView={1}
         mousewheel={true}
         speed={400}
         loop={true}
         autoplay={{
           delay: 1000,
           disableOnInteraction: false,
         }}
         style={{
           height: '100vh',
           overflow: 'hidden',
           margin: 0,
           padding: 0,
         }}
        onTouchStart={handleAutoplayStop} // Stop autoplay on touch/click
        onTouchEnd={handleAutoplayStart} // Resume autoplay on release
        onMouseDown={handleAutoplayStop} // Stop autoplay on mouse click
        onMouseUp={handleAutoplayStart} // Resume autoplay on mouse release
      >
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, padding: 0 }}>
  <Header />
  <Hero />
</SwiperSlide>
<SwiperSlide style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, padding: 0 }}>
  <Features />
  <CommunitySection />
</SwiperSlide>
<SwiperSlide style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, padding: 0 }}>
  <Testimonials />
</SwiperSlide>
<SwiperSlide className="flex flex-col h-screen">
  <div className="flex-grow">
    <FAQSection />
  </div>
  <div className="flex-shrink-0">
    <Footer />
  </div>
</SwiperSlide>

      </Swiper>
    </div>
  );
}
