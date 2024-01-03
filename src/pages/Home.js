// import logo from './logo.svg';
// import './App.css';
import Img1 from "./kohli.jpg"
import Img2 from "./ronaldo.jpg"
import Img3 from "./wwe.jpg"
import Img4 from "./basketball.jpg"
import Img5 from "./hockey1.jpg"
import './home.css'
export default function Home() {
  return (
    <div className="app">
      <div className="hcontainer">
  <div className="card">
  <img src={Img1} alt="" />
    <div className="card__head">Cricket</div>
  </div>
  <div class="card">
  <img src={Img2} alt="" />

    <div className="card__head">Football</div>
  </div>
  <div className="card">
  <img src={Img5} alt="" />
    <div className="card__head">Hockey</div>
  </div>
  <div className="card">
  <img src={Img4} alt="" />
    <div className="card__head">BasketBall</div>
  </div>
  
  <div className="card">
  <img src={Img3} alt="" />
    <div className="card__head">Wrestling</div>
  </div>
</div>
     
    </div>
    
  );
}

