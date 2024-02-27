import { useNavigate } from "react-router-dom";


function MovieDetails() {
  const navigate=useNavigate()
  function handleNavigate(){
    // to go back to previous page
    navigate(-1)
  }
  return (
    <div>
      <button onClick={handleNavigate}>Back</button>
      <h1>Title Movie</h1>
      <h1>Rating</h1>
      <h1>Duration</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        aperiam mollitia eaque ullam ab perspiciatis facilis quod eos adipisci
        sit minima qui, ab perspiciatis facilis quod eos adipisci
        sit minima qui, assumenda eum consequatur odio id nihil reprehenderit
        iure!
      </p>
      <button>Play</button>
      <button> + My List</button>
      {/* <img>Like icon</img>
      <img>Dislike icon</img> */}
    </div>
  );
}

export default MovieDetails;
//dynamically navigate details based on movie id
//more like this rail under the details which belongs to the same genre
