"use client";
import Map from "../map-google";

const Location = () => {
  return (
    <section className="max-w-5xl px-10 mx-auto text-black mt-14 text-center">
      <h3 className="text-3xl font-semibold">Ubicados</h3>
      <p>Avenida Roca, 1825</p>
      <div className="rounded-xl mt-10 border-4 p-2 border-yellow-900">
        <Map />
      </div>
    </section>
  );
};
export default Location;
