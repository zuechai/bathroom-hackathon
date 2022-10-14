import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Form({ myAPIKey, setLongitude, setLatitude }) {
  const [address, setAddress] = useState("460 King St W, Toronto");
  const [addressIsValid, setAddressIsValid] = useState(false);
  const formEl = useRef();

  const baseUrl = "https://api.geoapify.com/v1/geocode/search?text=";
  const addressParam = encodeURIComponent(address);

  const geocodingUrl = `${baseUrl}${addressParam}&apiKey=${myAPIKey}`;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!address || address.length < 3) {
      return;
    }
    setAddress(formEl.current.address.value);
    setAddressIsValid(true);
  };

  useEffect(() => {
    axios
      .get(geocodingUrl)
      .then((result) => result)
      .then((featureCollection) => {
        const location = featureCollection.data.features[0];
        const { lon, lat } = location.properties;
        setLongitude(lon);
        setLatitude(lat);
      });
  }, [addressIsValid, geocodingUrl]);

  return (
    <form ref={formEl} onSubmit={submitHandler}>
      <div>
        <label htmlFor="address">Find a bathroom...</label>
        <input type="address" name="address" />
        <button>Geocode</button>
      </div>
    </form>
  );
}
