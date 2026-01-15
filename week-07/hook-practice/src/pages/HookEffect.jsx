import React from "react";
import { useEffect, useState } from "react";

const HookEffect = () => {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("Effect ran");
    }, 5000);

    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));

    return () => console.log("Cleanup ran");
  }, [count]);

  return (
    <div>
      <h1 className="mb-5">useEffect Example</h1>
      <li className="text-justify">
        Open the console and click the button to see the effect and cleanup
        run.how cleanup was runing before the effect run again
      </li>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>

      <h3 className="mt-5 text-5xl mb-10">Fetch api response below</h3>

      {post.length > 0 ? (
        post.map((list) => <p key={list.id}>{list.title}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HookEffect;
