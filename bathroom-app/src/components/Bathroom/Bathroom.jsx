function Bathroom({ video }) {
    return (
        <>
            return (
            {video.map((details) => {
                return (
                    <>
                        <h3>{details.name}</h3>
                        <p>{details.street}</p>
                        <p>{details.directions}</p>
                        <p>Reviews: {details.upvote}</p>
                    </>
                );
            })}
            )
        </>
    );
}

export default Bathroom;
