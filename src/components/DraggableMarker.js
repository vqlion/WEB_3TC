import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {Marker, Popup} from "react-leaflet"
import {Icon} from "leaflet"
const center = {
    lat: 45.784294,
    lng: 4.876554,
  }

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
  
  export function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const [active, setActive] = useState(false)
    //const [icon, setIcon] = useState( {iconUrl: require("../icons/location.png"), iconSize: [38,38]});
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            console.log(marker)
            setPosition(marker.getLatLng())
          }
        },
        /*iconState() {
          const marker = markerRef.current
          {marker
            ? customIcon.iconUrl = require("../icons/pin.png")
            : customIcon.iconUrl = require("../icons/location.png")}
        }*/
      }),
      [],
    )
    
    const changeIcon = useCallback(() => {
      currentIconIndex = (currentIconIndex+1)%2
    }, [])
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
      changeIcon()
    }, [])
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        icon={customIcon[currentIconIndex]}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'affiche manquante '
              : 'affiche présente'}
          </span>
        </Popup>
      </Marker>
    )
  }
  