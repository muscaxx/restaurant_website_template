import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Reservation from "@/components/sections/Reservation";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Footer />
    </main>
  );
}
