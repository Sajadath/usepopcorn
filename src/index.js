import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App -v1";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(5);
  return <App></App>;
}
root.render(<App></App>);
