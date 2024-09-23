import InstagramIcon from "../icons/instragram-icon";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import Link from "next/link";
import { Philosopher } from "next/font/google";

export const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Fotter = () => {
  return (
    <footer className="bg-yellow-950 mt-20">
      <div className="max-w-5xl mx-auto pt-8 space-y-8">
        <h1
          className={`${philosopher.className} font-bold text-3xl md:text-5xl text-center`}
        >
          AYZA
        </h1>
        <div className="flex justify-center gap-10">
          <div className="text-xs md:text-base font-light space-y-1">
            <p className="font-normal">DATOS DE CONTACTO</p>
            <p>Avenida Roca, 1450</p>
            <p>+54 385 594 3152</p>
            <p> ayza-cafeteria@gmail.com</p>
          </div>
          <div className="text-xs md:text-base font-light space-y-1">
            <p className="font-normal">REDES SOCIALES</p>
            <div className="flex gap-2 justify-center transition-colors">
              <Link
                href="https://www.instagram.com"
                className="hover:text-gray-300"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.facebook.com"
                className="hover:text-gray-300"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.twitter.com"
                className="hover:text-gray-300"
              >
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-3 text-center text-xs md:text-base font-light">
          Copyright 2024 © Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
export default Fotter;
