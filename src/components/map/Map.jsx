import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { generateCoordinates } from "./function";

export const Map = () => {
  const coordinatesArray = generateCoordinates();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />

      {coordinatesArray.map((coordinate, index) => (
        <Marker
          key={index}
          position={[coordinate.latitude, coordinate.longitude]}
        >
          <Popup>Price: ${coordinate.price}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
