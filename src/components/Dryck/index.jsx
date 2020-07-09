import React from "react";
import facebook from "../../images/facebook.svg";
import pin from "../../images/pin.svg";
import instagram from "../../images/instagram.svg";
import "./Dryck.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Dryck = () => {
  return (
    <div id="top" className="Dryck">
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
      <div className="title">- Dryck -</div>
      <div className="items">
        <div className="group">
          <h3>Alkoholfritt</h3>
        </div>
        <div className="container">
          <div className="item">
            <p>Läsk 33cl</p>
            <p className="italic">20 kr</p>
          </div>
          <div className="item">
            <p>Mineralvatten</p>
            <p className="italic">20 kr</p>
          </div>
          <div className="item">
            <p>Juice</p>
            <p className="italic">20 kr</p>
          </div>
          <div className="item">
            <p>Kaffe</p>
            <p className="italic">20 kr</p>
          </div>
          <div className="item">
            <p>Te</p>
            <p className="italic">20 kr</p>
          </div>
          <div className="item">
            <p>Läsk flaska 33cl</p>
            <p className="italic">25 kr</p>
          </div>
          <div className="item">
            <p>Red Bull</p>
            <p className="italic">30 kr</p>
          </div>
          <div className="item">
            <p>Alkoholfri Briska Päron 33cl</p>
            <p className="italic">50 kr</p>
          </div>
          <div className="item">
            <p>Alkoholfri Mariestad 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Alkoholfritt Vin</p>
            <p className="italic">65 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Öl</h3>
        </div>
        <div className="container">
          <div className="item">
            <p>Lättöl 33cl</p>
            <p className="italic">25 kr</p>
          </div>
          <div className="item">
            <p>Mellanöl 33cl</p>
            <p className="italic">50 kr</p>
          </div>
          <div className="item">
            <p>Sol 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Heineken 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Krusovice Imperial 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Sitting Bulldog IPA 33cl</p>
            <p className="italic">65 kr</p>
          </div>
          <div className="item">
            <p>Sleepy Bulldog Pale Ale 33cl</p>
            <p className="italic">65 kr</p>
          </div>
          <div className="item">
            <p>Mariestad 50cl</p>
            <p className="italic">65 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Cider</h3>
        </div>
        <div className="container">
          <div className="item">
            <p>Briska Päron 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Briska Fläder 33cl</p>
            <p className="italic">55 kr</p>
          </div>
          <div className="item">
            <p>Briska Sunny Apple EKO 33cl</p>
            <p className="italic">55 kr</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="small">
          <h4>Kontakt</h4>
          <p>
            Rasbo Prästgård <br />
            75596 <br />
            Uppsala <br />
            <br />
            018-36 54 45
          </p>
        </div>
        <div className="big">
          <h1>- Black Castle -</h1>
        </div>
        <div className="small">
          <h4>Öppettider</h4>
          <p>
            Mån-Tor: 11-20 <br />
            Fre: 11-21 <br />
            Lör: 12-21 <br />
            Sön: 12-20
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dryck;
