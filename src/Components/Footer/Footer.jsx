import React, { useEffect } from "react";
import video from "../../Assets/video1.mp4";
import "./footer.css";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        {" "}
        <video src={video} muted loop autoPlay typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text" data-aos='fade-up'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" data-aos='fade-up' placeholder="Enter Email Address " />
            <button className="btn flex" data-aos='fade-up' type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                {" "}
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>
            <div className="footerPragraph" data-aos='fade-up'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, voluptate quod. Amet tempore sunt ipsum fugiat
              fugit, voluptatem dignissimos maiores natus consequatur veniam
              fuga excepturi eos iusto ad debitis dolorum. Pariatur, reiciendis
              eum nostrum est quia aspernatur illo atque sit sunt sint
              laboriosam in eos nisi ea ratione quo quis odit quidem fuga
              placeat consequuntur voluptates quam! Voluptatum, reprehenderit
              harum? Quidem iure in Quod molestiae sit rerum libero saepe!
              Corrupti, vel impedit.
            </div>
            <div data-aos='fade-up' className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/*Group one */}
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle"> OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>{" "}
            {/*Group 2 */}
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle"> PARTNER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings{" "}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>{" "}
            {/*Group 3 */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle"> LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Sohag
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Egypt
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            {" "}
            <small>BEST TRAVEL WBBSITE THEME</small>
            <small>COPYRIGHTS RESERVIED - MOHAMMEDGAD 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}
