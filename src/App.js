import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@mui/material";
import { usePlacesData } from "./api/index";
import { useState, useEffect } from "react";

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const { data, isLoading, isError } = usePlacesData(bounds);

  //add selected place to the list and drop pin on the map
  const [selectedPlace, setSelectedPlace] = useState([]);

  //select a pin and show the details of the place in the list
  const [pinClicked, setPinClicked] = useState(null);

  //getting the coordinates of the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={data ? data.data : []}
            setSelectedPlace={setSelectedPlace}
            selectedPlace={selectedPlace}
            isLoading={isLoading}
            isError={isError}
            pinClicked={pinClicked}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            // places={data ? data.data : []}
            selectedPlace={selectedPlace}
            setPinClicked={setPinClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
