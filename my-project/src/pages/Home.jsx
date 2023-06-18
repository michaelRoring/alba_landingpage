import Hero from "../components/Hero";
import Package from "../components/Package";
import Partner from "../components/Partner";
import Statistic from "../components/Statistic";
import Portfolio from "../components/Portfolio";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* body content */}
      <div>
        <Hero />
        <Package />
        <Partner />
        <Statistic />
        <Portfolio />
        <Testimonial />
        <Client />
        <Contact />
      </div>
      {/* this should be footer */}
    </>
  );
}
