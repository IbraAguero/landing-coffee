import Fotter from "./components/fotter/fotter";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import Location from "./components/location/location";
import Market from "./components/market/market";
import SectionCoffee from "./components/section-coffee/section-coffee";

export default function Home() {
  return (
    <>
      <Header />
      <Market />
      <SectionCoffee />
      <Gallery />
      <Location />
      <Fotter />
    </>
  );
}
