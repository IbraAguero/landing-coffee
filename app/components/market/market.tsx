"use client";
import Image from "next/image";
import { marketData } from "./market-data";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import DrinkIcon from "../icons/drink-icon";
import CookieIcon from "../icons/cookie-icon";

function Market() {
  return (
    <section className="mx-auto max-w-5xl md:mt-10 text-black text-center">
      <div className="space-y-16 mb-16 flex flex-col items-center overflow-hidden">
        <div className="flex items-center gap-2">
          <h3 className="text-black text-3xl font-semibold">Algo para tomar</h3>
          <DrinkIcon />
        </div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        >
          <CarouselContent className="-ml-1">
            {marketData.drinks.map((drink, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 flex flex-col justify-center items-center">
                  <div className="w-[240px] space-y-4">
                    <div className="relative rounded-lg h-[280px]">
                      <Image
                        src={drink.image}
                        alt={drink.name}
                        objectFit="cover"
                        layout="fill"
                        className="rounded-xl shadow-[5px_8px_20px_rgba(0,0,0,_0.5)]"
                      />
                    </div>
                    <div className="w-full">
                      <h5 className="text-2xl font-semibold text-left">
                        {drink.name}
                      </h5>
                      <p className="text-sm text-left">{drink.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="space-y-16 mb-16 flex flex-col items-center overflow-hidden">
        <div className="flex items-center gap-2">
          <h3 className="text-black text-3xl font-semibold">Algo para comer</h3>
          <CookieIcon />
        </div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="-ml-1">
            {marketData.meals.map((meal, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 flex flex-col justify-center items-center">
                  <div className="w-[240px] space-y-4">
                    <div className="relative rounded-lg h-[280px]">
                      <Image
                        src={meal.image}
                        alt={meal.name}
                        objectFit="cover"
                        layout="fill"
                        className="rounded-xl shadow-[5px_8px_20px_rgba(0,0,0,_0.5)]"
                      />
                    </div>
                    <div className="w-full">
                      <h5 className="text-2xl font-semibold text-left">
                        {meal.name}
                      </h5>
                      <p className="text-sm text-left">{meal.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
export default Market;
