import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-col mt-5 gap-5">
        <a href="/state">useState Example</a>
        <a href="/effect">useEffect Example</a>
        <a href="/context">useContext Example</a>
        <a href="/ref">useRef Example</a>
        <a href="/fetch">Fetch Method Example</a>
        <a href="/axios">Axios Method Example</a>
      </div>
    </div>
  );
};

export default Home;
