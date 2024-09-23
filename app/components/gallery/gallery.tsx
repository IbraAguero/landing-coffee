import Image from "next/image";
import galleryImg_1 from "@/assets/foto-galeria-1.jpg";
import galleryImg_2 from "@/assets/foto-galeria-2.jpg";
import galleryImg_3 from "@/assets/foto-galeria-3.jpg";
import galleryImg_4 from "@/assets/foto-galeria-4.jpg";

const Gallery = () => {
  return (
    <section className="text-center max-w-2xl mx-auto w-full">
      <div className="grid grid-cols-4 gap-4 px-10">
        <div className="col-span-2 row-span-3">
          <Image
            src={galleryImg_1}
            alt="Imagen cuadrada"
            className="rounded-xl object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-2 row-span-4">
          <Image
            src={galleryImg_2}
            alt="Imagen vertical"
            className="rounded-xl object-cover w-full h-full"
            width={300}
            height={600}
          />
        </div>
        <div className="col-span-2 row-span-4">
          <Image
            src={galleryImg_3}
            alt="Imagen horizontal"
            className="rounded-xl object-cover w-full h-full"
            width={600}
            height={600}
          />
        </div>
        <div className="col-span-2 row-span-3">
          <Image
            src={galleryImg_4}
            alt="Imagen cuadrada"
            className="rounded-xl object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
