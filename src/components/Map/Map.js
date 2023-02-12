
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };

  return (
    <div style={{ height: '400px' }}>
      <LoadScript
        googleMapsApiKey="AIzaSyCGD8RfpGj4HKVtm7uHsYUfn22l2tJWW7o"
      >
        <GoogleMap
          center={center}
          zoom={10}
          mapTypeId="roadmap"
          options={{
            disableDefaultUI: true,
            zoomControl: true
          }}
        />
      </LoadScript>
    </div>
  );
};

export default Map;


