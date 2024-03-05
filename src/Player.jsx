import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }
  return (
    <div>
      {/* <button onClick={handleBackClick}> Back</button> */}
      <span onClick={handleBackClick} className="material-symbols-outlined">
        arrow_back
      </span>
      {/* <h1>This is the player page</h1> */}

      <iframe
        width="100%"
        height="800px"
        src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=vLYJ7Dwh4LT226mb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Player;
