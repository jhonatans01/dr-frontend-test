import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainLayout } from "./components/layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MainLayout />);
