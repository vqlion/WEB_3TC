//import "./styles.css";
import "leaflet/dist/leaflet.css";
import "./Map_Assoc.css"
import { MapContainer, TileLayer } from "react-leaflet";
import {DraggableMarker} from './DraggableMarker'
export function Map_Assoc() {
    return(
        <MapContainer center={[45.784294, 4.876554]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Those Icons - Flaticon</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <DraggableMarker />
    </MapContainer>
  );
}



