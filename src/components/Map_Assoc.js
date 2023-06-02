//import "./styles.css";
import "leaflet/dist/leaflet.css";
import "./Map_Assoc.css"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from 'leaflet';
import {CustomMarker} from './CustomMarker'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export function MapPage() {
    return(
      <MapContainer center={[45.784296, 4.876554]} zoom={16}>
      <TileLayer
       attribution='&copy; <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Those Icons - Flaticon</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <CustomMarker coords={[45.784294, 4.876554]} status={false} />
    </MapContainer>
  );
}



