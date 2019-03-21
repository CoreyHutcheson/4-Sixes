import React from "react";
import GoogleMapReact from "google-map-react";

import "./style.scss";

const MarkerText = ({ text }) => <span className="marker-text">{text}</span>;

const GoogleMap = () => {
  const apiKey = "AIzaSyAbWDWta7mVCceVf346M8HnBkvwlh7q9ug";
  const locations = {
    "4-sixes": {
      lat: 35.526652,
      lng: -87.210553,
    },
    "police-station": {
      lat: 35.534492,
      lng: -87.207461,
    },
  };
  const zoom = 15;

  const renderMarkers = (map, maps) => {
    // 4-Sixes Marker
    new maps.Marker({
      position: locations["4-sixes"],
      map,
      title: "4-Sixes",
    });

    // Police Station Marker
    new maps.Marker({
      position: locations["police-station"],
      map,
      title: "Police Station",
    });
  };

  return (
    <div className="google-map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={locations["4-sixes"]}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        <MarkerText
          lat={locations["4-sixes"].lat}
          lng={locations["4-sixes"].lng}
          text="4-Sixes"
        />

        <MarkerText
          lat={locations["police-station"].lat}
          lng={locations["police-station"].lng}
          text="Police Station"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
