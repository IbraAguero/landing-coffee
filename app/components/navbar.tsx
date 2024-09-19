import Image from "next/image";
import coffe_1 from "@/public/coffee-1.jpg";

const Navbar = () => {
  return (
    <nav className="relative w-full h-screen">
      <Image
        src={coffe_1}
        alt="coffee"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative z-10">
        <h1 className="font-semibold text-lg">AYZA</h1>
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-2">
            <li className="text-sm">Inicio</li>
            <li className="text-sm">Acerca</li>
            <li className="text-sm">Tienda</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
