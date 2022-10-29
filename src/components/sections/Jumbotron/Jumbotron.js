import React, {
  lazy,
  Suspense,
  useEffect,
  forwardRef,
  useState,
  useRef,
  useCallback,
} from "react";
import { FaHeadset } from "react-icons/fa";
import LawyersWalking from "../../../images/lawyers-walking.webp";
import CallToAction from "./CallToAction";
import Banner from "./Banner";
import Form from "./Form";
import JumbotronStyles from "./Jumbotron.module.scss";
import CallToActionStyles from "./JumbotronCallToAction.module.scss";
import BannerStyles from "./JumbotronBanner.module.scss";
import FormStyles from "./JumbotronForm.module.scss";
import { GiConsoleController, GiLabCoat } from "react-icons/gi";
// import BackgroundImage from './BackgroundImage';
const BackgroundImage = lazy(() => import("./BackgroundImage"));

export const Jumbotron = forwardRef((props, ref) => {
  const [show, setShow] = useState(true);
  const Hide = () => {
    setShow(!show);
  };

  return (
    <section ref={ref} className={JumbotronStyles.jumbotron}>
      <Suspense fallback={<div></div>}>
        <BackgroundImage
          styles={JumbotronStyles}
          url={LawyersWalking}
          shadow={true}
        />
      </Suspense>
      {show && <Form styles={FormStyles} onClick={Hide} toggle={true} />}

      {
        <Banner
          styles={BannerStyles}
          show={!show}
          words={["Get", "Representation", "Now"]}
        />
      }

      {!show && (
        <CallToAction
          styles={CallToActionStyles}
          words={["605-908-5405"]}
          buttons={["Free Consultation >"]}
          icons={[<FaHeadset />]}
          buttonPosition="bottom"
        />
      )}
    </section>
  );
});
