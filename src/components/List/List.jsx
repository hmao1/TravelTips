import { useState, useEffect, useRef } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  isLoading,
  isError,
  selectedPlace,
  setSelectedPlace,
  pinClicked,
}) => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("ALL");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const theme = useTheme();
  const ListStyles = {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: "30px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    loading: {
      height: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      padding: "25px",
    },
    marginBottom: {
      marginBottom: "30px",
    },
    list: {
      height: "75vh",
      overflow: "auto",
    },
  };

  const placesRef = useRef([]);
  //this is to scroll to the place when pin is clicked
  useEffect(() => {
    //only fires when pin is clicked
    if (pinClicked) {
      const index = places.findIndex(
        (place) => place.location_id === pinClicked
      );
      placesRef?.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pinClicked, places]);

  //enable filtering
  useEffect(() => {
    if (places.length > 0) {
      if (rating === "ALL") setFilteredPlaces(places);
      else {
        const filteredPlaces = places.filter(
          (place) => Number(place.rating) >= Number(rating)
        );
        setFilteredPlaces(filteredPlaces);
      }
    }
  }, [places, rating]);

  return (
    <Box sx={ListStyles.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl sx={ListStyles.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={ListStyles.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          label="rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="ALL">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      {isLoading ? (
        <div style={ListStyles.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <Grid container spacing={3} sx={ListStyles.list}>
          {filteredPlaces.map((place, ind) => (
            <Grid
              item
              ref={(el) => (placesRef.current[ind] = el)}
              key={ind}
              xs={12}
            >
              <PlaceDetails
                place={place}
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default List;
