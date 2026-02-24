import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeWelcome from "@/components/HomeWelcome";
import HomeDestinations from "@/components/HomeDestinations";
import HomeGallery from "@/components/HomeGallery";
import HomeTours from "@/components/HomeTours";
import HomeAbout from "@/components/HomeAbout";
import HomeReviews from "@/components/HomeReviews";
import HomeFAQ from "@/components/HomeFAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <HomeWelcome />
      <HomeDestinations />
      <HomeGallery />
      <HomeTours />
      <HomeAbout />
      <HomeReviews />
      <HomeFAQ />
      <Footer />
    </main>
  );
}
