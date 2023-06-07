import { useState, useRef, useMemo, useCallback } from "react";
import {Marker, Tooltip} from "react-leaflet"
import {Icon} from "leaflet"


  const customIconOff = new Icon({
    iconUrl: require("../icons/location.png"),
    iconSize: [38, 38]
  })
  const customIconOn = new Icon({
    iconUrl: require("../icons/pin.png"),
    iconSize: [38, 38]
  })
  const customIcon = [customIconOff, customIconOn]
 
  
  export function CustomMarker({coords, status, message}) {
    const center = {
      lat: coords[0],
      lng: coords[1],
    }  
    const [iconStatus, setIconStatus] = useState(status ? 1: 0);
    const markerRef = useRef(null)
    const eventHandlers = 
      {
        click() {
          setIconStatus((iconStatus+1)%2)
          console.log(iconStatus)
          
        },

      }
    
  
    return (
      <Marker
        draggable={false}
        eventHandlers={eventHandlers}
        position={center}
        icon={customIcon[iconStatus]}
        ref={markerRef}>
        <Tooltip minWidth={90}>
          <span>
           {message}
          </span>
        </Tooltip>
      </Marker>
    )
  }
  