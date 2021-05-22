import React, { useState } from "react";
import Login from "../components/Login";
import Landing from "../components/Landing";

function Home(props) {
  const [user, setUser] = useState();
  return (
    <div>
      {user ? (
        <Landing {...props} />
      ) : (
        <Login user={user} setUser={setUser} {...props} />
      )}
    </div>
  );
}

export default Home;
