import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">SHOPEASE</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Quick Links</li>
              <li>
                <a href="link">Home</a>
              </li>
              <li>
                <a href="link">Contact</a>
              </li>
              <li>
                <a href="link"> Privacy</a>
              </li>
              <li>
                <a href="link">Login</a>
              </li>
              <li>
                <a href="link">Signup</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Customer Service</li>
              <li>
                <a href="link">Help Center</a>
              </li>
              <li>
                <a href="link">Returns & Refunds Policy</a>
              </li>
              <li>
                <a href="link">Terms & Conditions</a>
              </li>
              <li>
                <a href="link">Payment Methods</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="link">Profile</a>
              </li>
              <li>
                <a href="link">My account</a>
              </li>
              <li>
                <a href="link">Prefrences</a>
              </li>
              <li>
                <a href="link">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name"> Social Media Links</li>
              <li>
                <a href="link">Facebook</a>
              </li>
              <li>
                <a href="link">Instagram</a>
              </li>
              <li>
                <a href="link">Twitter</a>
              </li>
              <li>
                <a href="link">Youtube</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2025 | Ayush Verma <a href="link"> Shopease</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="link">Privacy policy</a>
              <a href="link">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;