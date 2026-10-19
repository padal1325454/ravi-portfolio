import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import App from "./App";
// Self-hosted Poppins (font-display: swap); only the weights the UI uses.
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "./index.css";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  new Lenis({ autoRaf: true, anchors: true });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
