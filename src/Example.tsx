import * as React from "react";
import "./exceptionalstyles.css";
import Siderbar from "./siderbar";
import Aboutsection from "./About/aboutsection.js";
import Homesection from "./homesection.js";
import Portfoliosection from "./PFolio/portfolio.js";
import Contactsection from "./contact/contactForm.js";
import styled from "styled-components";

const Parent = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  })
};

export const Example = () => {
  return (
    <Parent>
      <div id="hamabsoluter">
        <Siderbar />
      </div>
      <Section>
        <Homesection />
      </Section>
      <Section>
        <Aboutsection />
      </Section>{" "}
      <Section id="doublelong">
        <Portfoliosection />
      </Section>{" "}
      <Section>
        <Contactsection />
      </Section>
    </Parent>
  );
};
