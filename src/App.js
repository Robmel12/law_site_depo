import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from './components/pages/Home';
import { Home } from "./components/pages/Home";

import "./css/globals.scss";

import ScrollToTop from "./components/pages/Pagefunctions/ScrollToTop";
import useScrollPosition from "./components/pages/Pagefunctions/useScrollPosition";
import References from "./components/pages/References";

const Marketing = lazy(() => import("./components/pages/Marketing"));
const Consulting = lazy(() => import("./components/pages/Consulting"));

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
    <Router>
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
            path="/law_site_depo"
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
            path="/law_site_depo/our-attorneys"
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
            path="/law_site_depo/practice-areas"
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
            path="/law_site_depo/consulting"
            exact
            element={
              <Consulting
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />
          <Route
            path="/law_site_depo/references"
            exact
            element={
              <References
                setUseDarkLogo={setUseDarkLogo}
                setUseWhiteLinks={setUseWhiteLinks}
                setUseWhiteLogo={setUseWhiteLogo}
              />
            }
          />

          <Route
            path="/law_site_depo/marketing"
            exact
            element={
              <Marketing
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
