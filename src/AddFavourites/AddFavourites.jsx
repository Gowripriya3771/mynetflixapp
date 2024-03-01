import { useState } from "react";
import "./AddFavourites.css";

function AddFavourites() {
  const [addFavourites, setAddFavourites] = useState([]);
  const handleFavourite = (movie) => {
    const newFavMov = [...addFavourites, movie];
    setAddFavourites(newFavMov);
  };
  return (
    <div className="addFav" onClick={()=>handleFavourite(movie)}>
      <span>Add to favourites</span>
      <span className="material-symbols-outlined">favorite</span>
      {/* {newFavMov.map((item)=>item.original_title)} */}
    </div>
  );
}

export default AddFavourites;
