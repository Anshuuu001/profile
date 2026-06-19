import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/globals.css";
import "./styles/themes.css";
import "./styles/animations.css";
import "./styles/cursor.css";
import "./styles/scrollbar.css";
import "./styles/responsive.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      
    </ThemeProvider>
  </React.StrictMode>
);