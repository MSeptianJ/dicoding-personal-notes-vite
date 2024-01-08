import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./assets/styles/index.css";
import DataContextProvider from "./contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <Root />
    </DataContextProvider>
  </React.StrictMode>,
);
