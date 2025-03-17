import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Audio from "./components/Audio";
import NavBar from "./components/Navbar";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="foldit-regular">
        <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              key={"home"}
              index
              element={<Home />}
            />
            <Route
              key={"about"}
              path="about"
              element={<About />}
            />
            <Route
              key={"audio"}
              path="audio"
              element={<Audio />}
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
