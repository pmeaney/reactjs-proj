// import 'mapbox-gl/dist/mapbox-gl.css';
// import './mapboxExample.scss'
// import React, { useRef, useEffect, useState } from 'react';

// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
// mapboxgl.accessToken = 'pk.eyJ1IjoicG1lYW5leSIsImEiOiJjbGw2d3F1NGkwangzM2ZzOGRqMHQxNDc3In0.hlk0uTLKbzEOM05-3GJv_g';
import * as React from 'react';
import {useState} from 'react';
import Map, {Popup} from 'react-map-gl';

function MapBoxMapB() {
  const [showPopup, setShowPopup] = useState(true);

  return <Map
    mapboxAccessToken="pk.eyJ1IjoicG1lYW5leSIsImEiOiJjbGw2d3F1NGkwangzM2ZzOGRqMHQxNDc3In0.hlk0uTLKbzEOM05-3GJv_g"
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    {showPopup && (
      <Popup longitude={-100} latitude={40}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
  </Map>;
}

export default MapBoxMapB;