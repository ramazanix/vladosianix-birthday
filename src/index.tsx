import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/*"
          element={<App />}
        />
      </Routes>
    </Router>
  </StrictMode>
);
