import "./Bathroom.scss";

function Bathroom({ bathrooms, selectBathroomHandler }) {
  return (
    <div className="restrooms">
      <ul className="restrooms__list">
        {bathrooms.map((bathroom) => {
          return (
            <li
              key={bathroom.id}
              className="restrooms__item"
              style={{ cursor: "pointer" }}
              onClick={() =>
                selectBathroomHandler({
                  lon: bathroom.longitude,
                  lat: bathroom.latitude,
                })
              }
            >
              <h3 className="restrooms__header">{bathroom.name}</h3>
              <p>{bathroom.street}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Bathroom;
