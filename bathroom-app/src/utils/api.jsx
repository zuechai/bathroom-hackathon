import axios from "axios";

const base_url = "https://www.refugerestrooms.org/api";

// pulls the api data when a user submits the form
export const fetchBathroom = (longitude, latitude) => {
  return axios.get(
    `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${latitude}&lng=${longitude}`
  );
};
