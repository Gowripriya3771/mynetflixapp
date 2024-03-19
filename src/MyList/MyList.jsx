import { useNavigate } from "react-router-dom";
import "./MyList.css";

function MyList() {
  let myListitem = [];
  myListitem = JSON.parse(sessionStorage.getItem("myListItem"));

  const navigate = useNavigate();
  function handleCloseIcon(posterItem) {
    let updatedmyList = myListitem.filter((item) => item !== posterItem);

    sessionStorage.setItem("myListItem", JSON.stringify([...updatedmyList]));
    window.location.reload();
  }

  function handleEmptyList() {
    navigate("/");
  }

  return (
    <div className="listData">
      <h1>My List</h1>
      <div className="myListContainers">
        {myListitem.length === 0 ? (
          <div className="emptylist">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png"
              alt="hhh"
            ></img>
            <div className="emptydiv">
              <h1>Empty List!</h1>
              <p>Looks like you haven&apos;t added anything to your list</p>

              <button onClick={handleEmptyList}>Browse +</button>
            </div>
          </div>
        ) : (
          myListitem != [] &&
          myListitem.map((item) => (
            <div key={item} className="close">
              <button
                className="closeButtons"
                onClick={() => handleCloseIcon(`${item}`)}
              >
                X
              </button>
              <img
                className="listImagess"
                key={item}
                src={item}
                //here if we give a function to get the details when clicked on mylist as mylist doesnt contain the id it cant be navigated
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyList;
