//import "./styles.css";
import "leaflet/dist/leaflet.css";
import "./Map_Assoc.css"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from 'leaflet';

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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[45.784391, 4.871310]}>
      <Tooltip>
        Bat F
      </Tooltip>
    </Marker>
    <Marker position={[45.784753, 4.871872]}>
      <Tooltip>
        Bat I
      </Tooltip>
    </Marker>
    <Marker position={[45.784413, 4.872699]}>
      <Tooltip>
        Bat E
      </Tooltip>
    </Marker>
    <Marker position={[45.783600, 4.872673]}>
      <Tooltip>
        TC
      </Tooltip>
    </Marker>
    <Marker position={[45.783546, 4.8745433]}>
      <Tooltip>
        Humas
      </Tooltip>
    </Marker>
    <Marker position={[45.780090, 4.874163]}>
      <Tooltip>
        Bat D
      </Tooltip>
    </Marker>
    <Marker position={[45.779843, 4.872915]}>
      <Tooltip>
        Bat C
      </Tooltip>
    </Marker>
    <Marker position={[45.780245, 4.873440]}>
      <Tooltip>
        Bat M
      </Tooltip>
    </Marker>
    <Marker position={[45.783229, 4.873314]}>
      <Tooltip>
        GEN
      </Tooltip>
    </Marker>
    <Marker position={[45.784755, 4.874061]}>
      <Tooltip>
        Bat H
      </Tooltip>
    </Marker>
    <Marker position={[45.782917, 4.871762]}>
      <Tooltip>
        GE
      </Tooltip>
    </Marker>
    <Marker position={[45.784489, 4.883204]}>
      <Tooltip>
        Bat A <br/> 2 panneaux
      </Tooltip>
    </Marker>
    <Marker position={[45.784659, 4.883893]}>
      <Tooltip>
        Bat B <br/> 2 panneaux
      </Tooltip>
    </Marker>
    <Marker position={[45.784427, 4.882498]}>
      <Tooltip>
        Fermat
      </Tooltip>
    </Marker>
    <Marker position={[45.784443, 4.881837]}>
      <Tooltip>
        D'Alembert
      </Tooltip>
    </Marker>
    <Marker position={[45.783822, 4.882756]}>
      <Tooltip>
        Louis Neel <br/> 3 panneaux
      </Tooltip>
    </Marker>
    <Marker position={[45.784062, 4.874771]}>
      <Tooltip>
        BDE
      </Tooltip>
    </Marker>
    <input type="checkbox" id="topping" name="topping" value="Paneer" />
      Paneer
    </MapContainer>
  );
}



