import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const minWidth = useMediaQuery("(min-width: 600px)");
  const defaultProps = {
    center: {
      lat: 42.364506,
      lng: -71.038887,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_googleMapApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
      >
        <AnyReactComponent lat={42.3601} lng={71.0589} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
