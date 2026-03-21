import { useState } from "react";
import Imagecard from "./component/Imagecard";
import "./App.css";
import { userData } from "./constants/constant";

function App() {

  const [showFlag, setShowFlag] = useState(null);

  const clickHandler = (id) => {
    if (showFlag === id) {
      setShowFlag(null);
    } else {
      setShowFlag(id);
    }
  };

  return (
    <div className="App">

      {userData.map((user) => (

        <div key={user.githubId}>

          <Imagecard
            name={user.name}
            imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}`}
          />

          <h3
            style={{ cursor: "pointer" }}
            onClick={() => clickHandler(user.githubId)}
          >
            {user.isStudent ? "Student" : "Mentor"} ⬇⬇⬇
          </h3>

          {showFlag === user.githubId && (
            <p>{user.bioDescription}</p>
          )}

        </div>

      ))}

    </div>
  );
}

export default App;