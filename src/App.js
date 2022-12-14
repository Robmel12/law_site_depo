import React, { useState, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import Home from './components/pages/Home';
import { Home } from "./components/pages/Home";

import "./css/globals.scss";

import ScrollToTop from "./components/pages/Pagefunctions/ScrollToTop";
import useScrollPosition from "./components/pages/Pagefunctions/useScrollPosition";
import Resources from "./components/pages/Resources";

const OurAttorneys = lazy(() => import("./components/pages/OurAttorneys"));
const PracticeAreas = lazy(() => import("./components/pages/PracticeAreas"));
const BigFooter = lazy(() => import("./components/sections/Footer/BigFooter"));
const Navbar = lazy(() => import("./components/sections/Header/Navbar/Navbar"));

function App() {
  const [useDarkLogo, setUseDarkLogo] = useState(true);
  const [useWhiteLogo, setUseWhiteLogo] = useState(false);
  const [useWhiteLinks, setUseWhiteLinks] = useState(true);
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const shrink = currPos.y < -10;
      if (shrink !== shrinkLogo) {
        setShrinkLogo(shrink);
      }
    },
    [shrinkLogo]
  );

  return (
    <Router >
      <ScrollToTop />
      <Suspense fallback={<div>..loading</div>}>
        <Navbar
          setShrinkLogo={setShrinkLogo}
          shrinkLogo={shrinkLogo}
          useWhiteLinks={useWhiteLinks}
          useDarkLogo={useDarkLogo}
          useWhiteLogo={useWhiteLogo}
        />

        <Routes>
          <Route

            exact path="/"
            index
            element={
              <Home
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />

          <Route
            path="/our-attorneys"
            exact
            element={
              <OurAttorneys
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />

          <Route
            path="/practice-areas"
            exact
            element={
              <PracticeAreas
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />

          <Route
            path="/resources"
            exact
            element={
              <Resources
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />
        </Routes>
        <BigFooter />
      </Suspense>
    </Router>
  );
}

export default App;
