import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
export default function Navbar() {
  const [active, setactive] = useState("navBar");
  const [islogin, setislogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) setislogin(true);
  }, []);
  function removeuser() {
    localStorage.removeItem("user");
    localStorage.setItem('login',true)
    window.location.reload();
  }
  const showNav = () => {
    setactive("navBar activeNavBar");
  };
  const hideNav = () => {
    setactive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <SiYourtraveldottv className="icon" /> Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            {!islogin ? (
              <button
                className="btn"
                onClick={() => {
                  localStorage.removeItem("login");
                  window.location.reload()
                }}
              >
                <a href="#">Registration</a>
              </button>
            ) : (
              <button className="btn" onClick={removeuser}>
                <a href="#">L o g O u t</a>
              </button>
            )}
          </ul>
          <div onClick={hideNav} className="closeNavBar ">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}
