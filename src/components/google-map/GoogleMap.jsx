import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.52,
      lng: -87.21,
    },
    zoom: 16,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAbWDWta7mVCceVf346M8HnBkvwlh7q9ug",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent text={"Kreyser Avrora"} />
        </GoogleMapReact>
      </div>
    );
  }
}

// const center = [59.95, 30.33];
// const zoom = 11;

// const GoogleMap = () => (
//   <div style={{ height: '100vh', width: '100%' }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//       defaultCenter={center}
//       defaultZoom={zoom}
//     >

//     </GoogleMapReact>
//   </div>
// );

export default SimpleMap;
