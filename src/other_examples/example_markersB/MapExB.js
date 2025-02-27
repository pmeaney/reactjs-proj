import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "./chicago-parks.json";
import "./MapExB.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG1lYW5leSIsImEiOiJjbGw2d3F1NGkwangzM2ZzOGRqMHQxNDc3In0.hlk0uTLKbzEOM05-3GJv_g";

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
    //   const ref = React.createRef();
    //   // Create a new DOM node and save it to the React ref
    //   ref.current = document.createElement("div");
    //   // Render a Marker Component on our new DOM node
    //   ReactDOM.render(
    //     <Marker ref={ref.current} onClick={markerClicked} feature={feature} />,
    //     ref.current
    //   );

    //   // Create a Mapbox Marker at our new DOM node
    //   new mapboxgl.Marker(ref.current)
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map);
    // });

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), "top-right");
    console.log('Hello') })

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
