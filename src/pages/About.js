import React from 'react';
import './about.css';
import Img from './cricket.jpg'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
const About = () => {
  return (
    <section id="about-section">
      <div className="about-left">
        <img src={Img} alt="About Img" />
      </div>
      <div className="about-right">
        <h1>About Us</h1>
        <p>

          Pro Sports Emporium is your ultimate destination for premium sports gear and equipment. 
          With a passion for excellence, we offer a curated selection of top-notch products catering
           to athletes and sports enthusiasts alike. Our commitment to quality ensures that every item
            in our collection meets the highest standards, enhancing your performance and enjoyment of the game. 
            From cutting-edge apparel to state-of-the-art equipment, Pro Sports Emporium is where your athletic journey begins.
             Embrace the thrill of sports with confidence, knowing that our products are designed to elevate your game. Experience the perfect blend of style, comfort, and functionality discover the Pro Sports Emporium difference today!
        </p>

        <div className="expertise">
          <h3>Contact : </h3>
          <ul>
            <li>
            <Instagram/>
            </li>
            <li>
            <Twitter/>
            </li>
            <li>
            <Facebook />
            </li>
            <li>
            <Linkedin/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
