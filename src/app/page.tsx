import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import AboutUs from "@/components/section/AboutUs";
import Menu from "@/components/section/Menu";
import Facilities from "@/components/section/Facilities";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Menu />
        <Facilities />
      </main>
      <Footer />
    </>
  );
}
