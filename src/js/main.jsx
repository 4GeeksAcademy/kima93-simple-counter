import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter";
import Home from "./components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";



const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Home />
      <SecondsCounter seconds={counter} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
