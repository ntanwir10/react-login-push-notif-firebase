import React from "react";
import fb from "../firebase.config";

const Landing = (props) => {
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("idToken");
    fb.auth().signOut();
  };

  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Log out</button>
      </nav>
    </section>
  );
};

export default Landing;
