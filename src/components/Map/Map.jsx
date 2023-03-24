import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  selectedPlace,
  setPinClicked,
}) => {
  const minWidth = useMediaQuery("(min-width: 600px)");
  const mapStyle = {
    paper: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100px",
    },
    mapContainer: {
      height: "85vh",
      width: "100%",
    },
    markerContainer: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      "&:hover": { zIndex: 2 },
    },
    pointer: {
      cursor: "pointer",
    },
  };
  const defaultProps = {
    center: {
      lat: 42.364506,
      lng: -71.038887,
    },
    zoom: 15,
  };
  console.log("coordinates", coordinates);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_googleMapApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        {selectedPlace.length &&
          selectedPlace.map((place, i) => (
            <div
              style={mapStyle.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <LocationOnIcon
                color="primary"
                fontSize="medium"
                onClick={() => {
                  console.log("map pin clicked:", place);
                  setPinClicked(place.location_id);
                }}
              />
              {/* <Paper elevation={3} sx={mapStyle.paper}>
                <Typography
                  sx={mapStyle.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {" "}
                  {place.name}
                </Typography>
                <img
                  style={mapStyle.pointer}
                  alt={place.name}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper> */}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
