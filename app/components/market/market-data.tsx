import cafe_1 from "@/assets/cafe-5.jpg";
import licuados from "@/assets/licuados.jpg";
import cafe_chocolate from "@/assets/cafe-chocolate.jpg";
import focaccia from "@/assets/focaccia.jpg";
import croissants from "@/assets/croissants.jpeg";
import torta from "@/assets/torta-frutilla.jpg";

export const marketData = {
  drinks: [
    {
      id: 1,
      name: "Café ayza",
      description: "De especialidad, con granos importados",
      image: cafe_1,
    },
    {
      id: 2,
      name: "Licuados",
      description: "Multifruta, banana, limonada",
      image: licuados,
    },
    {
      id: 3,
      name: "Café oreo",
      description: "Incluye galletas oreo, es helado",
      image: cafe_chocolate,
    },
    /* {
      id: 4,
      name: "Café Chocho",
      description: "Incluye galletas oreo, es helado",
      image: cafe_chocolate,
    },
    {
      id: 5,
      name: "Café Chocho",
      description: "Incluye galletas oreo, es helado",
      image: cafe_chocolate,
    }, */
  ],
  meals: [
    {
      id: 1,
      name: "Medialunas",
      description: "De especialidad, con granos importados",
      image: croissants,
    },
    {
      id: 2,
      name: "Tortas",
      description: "Multifruta, banana, limonada",
      image: torta,
    },
    {
      id: 3,
      name: "Focaccias",
      description: "Incluye galletas oreo, es helado",
      image: focaccia,
    },
    {
      id: 4,
      name: "Tortas",
      description: "Multifruta, banana, limonada",
      image: torta,
    },
  ],
};
