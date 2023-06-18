import Hero from "../components/Hero";
import Package from "../components/Package";
import Partner from "../components/Partner";
import Statistic from "../components/Statistic";

export default function Home() {
  return (
    <>
      {/* this should be navbar */}

      {/* body content */}
      <div className="relative">
        <Hero />
        <Package />
        <Partner />
        <Statistic />
      </div>
      {/* this should be footer */}
    </>
  );
}
