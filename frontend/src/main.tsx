import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./services/App.tsx";
import "./styles/index.css";
import "./styles/game.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
