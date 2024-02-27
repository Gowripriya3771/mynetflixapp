import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }
  return (
    <div>
      <button onClick={handleBackClick}> Back</button>
      <h1>This is the player page</h1>
      <video src=""></video>
    </div>
  );
}

export default Player;
