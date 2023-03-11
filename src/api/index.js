import axios from "axios";
import { useQuery } from "react-query";

export const usePlacesData = (bounds) => {
  //for development purposes, remove when deploying
  const restaurantURL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
  const { data, isLoading, isError } = useQuery(
    ["boundsCoordinates", bounds],
    () =>
      axios
        .request({
          method: "GET",
          url: restaurantURL,
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
            "X-RapidAPI-Host": process.env.REACT_APP_XRapidAPIHost,
          },
        })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.error(
            "api error occurred when fetching the restaurant data: ",
            error
          );
          return null;
        }),
    { enabled: !!bounds && Object.keys(bounds).length !== 0 }
    // { enabled: false }
  );

  return { data, isLoading, isError };
};
