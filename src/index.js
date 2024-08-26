import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Random from "./components/Random";
import AllAnswer from "./components/AllAnswer";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="" element={<App />} />
          <Route exact path="/random" element={<Random />} />
          <Route exact path="/allAnswer" element={<AllAnswer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
