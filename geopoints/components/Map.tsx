import React from 'react';
import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image.js';

import { Coordinates } from '../types/types'

import { Marker } from '@react-google-maps/api';
import LoadingSpinner from './LoadingSpinner';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

function Map() {
  const [center, setCenter] = useState<Coordinates | null>(null);
  const [map, setMap] = useState(null);

  getUserPosition();


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY!,
  });

  const onLoad = useCallback(
    function callback(map: any) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  function getUserPosition() {
    navigator.geolocation.getCurrentPosition((geolocation) => {
      const { latitude, longitude } = geolocation.coords;
      if (!center) {
        setCenter({ lat: latitude, lng: longitude });
      }
    });
  }

  if (!center) {
    return <LoadingSpinner />;
  }

  return isLoaded ? (
    <div
      className="
        fixed
        flex
        justify-center
        items-center
        h-screen
        w-screen
        top-0
        left-0
        "
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          mapTypeControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          },
        }}
      >
        {/* <Marker position={center}>

                </Marker> */}
        <></>
      </GoogleMap>
      <div className="absolute z-20">
        <Image
          src="/crosshair.png"
          alt="crosshair"
          width={40}
          height={40}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);
