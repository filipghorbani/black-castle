import React, { Component } from "react";
import "./Home.css";
import facebook from "../../images/facebook.svg";
import pin from "../../images/pin.svg";
import instagram from "../../images/instagram.svg";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="head">
          <Link to={ROUTES.HOME}>
            <h1>Black Castle</h1>
          </Link>
        </div>

        <div className="images">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Black+Castle/@59.9516001,17.8740959,17z/data=!3m1!4b1!4m5!3m4!1s0x465fd06d45284729:0x25d44bb53f3295fc!8m2!3d59.9516001!4d17.8762846"
          >
            <img rel="preload" src={pin} height="20" width="20" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/restaurangblackcastle/"
          >
            <img rel="preload" src={facebook} height="20" width="20" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/restaurangblackcastle/"
          >
            <img rel="preload" src={instagram} height="20" width="20" />
          </a>
        </div>
        <div className="item1">
          <Link
            to={ROUTES.PIZZA}
            onClick={() => {
              setTimeout(function () {
                window.scrollTo(0, 0);
              }, 2);
            }}
          >
            Pizzor
          </Link>
        </div>
        <div className="item2">
          <Link
            to={ROUTES.CARTE}
            onClick={() => {
              setTimeout(function () {
                window.scrollTo(0, 0);
              }, 2);
            }}
          >
            À la carte
          </Link>
        </div>
        <div className="item3">
          <Link
            to={ROUTES.DRYCK}
            onClick={() => {
              setTimeout(function () {
                window.scrollTo(0, 0);
              }, 2);
            }}
          >
            Dryck
          </Link>
        </div>
        <div className="location">
          <p>Rasbo Prästgård 5 - 755 96 - Uppsala</p>
          <p>018-36 54 45</p>
        </div>
      </div>
    );
  }
}

export default Home;
