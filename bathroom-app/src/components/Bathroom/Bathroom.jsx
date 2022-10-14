function Bathroom({ video }) {
  return (
    <div className="restrooms">
      <ul className="restrooms__list">
        {video.map((details) => {
          return (
            <li key={details.id} className="restrooms__item">
              <h3 className="restrooms__header">{details.name}</h3>
              <p>{details.street}</p>
              {/* <p>{details.directions}</p> */}
              {/* <p>Reviews: {details.upvote}</p> */}
            </li>
          );
        })}
        )
      </ul>
    </div>
  );
}

export default Bathroom;
