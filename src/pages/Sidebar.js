// Sidebar.js

import React from 'react';
import './sidebar.css';
import { CircleUser, LogOut } from 'lucide-react';
import ProductCard from './ProductCard';
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
     <div>
    <div id="sidebar">
      <header className="header">
        <Link class='Link' to ='/admin'><CircleUser/>
        </Link>
      </header>
      <ul className="nav">
        <li className="dashboard-item">
          <span>
            <i className="zmdi zmdi-view-dashboard"></i>Ball Games
          </span>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><span>Football</span></li>
            <li><span>Basketball</span></li>
            <li><span>VolleyBall</span></li>
            <li><span>Air Pumps</span></li>
            <li><span>Air Pumps</span></li>
            <li><span>CorkBall</span></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="zmdi zmdi-view-dashboard"></i>Cricket
          </span>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><span>Cricket Bat</span></li>
            <li><span>Batting Gloves</span></li>
            <li><span>Cricket Helmet</span></li>
            <li><span>Elbow Gaurd</span></li>
            <li><span>Leg Gaurd</span></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="zmdi zmdi-view-dashboard"></i> Badminton
          </span>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><span>Racket</span></li>
            <li><span>Shuttlecock</span></li>
            <li><span>Kitbags</span></li>
            <li><span>Accessories</span></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="zmdi zmdi-view-dashboard"></i>Shoes
          </span>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><span>Cricket Shoes</span></li>
            <li><span>Tennis Shoes</span></li>
            <li><span>Football Shoes</span></li>
            <li><span>Running Shoes</span></li>
          </ul>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="zmdi zmdi-view-dashboard"></i>Other Sports
          </span>
          {/* Sublist for Dashboard */}
          <ul className="sublist">
            <li><span>Chess</span></li>
            <li><span>Hockey</span></li>
            <li><span>Swimming</span></li>
            <li><span>Squash</span></li>
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
