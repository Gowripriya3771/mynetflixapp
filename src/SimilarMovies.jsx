// import { useContext } from "react";
// import { UserContext } from "./Row";

import axios from "./axios";
import { useEffect, useState } from "react";
import requests from "./requests";

// function SimilarMovies({ data }) {
//   const { movies } = useContext(UserContext);

//   console.log("@@@", movies);

//   return (
//     <div>
//       <h1>{data.overview}</h1>
//       <p>{movies}</p>
//     </div>
//   );
// }

function SimilarMovies(props) {
  const [movies, setMovies] = useState([]);
  const fetchUrl = Object.values(requests);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request.data.results;
    }

    fetchData();
  }, [fetchUrl]);

    // const movieArray= movies.filter((item)=>
    //   item.genre[0].id===props.data.genres[0].id)
    //   console.log(movieArray)

  return <div>
    {/* {movieArray.map((mov)=>(
        <img src=""/>
    )

    })} */}
  </div>;
}

export default SimilarMovies;

// function filterMoviesByYear(year) {
//     return movies.filter(function(movie) {
//         return movie.genre_id=== details.genree_id;
//     });
// }

// export default SimilarMovies;
