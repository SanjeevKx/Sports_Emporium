import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        
        <div class='first'>Follow us on</div>
        <div className="sec"> 
         <Facebook/> <Twitter/> <Instagram/> <Linkedin/></div>
      </div>
    </>
  );
};

export default Footer;
