import Link from "next/link";
import { Philosopher } from "next/font/google";

export const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="p-3 fixed w-full bg-black/35 backdrop-blur-sm z-20">
      <div className="flex items-center max-w-5xl mx-auto">
        <h1 className={`${philosopher.className}  font-bold text-3xl`}>AYZA</h1>
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-14">
            <li className="text-sm">
              <Link href="#inicio">Inicio</Link>
            </li>
            <li className="text-sm">
              <Link href="#acerca">Acerca</Link>
            </li>
            <li className="text-sm">
              <Link href="#tienda">Tienda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
