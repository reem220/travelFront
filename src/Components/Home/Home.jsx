import React, { useEffect, useState } from "react";
import video from "../../Assets/video1.mp4";
import "./Home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import AuthForm from "../../pages/Login";
import SignUpForm from "../../pages/SignUp";
export default function Home() {
  const islogin = localStorage.getItem("login");
  const user = localStorage.getItem("user");
  console.log(user);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="home">
        {user ? "" : islogin ? <AuthForm /> : <SignUpForm />}
        <div className="overlay"></div>
        <video src={video} typeof="video/mp4" muted autoPlay loop></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up">Our Packages</span>
            <h1 className="homeTitle" data-aos="fade-up">
              Search Your Holiday
            </h1>
          </div>
          <div className="cardDiv grid" data-aos="fade-up">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination :</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here . . . " />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Search your date :</label>
              <div className="input flex">
                <input type="date" placeholder="Enter name here . . . " />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_totel flex">
                <label htmlFor="price">Max Price :</label>
                <h3 className="total">$4000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="7000" min="2000" />
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>MORE FILTERS</span>
            </div>
          </div>
          <div className="homeFooterIcons flex" data-aos="fade-up">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
