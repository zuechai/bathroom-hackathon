import axios from "axios";

const base_url = "https://www.refugerestrooms.org/api";

// pulls the api data when a user submits the form
export const fetchBathroom = () => {
  return axios.get(`${base_url}/v1/restrooms`);
};
