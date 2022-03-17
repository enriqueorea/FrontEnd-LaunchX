import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { PrimaryBtn } from "..";

import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <h1>vaccination</h1>
        </a>
      </div>
      <div className="app__navbar-content">
        <ul className="app__navbar-links">
          {["database", "education", "news", "regulation"].map((link) => (
            <li key={`link-${link}`} className="app__flex p-text">
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        <PrimaryBtn title="hoax buster" />
      </div>
      <div className="app__navbar-movil">
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <div>
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {["database", "education", "news", "regulation"].map(
                    (link) => (
                      <li className="p-text" key={link}>
                        <a onClick={()=> setToggle(false)} href={`#${link}`}>{link}</a>
                      </li>
                    )
                  )}
                </ul>
                <PrimaryBtn title="hoax buster" />
              </div>
            )}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
