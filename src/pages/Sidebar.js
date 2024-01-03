// Sidebar.js

import React from 'react';
import './sidebar.css';
import { CircleUser, LogOut } from 'lucide-react';
import ProductContainer from './ProductContainer';
import ProductCard from './ProductCard';

const Sidebar = () => {
  return (
     <div>
    <div id="sidebar">
      <header className="header">
        <a href="./admin"><CircleUser/></a>
      </header>
      <ul className="nav">
        <li className="dashboard-item">
          <a href="#">
            <i className="zmdi zmdi-view-dashboard"></i>Ball Games
          </a>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><a href="#">Football</a></li>
            <li><a href="#">Basketball</a></li>
            <li><a href="#">VolleyBall</a></li>
            <li><a href="#">Air Pumps</a></li>
            <li><a href="#">Air Pumps</a></li>
            <li><a href="#">CorkBall</a></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <a href="#">
            <i className="zmdi zmdi-view-dashboard"></i>Cricket
          </a>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><a href="#">Cricket Bat</a></li>
            <li><a href="#">Batting Gloves</a></li>
            <li><a href="#">Cricket Helmet</a></li>
            <li><a href="#">Elbow Gaurd</a></li>
            <li><a href="#">Leg Gaurd</a></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <a href="#">
            <i className="zmdi zmdi-view-dashboard"></i> Badminton
          </a>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><a href="#">Racket</a></li>
            <li><a href="#">Shuttlecock</a></li>
            <li><a href="#">Kitbags</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <a href="#">
            <i className="zmdi zmdi-view-dashboard"></i>Shoes
          </a>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><a href="#">Cricket Shoes</a></li>
            <li><a href="#">Tennis Shoes</a></li>
            <li><a href="#">Football Shoes</a></li>
            <li><a href="#">Running Shoes</a></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <a href="#">
            <i className="zmdi zmdi-view-dashboard"></i>Other Sports
          </a>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><a href="#">Chess</a></li>
            <li><a href="#">Hockey</a></li>
            <li><a href="#">Swimming</a></li>
            <li><a href="#">Squash</a></li>
          </ul>

        </li>
        <div className="log">
           <LogOut/>
        </div>
       
      </ul>
    </div>
    <ProductCard/>
    </div>
  );
};

export default Sidebar;
