'use client'; // This must be the first line in your file

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Mousewheel, Autoplay } from 'swiper';
import { useRef } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import CommunitySection from './components/Sections/ComunitySection';
import Testimonials from './components/Sections/Testimonials';
import FAQSection from './components/Sections/FAQsection';
import Footer from './components/Layout/Footer';

function useSwiperModules() {
  SwiperCore.use([Mousewheel, Autoplay]);
}

export default function Home() {
  useSwiperModules();
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}
        onTouchStart={handleAutoplayStop}
        onTouchEnd={handleAutoplayStart}
        onMouseDown={handleAutoplayStop}
        onMouseUp={handleAutoplayStart}
      >
        {/* Slide 1: Header and Hero */}
        <SwiperSlide key="header-hero">
          <Header />
          <Hero />
        </SwiperSlide>

        {/* Slide 2: Features and Community */}
        <SwiperSlide key="features-community">
          <Features />
          <CommunitySection />
        </SwiperSlide>

        {/* Slide 3: Testimonials */}
        <SwiperSlide key="testimonials">
          <Testimonials />
        </SwiperSlide>

        {/* Large Screen: Combined FAQ and Footer */}
        {isLargeScreen && (
          <SwiperSlide key="faq-footer-large">
            <div className="flex flex-col w-full h-full">
              <FAQSection />
              <Footer />
            </div>
          </SwiperSlide>
        )}

        {/* Small Screen: Separate FAQ and Footer */}
        {!isLargeScreen && (
          <>
            <SwiperSlide key="faq-small">
              <FAQSection />
            </SwiperSlide>
            <SwiperSlide key="footer-small">
              <Footer />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
}
