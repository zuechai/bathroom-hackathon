import { useState, useEffect } from "react";
import axios from "axios";

export default function Form({ myAPIKey }) {
  const [address, setAddress] = useState("460 King St W, Toronto");
  const [addressIsValid, setAddressIsValid] = useState(false);

  const handleChangeAddress = (e) => setAddress(e.target.value);

  const baseUrl = "https://api.geoapify.com/v1/geocode/search?text=";
  const addressParam = encodeURIComponent(address);

  const geocodingUrl =
    addressIsValid && `${baseUrl}${addressParam}&apiKey=${myAPIKey}`;

  const isValidAddress = (e) => {
    e.preventDefault();
    if (!address || address.length < 3) {
      return;
    }
    setAddressIsValid(true);
  };

  useEffect(() => {
    axios
      .get(geocodingUrl)
      .then((result) => result)
      .then((featureCollection) => {
        featureCollection;
      });
  }, [addressIsValid, geocodingUrl]);

  return (
    <form>
      <div>
        <input type="address" value={address} onChange={handleChangeAddress} />
        <button onSubmit={isValidAddress}>Geocode</button>
      </div>
    </form>
  );
}
