import "./Bathroom.scss";

function Bathroom({ video, setLongitude, setLatitude }) {
  const bathroomHandler = (lon, lat) => {
    setLongitude(lon);
    setLatitude(lat);
  };

  return (
    <div className="restrooms">
      <ul className="restrooms__list">
        {video.map((details) => {
          return (
            <li
              key={details.id}
              className="restrooms__item"
              style={{ cursor: "pointer" }}
              onClick={() =>
                bathroomHandler(details.longitude, details.latitude)
              }
            >
              <h3 className="restrooms__header">{details.name}</h3>
              <p>{details.street}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Bathroom;
