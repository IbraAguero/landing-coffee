import Header from "./components/header/header";
import Market from "./components/market/market";

export default function Home() {
  return (
    <>
      <Header />
      <Market />
      <div className="h-screen bg-white"></div>
    </>
  );
}
