import Image from "next/image";
import coffeBeansImg from "@/assets/coffe-beans.png";

const SectionCoffee = () => {
  return (
    <>
      <div className="overflow-hidden">
        <section className="relative mb-32 md:rounded-l-full p-10 md:py-12 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-950">
          <div className="max-w-5xl mx-auto">
            <div className="md:w-80 text-left space-y-2 z-10">
              <h3 className="text-2xl font-bold">
                Comprueba la calidad de nuestros{" "}
                <span className="text-yellow-950">granos</span>
              </h3>
              <button className="font-semibold bg-yellow-900 hover:bg-yellow-950 w-fit p-3 px-10 rounded-full text-sm transition-colors">
                Ver más
              </button>
            </div>
          </div>
          <div className="absolute -right-60 -top-8 -rotate-45 w-[400px] h-auto z-0 pointer-events-none">
            <Image
              src={coffeBeansImg}
              alt="Granos de café"
              className="object-contain"
              priority
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionCoffee;
