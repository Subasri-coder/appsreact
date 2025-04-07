import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Random from "./Random"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="style">
  <Counter/>
  <Random/>
  </div>
)