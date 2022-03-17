import React from "react";
import './Footer.css'


const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-header">
        <div className="app__navbar-logo">
          <a href="#home">
            <h1>vaccination</h1>
          </a>
        </div>
        <p className="p-text">
          our goal is to help the world free from the ongoing pandemic
        </p>
      </div>
      <div className="app__footer-info">
        <div className="about">
          <h3>About</h3>
          <p>about us</p>
          <p>features</p>
          <p>news & blog</p>
        </div>
        <div className="company">
          <h3>company</h3>
          <p>how we work?</p>
          <p>capital</p>
          <p>security</p>
        </div>
        <div className="support">
          <h3>support</h3>
          <p>FAQs</p>
          <p>support center</p>
          <p>contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
