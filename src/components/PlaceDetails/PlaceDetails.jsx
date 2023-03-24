import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropIcon from "@mui/icons-material/PinDrop";

const placeDetailsStyles = {
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

// const PlaceDetails = ({ place }) => {
//   console.log(place);
//   return (
//     {place.name ? (<Card elevation={6}>
//       <CardMedia
//         component="img"
//         height="350"
//         image={
//           place.photo
//             ? place.photo.images.large.url
//             : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
//         }
//         title={place.name}
//         alt="Restaurant Image"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5">
//           {place.name}
//         </Typography>
//       </CardContent>
//     </Card>) : null}
//   );
// };
const PlaceDetails = ({ place, selectedPlace, setSelectedPlace }) => {
  const handleSelectedPlace = () => {
    const isPlaceAlreadySelected = selectedPlace.includes(place);
    if (isPlaceAlreadySelected) {
      const newSelectedPlace = selectedPlace.filter(
        (item) => item.name !== place.name
      );
      setSelectedPlace(newSelectedPlace);
    } else setSelectedPlace([...selectedPlace, place]);
  };

  return (
    <>
      {place.name ? (
        <Card elevation={6}>
          <CardMedia
            component="img"
            height="350"
            image={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            title={place.name}
            alt="Restaurant Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {place.name}
            </Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Rating name="read-only" value={Number(place.rating)} readOnly />
              <Typography component="legend">
                {place.num_reviews} review{place.num_reviews > 1 && "s"}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Price</Typography>
              <Typography gutterBottom variant="subtitle1">
                {place.price_level}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {place.ranking}
              </Typography>
            </Box>
            {place.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                sx={placeDetailsStyles.chip}
              />
            ))}
            {place.address && (
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                sx={placeDetailsStyles.subtitle}
              >
                <LocationOnIcon />
                {place.address}
              </Typography>
            )}
            {place.phone && (
              <Typography
                variant="body2"
                color="textSecondary"
                sx={placeDetailsStyles.spacing}
              >
                <PhoneIcon /> {place.phone}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
            <Button
              size="small"
              color={selectedPlace.includes(place) ? "success" : "primary"}
              onClick={handleSelectedPlace}
            >
              <PinDropIcon />
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </>
  );
};

export default PlaceDetails;
