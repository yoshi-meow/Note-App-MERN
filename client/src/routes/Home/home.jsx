import React from "react";
import Notes from "../../components/Notes";

function home() {
  return (
    <div>
      <h1>Note App MERN</h1>
      <p>Hi👋, this is my first ever MERN App 🙋‍♀️,</p>
      <p>
        Vite + React with Material UI simple website. It uses Node.js, Express &
        MongoDB as a backend!
      </p>

      {/* Fetch All Notes from Database */}
      <Notes />
    </div>
  );
}

export default home;
