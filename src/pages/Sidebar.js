// Sidebar.js

import React from 'react';
import './sidebar.css';
import { CircleUser, LogOut } from 'lucide-react';
import ProductCard from './ProductCard';

const Sidebar = () => {
  return (
     <div>
    <div id="sidebar">
      <header className="header">
        <link href="./admin"><CircleUser/></link>
      </header>
      <ul className="nav">
        <li className="dashboard-item">
          <link>
            <i className="zmdi zmdi-view-dashboard"></i>Ball Games
          </link>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><link>Football</link></li>
            <li><link>Basketball</link></li>
            <li><link>VolleyBall</link></li>
            <li><link>Air Pumps</link></li>
            <li><link>Air Pumps</link></li>
            <li><link>CorkBall</link></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <link>
            <i className="zmdi zmdi-view-dashboard"></i>Cricket
          </link>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><link>Cricket Bat</link></li>
            <li><link>Batting Gloves</link></li>
            <li><link>Cricket Helmet</link></li>
            <li><link>Elbow Gaurd</link></li>
            <li><link>Leg Gaurd</link></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <link>
            <i className="zmdi zmdi-view-dashboard"></i> Badminton
          </link>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><link>Racket</link></li>
            <li><link>Shuttlecock</link></li>
            <li><link>Kitbags</link></li>
            <li><link>Accessories</link></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <link>
            <i className="zmdi zmdi-view-dashboard"></i>Shoes
          </link>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><link>Cricket Shoes</link></li>
            <li><link>Tennis Shoes</link></li>
            <li><link>Football Shoes</link></li>
            <li><link>Running Shoes</link></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <link>
            <i className="zmdi zmdi-view-dashboard"></i>Other Sports
          </link>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><link>Chess</link></li>
            <li><link>Hockey</link></li>
            <li><link>Swimming</link></li>
            <li><link>Squash</link></li>
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
