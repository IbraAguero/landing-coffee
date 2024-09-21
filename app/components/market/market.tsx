import Image from "next/image";
import { marketData } from "./market-data";

function Market() {
  return (
    <section className="mx-auto my-16 max-w-6xl text-black text-center">
      <div className="space-y-24 mb-24">
        <h3 className="text-black text-3xl font-bold">Algo para tomar</h3>
        <div className="flex justify-between gap-20">
          {marketData.drinks.map((drink) => (
            <div key={drink.id} className="space-y-4 w-[280px]">
              <div className="relative rounded-lg h-[350px] w-[280px]">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-xl shadow-[5px_8px_20px_rgba(0,0,0,_0.5)]"
                />
              </div>
              <div className="w-full">
                <h5 className="text-3xl font-semibold text-left">
                  {drink.name}
                </h5>
                <p className="text-left">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-24 mb-40">
        <h3 className="text-black text-3xl font-bold">Algo para tomar</h3>
        <div className="flex justify-between gap-20">
          {marketData.meals.map((meal) => (
            <div key={meal.id} className="space-y-4 w-[280px]">
              <div className="relative rounded-lg h-[350px] w-[280px]">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-xl shadow-[5px_8px_20px_rgba(0,0,0,_0.5)]"
                />
              </div>
              <div className="w-full">
                <h5 className="text-3xl font-semibold text-left">
                  {meal.name}
                </h5>
                <p className="text-left">{meal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Market;
