import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncr = () => setCount((prev) => prev + 1);
  const handleDecr = () => setCount((prev) => prev - 1);
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/about/${count}`}>About</Link>
      <Link to="/profile">Profile</Link>

      <div>
        <h1 style={{ display: "block" }}>{count}</h1>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;
