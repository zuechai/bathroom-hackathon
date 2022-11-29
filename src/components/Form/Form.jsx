import { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./Form.scss";

export default function Form({
  myAPIKey,
  queryHandler,
  setLongitude,
  setLatitude,
  setIsNewQuery,
}) {
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
    setIsNewQuery(true);
  };

  useEffect(() => {
    if (addressIsValid) {
      axios
        .get(geocodingUrl)
        .then((result) => result)
        .then((featureCollection) => {
          const location = featureCollection.data.features[0];
          const { lon, lat } = location.properties;
          queryHandler(lon, lat);
        });
    }
  });

  return (
    <form className="form" ref={formEl} onSubmit={submitHandler}>
      <div className="form__wrapper">
        <label className="form__label" htmlFor="address">
          Find a bathroom...
        </label>
        <input
          className="form__input"
          type="address"
          name="address"
          defaultValue={address}
        />
        <button className="form__btn">Geocode</button>
      </div>
    </form>
  );
}
