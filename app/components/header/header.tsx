import Image from "next/image";
import Navbar from "../navbar";
import banner_coffe from "@/assets/banner-coffee.png";

function Header() {
  return (
    <section className="h-3/4">
      <Navbar />
      <div className="absolute inset-0 -z-10 h-3/4">
        <Image
          src={banner_coffe}
          alt="banner"
          objectFit="cover"
          layout="fill"
          className="inset-0 -z-10 h-full"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="mx-auto z-10 max-w-6xl grid items-center h-[calc(100vh-7rem)]">
        <div className="grid gap-2 w-72">
          <h2 className="text-2xl">
            Ya probaste el <span className="font-bold">café </span>
            mas rico de Santiago?
          </h2>
          <button className="bg-amber-900 hover:bg-amber-800 w-fit p-3 px-10 rounded-full text-sm transition-colors">
            Visitanos
          </button>
        </div>
      </div>
    </section>
  );
}
export default Header;
