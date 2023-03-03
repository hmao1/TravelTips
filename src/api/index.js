import axios from "axios";
import { useQuery } from "react-query";

const travelUrl =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  method: "GET",
  url: travelUrl,
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
    "X-RapidAPI-Host": process.env.REACT_APP_XRapidAPIHost,
  },
};

export const usePlacesData = () => {
  const { data, isLoading, isError } = useQuery("restaurantInfo", () =>
    axios
      .request(options)
      .then(function (response) {
        console.log("response: ", response);
        return response.data;
      })
      .catch(function (error) {
        return error;
      })
  );

  return { data, isLoading, isError };
};
