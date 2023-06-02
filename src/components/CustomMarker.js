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
  var currentIconIndex = 0
  
  export function CustomMarker({coords, status, message}) {
    const center = {
      lat: coords[0],
      lng: coords[1],
    }
  
    const [iconStatus, setIconStatus] = useState(status)
    const [active, setActive] = useState(false)
    //const [icon, setIcon] = useState( {iconUrl: require("../icons/location.png"), iconSize: [38,38]});
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        click() {
          changeIcon()
          currentIconIndex = (currentIconIndex+1)%2
        },

      }),
      [],
    )
    
    const changeIcon = useCallback(() => {
      setIconStatus((d) => !d)
      
    }, [])
  
    return (
      <Marker
        draggable={false}
        eventHandlers={eventHandlers}
        position={center}
        icon={customIcon[currentIconIndex]}
        ref={markerRef}>
        <Tooltip minWidth={90}>
          <span>
           {message}
          </span>
        </Tooltip>
      </Marker>
    )
  }
  