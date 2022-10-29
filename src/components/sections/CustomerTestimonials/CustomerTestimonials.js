import { Testimonials } from "./Testimonials";
import { AiFillStar } from "react-icons/ai";
import { ImBubbles2 } from "react-icons/im";
import React, { forwardRef, useEffect, useState } from "react";
import Heading from "../Services/Heading";
//generate stars from testimonial stars property
function Stars(starCount) {
  if (starCount > 5) {
    starCount = 5;
  }
  let Stars = [];
  for (let i = 0; i < starCount; i++) {
    Stars.push(<AiFillStar key={i} />);
  }
  return Stars;
}

//create testimonial
function Testimonial(props) {
  return (
    <div className={"testimonial"} style={props.style}>
      <div className="thumbs">{props.thumbs}</div>
      <div className="stars">{Stars(props.stars)}</div>
      <div className="compliment">{props.compliment}</div>
      <div className="testimony">
        <span className="quotes">"</span>
        {props.text}
        <span className="quotes">"</span>
      </div>
      <div className="customer">{props.customer}</div>
      <div className="hr"></div>
    </div>
  );
}

export const CustomerTestimonials = forwardRef((props, ref) => {
  //position in testimonial rotation
  const [TestimonialPosition, setTestimonialPosition] = useState(0);
  useEffect(() => {
    function counter() {
      let leadTest;

      //First In Line
      let FIL;
      //Last In Line
      let LIL;

      if (TestimonialPosition - 1 >= 0) {
        FIL = TestimonialPosition - 1;
      } else {
        FIL = Testimonials.length - 1;
      }
      if (TestimonialPosition + 1 < Testimonials.length) {
        leadTest = TestimonialPosition + 1;
      } else {
        leadTest = 0;
      }

      if (TestimonialPosition === Testimonials.length - 1) {
        LIL = 1;
      } else if (TestimonialPosition === Testimonials.length - 2) {
        LIL = 0;
      } else {
        LIL = TestimonialPosition + 2;
      }
      const MainTestStyles = {
        opacity: 1,
        transform: "translateY(-70px)",
        transition: "2.0s ease-in-out",
      };
      const SecondTestStyles = {
        opacity: 0,
        transform: "translateY(270px)",
        transition: "2.0s ease-in-out",
      };
      const LILtestStyles = {
        opacity: 0,
        transform: "translateY(-190px) scale(.95)",
        transition: "2.0s ease-in-out",
      };
      const FILtestStyles = {
        opacity: 0,
        transform: "translateY(300px) scale(.95)",
        transition: "2.0s ease-in-out",
      };
      //Get testimonial position find adjacent testimonials
      let MainTest =
        document.getElementsByClassName("testimonial")[TestimonialPosition];
      let SecondTest = document.getElementsByClassName("testimonial")[leadTest];
      let FILtest = document.getElementsByClassName("testimonial")[LIL];
      let LILtest = document.getElementsByClassName("testimonial")[FIL];
      //assign styles
      Object.assign(MainTest.style, MainTestStyles);
      Object.assign(SecondTest.style, SecondTestStyles);
      Object.assign(FILtest.style, FILtestStyles);
      Object.assign(LILtest.style, LILtestStyles);
      //Rotate Tests
      if (TestimonialPosition < Testimonials.length - 1) {
        setTestimonialPosition(TestimonialPosition + 1);
      } else {
        setTestimonialPosition(0);
      }
    }
    const indexId = setInterval(counter, 5000);
    return () => {
      clearInterval(indexId);
    };
  }, [TestimonialPosition]);

  return (
    <section ref={ref} className="customer-testimonials">
      <div className="testimonial-heading-icon">
        <ImBubbles2 />
      </div>

      <Heading
        heading="Here Is What People Have To Say About Us"
        className="customer-testimonials-heading"
      />
      <div className="hr"></div>
      <div className="testimonials-container">
        {Testimonials.map((e, index) => {
          return (
            <Testimonial
              key={index}
              thumbs={e.thumbs}
              stars={e.stars}
              text={e.text}
              compliment={e.compliment}
              customer={e.customer}
              index={index}
              style={
                index === 1
                  ? { transform: "translateY(400px)" }
                  : index === 0
                  ? { transform: "translateY(-70px)" }
                  : { opacity: "0" }
              }
            />
          );
        })}
      </div>
    </section>
  );
});
