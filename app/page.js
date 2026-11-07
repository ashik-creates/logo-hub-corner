import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <Portfolio />
        <Services />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
