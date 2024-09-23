import Image from "next/image";
import banner_coffe from "@/assets/banner-coffee.png";
import Navbar from "../navbar";

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
      <div className="mx-auto px-5 z-10 max-w-5xl grid items-center justify-center md:justify-start h-[calc(100vh-7rem)]">
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-2 w-72">
          <h2 className="text-2xl">
            Ya probaste el <span className="font-bold">café </span>
            mas rico de Santiago?
          </h2>
          <button className="font-semibold bg-yellow-900 hover:bg-yellow-950 w-fit p-3 px-10 rounded-full text-sm transition-colors">
            Visitanos
          </button>
        </div>
      </div>
    </section>
  );
}
export default Header;
