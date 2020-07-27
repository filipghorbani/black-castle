import React from "react";
import facebook from "../../images/facebook.svg";
import pin from "../../images/pin.svg";
import instagram from "../../images/instagram.svg";
import "./Pizza.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Pizza = () => {
  return (
    <div id="top" className="Pizza">
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
      <div className="title">- Pizzor -</div>
      <div className="items">
        <div className="group">
          <h3>Grupp 1</h3>
          <p>Barnpizza 75 kr | Avhämtning 85 kr | Servering 95 kr</p>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Margarita -</h4>
            <p>Tomat och ost</p>
          </div>
          <div className="item">
            <h4>- Fungi -</h4>
            <p>Tomat, ost och champinjoner</p>
          </div>
          <div className="item">
            <h4>- Veusivo -</h4>
            <p>Tomat, ost och skinka</p>
          </div>
          <div className="item">
            <h4>- Calzone -</h4>
            <p>Tomat, ost och skinka (inbakad)</p>
          </div>
          <div className="item">
            <h4>- Du Chef -</h4>
            <p>Tomat, ost och köttfärs</p>
          </div>
          <div className="item">
            <h4>- Capricciosa -</h4>
            <p>Tomat, ost, skinka och färska champinjoner</p>
          </div>
          <div className="item">
            <h4>- Hawaii -</h4>
            <p>Tomat, ost, skinka och ananas</p>
          </div>
        </div>
        <div className="group">
          <h3>Grupp 2</h3>
          <p>Barnpizza 85 kr | Avhämtning 90 kr | Servering 100 kr</p>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Bussola -</h4>
            <p>Tomat, ost, skinka och räkor</p>
          </div>
          <div className="item">
            <h4>- Marinara -</h4>
            <p>Tomat, ost, räkor och musslor</p>
          </div>
          <div className="item">
            <h4>- Al Tonno -</h4>
            <p>Tomat, ost, lök och tonfisk</p>
          </div>
          <div className="item">
            <h4>- Toscana -</h4>
            <p>Tomat, ost, lök, ägg och bacon</p>
          </div>
          <div className="item">
            <h4>- Campaniola -</h4>
            <p>Tomat, ost, lök, oliver, och salami</p>
          </div>
        </div>
        <div className="group">
          <h3>Grupp 3</h3>
          <p>Barnpizza 90 kr | Avhämtning 95 kr | Servering 105 kr</p>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Vegetale -</h4>
            <p>
              Tomat, ost, rödlök, färska champinjoner, paprika, kronärtskocka,
              oliver och ruccola
            </p>
          </div>
          <div className="item">
            <h4>- Napoletana -</h4>
            <p>Tomat, ost, oliver, kapris och sardeller</p>
          </div>
          <div className="item">
            <h4>- Orientale special -</h4>
            <p>Tomat, ost, champinjoner, ägg, lök och köttfärs</p>
          </div>
          <div className="item">
            <h4>- Mamma Mia -</h4>
            <p>Tomat, ost, lök, färska tomater, bacon, salami och köttfärs</p>
          </div>
          <div className="item">
            <h4>- Bolognese -</h4>
            <p>Tomat, ost, purjolök, fetaost, oliver och köttfärs</p>
          </div>
          <div className="item">
            <h4>- Calzone special -</h4>
            <p>Tomat, ost, skinka, färska champinjoner och räkor</p>
          </div>
          <div className="item">
            <h4>- Tropicana -</h4>
            <p>Tomat, ost, skinka, banan, jordnötter och curry</p>
          </div>
          <div className="item">
            <h4>- Kebab Pizza -</h4>
            <p>
              Tomat, ost, lök, pepperoni, färska tomater, kebabkött och
              vitlökssås
            </p>
          </div>
        </div>
        <div className="group">
          <h3>Grupp 4</h3>
          <p>Barnpizza 95 kr | Avhämtning 100 kr | Servering 110 kr</p>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Quattro Stagioni -</h4>
            <p>
              Tomat, ost, skinka, färska champinjoner, räkor, kronärtskocka och
              oliver
            </p>
          </div>
          <div className="item">
            <h4>- Quatro Formaggio -</h4>
            <p>Tomat, ost, mozzarella, gorgonzola, fetaost och parmesanost</p>
          </div>
          <div className="item">
            <h4>- Casabella -</h4>
            <p>Tomat, ost, färska champinjoner, räkor, tonfisk och curry</p>
          </div>
          <div className="item">
            <h4>- El Pollo -</h4>
            <p>
              Tomat, ost, paprika, ruccola, rödlök, färska tomater, kyckling och
              curry
            </p>
          </div>
          <div className="item">
            <h4>- Messicana -</h4>
            <p>Tomat, mozzarella, rödlök, vitlök, jalapeños och köttfärs</p>
          </div>
        </div>
        <div className="group">
          <h3>Grupp 5</h3>
          <p>Barnpizza 110 kr | Avhämtning 115 kr |Servering 125 kr</p>
        </div>
        <div className="container">
          <div className="item">
            <h4>- El Toro -</h4>
            <p>
              Tomat, ost, skinka, färska champinjoner och räkor (dubbelinbakad)
            </p>
          </div>
          <div className="item">
            <h4>- Ciao Ciao -</h4>
            <p>
              Tomat, ost, färska tomater, lök, färska champinjoner, oxfilé och
              bearnaisesås (halvinbakad)
            </p>
          </div>
          <div className="item">
            <h4>- Delicate -</h4>
            <p>
              Tomat, mozzarellaost, paprika, vitlök, jalapeños, oxfilé och
              bearnaisesås
            </p>
          </div>
          <div className="item">
            <h4>- Gorgonzola -</h4>
            <p>
              Tomat, ost, lök, färska tomater, fläskfilé och gorgonzolaost
              (halvinbakad)
            </p>
          </div>
          <div className="item">
            <h4>- Roma -</h4>
            <p>Tomat, mozzarella, parmaskinka, ruccola och riven parmesan</p>
          </div>
          <div className="item">
            <h4>- Bella Rasbo -</h4>
            <p>
              Tomat, ost, lök, färska champinjoner, salami, paprika, färska
              tomater, bacon och köttfärs
            </p>
          </div>
          <div className="item">
            <h4>- Trävlinge special -</h4>
            <p>
              Tomat, ost, lök, pommes frites, pepperoni, isbergssallad, kebab
              och vitlökssås
            </p>
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
          <h1>Black Castle</h1>
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

export default Pizza;
