// Productcard12.js
import React from 'react';
import './productcard.css'
const Productcard12 = () => {
  return (
    <section className="product-container product-1">
      <div className="card12">
        <div className="photo"></div>
        <div className="content">
          <div className="mytitle">Football Boots</div>
          <div className="bg-mytitle">CR7</div>
          <div className="feature size">
            <div>SIZE :</div>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="feature color">
            <div>color :</div>
            <span>Black</span>
            <span className="tt">Blue</span>
            <span className="ttt">Red</span>
          </div>
          <button className="btn-buy">Buy now</button>
          <button className="btn-buy">Add to Cart</button>
        </div>
      </div>
      <div className="card12">
        <div className="photo"></div>
        <div className="content">
          <div className="mytitle">Football socks</div>
          <div className="bg-mytitle">CR7</div>
          <div className="feature size">
            <div>size :</div>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
          <div className="feature color">
            <div>color :</div>
            <span>Black</span>
            <span className="tt">Blue</span>
            <span className="ttt">Green</span>
          </div>
          <button className="btn-buy">Buy now</button>
          <button className="btn-buy">Add to cart</button>
        </div>
      </div>
      <div className="card12">
        <div className="photo"></div>
        <div className="content">
          <div className="mytitle">Football Gloves</div>
          <div className="bg-mytitle">CR7</div>
          <div className="feature size">
            <div>size :</div>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
          <div className="feature color">
            <div>color :</div>
            <span>Black</span>
            <span className="tt">Grey</span>
            <span className="ttt">Green</span>
          </div>
          <button className="btn-buy">Buy now</button>
          <button className="btn-buy">Add to cart</button>
        </div>
      </div>
      <div className="card12">
        <div className="photo"></div>
        <div className="content">
          <div className="mytitle">Football Jersey</div>
          <div className="bg-mytitle">CR7</div>
          <div className="feature size">
            <div>size :</div>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
          <div className="feature color">
            <div>team :</div>
            <span>CFC</span>
            <span className="tt">FCG</span>
            <span className="ttt">BFC</span>
          </div>
          <button className="btn-buy">Buy now</button>
          <button className="btn-buy">Add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default Productcard12;
