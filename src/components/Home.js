import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
