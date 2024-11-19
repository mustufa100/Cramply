import Image from "next/image";
import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";
import Features from "./components/Sections/Features";
import Testimonials from "./components/Sections/Testimonials";
import CommunitySection from "./components/Sections/ComunitySection";
import FAQSection from "./components/Sections/FAQsection";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CommunitySection/>
      <Testimonials />
      <FAQSection/>
      <Footer/>
    </div>
  );
}
