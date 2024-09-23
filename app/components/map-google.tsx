import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  if (!isLoaded) return <h3>Cargando...</h3>;

  return <Maps />;
};

function Maps() {
  const center = useMemo(() => ({ lat: -27.7833837, lng: -64.2578512 }), []);

  return (
    <GoogleMap
      zoom={17}
      center={center}
      mapContainerStyle={{ height: "350px", width: "100%" }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Map;
