import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="p-3 fixed w-full bg-black/25 backdrop-blur-sm z-10">
      <div className="flex items-center max-w-6xl mx-auto">
        <h1 className={`${philosopher.className}  font-bold text-3xl`}>AYZA</h1>
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-14">
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
