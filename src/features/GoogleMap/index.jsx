import React from "react";

import map from "assets/google-maps-image.JPG";
import "./style.scss";

function GoogleMap() {
  return (
    <img
      src={map}
      className="map__img"
      alt="Google Map showing location of store"
    />
  );
}

export default GoogleMap;
