import Banner from "../components/Banner";
import BookCar from "../components/BookCar";
import ChooseUs from "../components/ChooseUs";
import Download from "../components/Download";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PickCar from "../components/PickCar";
import PlanTrip from "../components/PlanTrip";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}
