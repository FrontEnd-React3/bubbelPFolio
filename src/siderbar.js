import React, { useState } from "react";
import "./exceptionalstyles.css";

// .line {
//   width: 30px;
//   height: 3px;
//   background: white;
//   margin: 5px;
// }
// nav {
//   position: relative;
// }

// .hamburger {
//   position: absolute;
//   cursor: pointer;
//   right: 5%;
//   top: 50%;
//   transform: translate(-5%, -50%);
//   z-index: 2;
// }
// .glass {
//   background: white;
//   min-height: 80vh;
//   width: 60%;
//   background: linear-gradient(
//     to right bottom,
//     rgba(255, 255, 255, 0.7),
//     rgba(255, 255, 255, 0.3)
//   );
//   border-radius: 8rem;
//   z-index: 2;
//   backdrop-filter: blur(0.5rem);
//   display: flex;
// }
// .nav-links {
//   position: fixed;
//   background: #5b78c7;
//   height: 100vh;
//   width: 100%;
//   flex-direction: column;
//   clip-path: circle(100px at 90% -10%);
//   -webkit-clip-path: circle(100px at 90% -10%);
//   transition: all 1s ease-out;
//   pointer-events: none;
// }
// .nav-links.open {
//   clip-path: circle(1000px at 90% -10%);
//   -webkit-clip-path: circle(1000px at 90% -10%);
//   pointer-events: all;
// }
// .landing {
//   flex-direction: column;
// }
// .nav-links li {
//   opacity: 0;
// }
// .nav-links li a {
//   font-size: 25px;
// }
// .nav-links li:nth-child(1) {
//   transition: all 0.5s ease 0.2s;
// }
// .nav-links li:nth-child(2) {
//   transition: all 0.5s ease 0.4s;
// }
// .nav-links li:nth-child(3) {
//   transition: all 0.5s ease 0.6s;
// }
// li.fade {
//   opacity: 1;
// }
// }

import styled from "styled-components";

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  justify-content: start;
  align-items: center;
  display: flex;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background: rgb(1, 134, 203);
  left: 2%;
  margin-top: 2%;
  transform: translate() (-50%, -5%);
  z-index: 20;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;const Hamwrap = styled.div`
position: relative;
height: 100px;
`;
const Nav = styled.div`
  position: relative;
`;
const Line = styled.div`
  background: white;
  width: 30px;
  height: 4px;
  border-radius: 8px;
  margin: 5px 15px 5px 15px;
`;

const TextMenu = styled.div`
  font-family: "roboto";
  color: white;
`;

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });

// const NavLinks.open = styled.div`
// clip-path: cirlce(1000px at 90% -10%);
// -webkit-clip-path: cirlce(1000px at 90% -10%);
// pointer-events: all;
// `;

function Siderbar() {
  const [Open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!Open);
  };
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  function toggleClass() {
    navLinks.classList.toggle("Open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  }
  return (
    <Nav>
      <Hamwrap>
      <Hamburger onClick={handleToggle} class="hamburger">
        <div>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </div>
        <TextMenu>Menu</TextMenu>

        <ul className={Open ? "nav-links nav-linksopen blurry" : "nav-links"}>
          <li className="nav-linksli">
            <a className="nav-linkslia" href="#">
              About
            </a>
          </li>
          <li className="nav-linksli">
            <a className="nav-linkslia" href="#">
              Contact
            </a>
          </li>
          <li className="nav-linksli">
            <a className="nav-linkslia" href="#">
              Projects
            </a>
          </li>
        </ul>
      </Hamburger></Hamwrap>
    </Nav>
  );
}

export default Siderbar;
