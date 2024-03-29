import React from "react";
import facebook from "../../images/facebook.svg";
import pin from "../../images/pin.svg";
import instagram from "../../images/instagram.svg";
import "./Carte.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Carte = () => {
  return (
    <div id="top" className="Carte">
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
      <div className="title">- À la carte -</div>
      <div className="items">
        <div className="group">
          <h3>Förrätter</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Tzatziki -</h4>
            <p>Med nybakat bröd</p>
            <p className="italic">69 kr</p>
          </div>
          <div className="item">
            <h4>- Toast Skagen -</h4>
            <p>Räkröra och dill i majonnäs toppad med stenbitsrom</p>
            <p className="italic">98 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Varmrätter</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Husets Fläskfilé -</h4>
            <p>Serveras på en bädd av varma grönsaker och kantarellsås</p>
            <p className="italic">229 kr</p>
          </div>
          <div className="item">
            <h4>- Fläskfilé Oscar -</h4>
            <p>
              Serveras med räkor på en bädd av varma grönsaker, bearnaisesås och sparris 
            </p>
            <p className="italic">269 kr</p>
          </div>
          <div className="item">
            <h4>- Black & White -</h4>
            <p>
              Oxfilé och fläskfilé ​serveras med varma grönsaker, bearnaisesås
              och rödvinssås
            </p>
            <p className="italic">285 kr</p>
          </div>
          <div className="item">
            <h4>- Husets Plankstek -</h4>
            <p>Oxfilé med potatismos, baconlindad haricots verts och bearnaisesås</p>
            <p className="italic">315 kr</p>
          </div>
          <div className="item">
            <h4>- Pepparstek av oxfilé -</h4>
            <p>Serveras med fransk grönpepparsås och varma grönsaker</p>
            <p className="italic">315 kr</p>
          </div>
          <div className="item">
            <h4>- Laxfilé -</h4>
            <p>
              Smörstekt laxfilé med varma grönsaker, vitvinsås och kokt potatis
            </p>
            <p className="italic">279 kr</p>
          </div>
          <div className="item">
            <h4>- Lax på planka -</h4>
            <p>
              Serveras med krämig hummersås, citron, dill och varma grönsaker
            </p>
            <p className="italic">299 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Pastarätter</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Tortellini(vegetarisk) -</h4>
            <p>Fyllda med ricotta, spenat, grönsaker och gorgonzolasås</p>
            <p className="italic">169 kr​</p>
          </div>
          <div className="item">
            <h4>- Kycklingpasta -</h4>
            <p>Kyckling i currysås serveras med säsongens grönsaker</p>
            <p className="italic">189 kr</p>
          </div>
          <div className="item">
            <h4>- Husets Pasta -</h4>
            <p>Oxfilé med säsongens grönsaker, toppas med riven parmesanost</p>
            <p className="italic">199 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Husmanskost</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Pytt i Panna -</h4>
            <p>Serveras med stekt ägg, rödbetor och grönsaker</p>
            <p className="italic">120 kr</p>
          </div>
          <div className="item">
            <h4>- Bacon/Falukorv och Ägg -</h4>
            <p>Serveras med grönsaker och friterad klyftpotatis</p>
            <p className="italic">120 kr</p>
          </div>
          <div className="item">
            <h4>- Schnitzel -</h4>
            <p>Serveras med friterad klyftpotatis, grönsaker och bearnaisesås</p>
            <p className="italic">135 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Sallader</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Skinksallad -</h4>
            <p>
              Skinka serveras på en bädd av blandad sallad med tomat, paprika,
              rödlök, gurka, och valfri dressing samt nybakat bröd
            </p>
            <p className="italic">125 kr</p>
          </div>
          <div className="item">
            <h4>- Tonfisksallad -</h4>
            <p>
              Tonfisk serveras på en bädd av blandad sallad med tomat, paprika,
              rödlök, gurka, och valfri dressing samt nybakat bröd
            </p>
            <p className="italic">125 kr</p>
          </div>
          <div className="item">
            <h4>- Kebabsallad -</h4>
            <p>
              Kebabkött serveras på en bädd av blandad sallad med ost, tomat,
              paprika, rödlök, gurka, pepperoni och kebabsås
            </p>
            <p className="italic">125 kr</p>
          </div>

          <div className="item">
            <h4>- Räksallad -</h4>
            <p>
              Räkor serveras på en bädd av blandad sallad med tomat, paprika,
              rödlök, gurka, och valfri dressing samt nybakat bröd
            </p>
            <p className="italic">135 kr</p>
          </div>
          <div className="item">
            <h4>- Kycklingsallad -</h4>
            <p>
              Kyckling serveras på en bädd av blandad sallad med tomat, paprika,
              rödlök, gurka, och valfri dressing samt nybakat bröd
            </p>
            <p className="italic">135 kr</p>
          </div>
          <div className="item">
            <h4>- Grekisk sallad -</h4>
            <p>
              Fetaost och kalamataoliver serveras på en bädd av blandad sallad
              med tomat, paprika, rödlök, gurka, och valfri dressing samt
              nybakat bröd
            </p>
            <p className="italic">135 kr</p>
          </div>
        </div>
        <div className="group">
          <h3>Hamburgare</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Hamburgare 90 gram -</h4>
            <p className="italic">
              70 kr utan ost | 75 kr med ost | 100 kr med ost och pommes frites
            </p>
          </div>
          <div className="item">
            <h4>- Hamburgare 150 gram -</h4>
            <p className="italic">
              80 kr utan ost | 85 kr med ost | 110 kr med ost och pommes frites 
            </p>
          </div>
          {/* <div className="item">
            <h4>- Hamburgare 200 gram -</h4>
            <p className="italic">
              70 kr utan ost | 75 kr med ost | 95 kr med meny
            </p>
            <p className="italic">120 kr</p>
          </div> */}
          <div className="item">
            <h4>- Kebabtallrik -</h4>
            <p className="italic">Avhämtning 115 kr | Servering 125 kr| Barn 115</p>
          </div>
          <div className="item">
            <h4>- Pommestallrik -</h4>
            <p className="italic">35 kr</p>
          </div>
        </div>
        
        <div className="group">
          <h3>För de minsta</h3>
        </div>
        <div className="container">
          {/* <div className="item">
            <h4>- Hamburgare -</h4>
            <p>Med pommes frites</p>
            <p className="italic">69 kr ​</p>
          </div> */}
          <div className="item">
            <h4>- Pannkakor -</h4>
            <p>Med sylt och glass</p>
            <p className="italic">79 kr</p>
          </div>
          <div className="item">
            <h4>- Köttbullar -</h4>
            <p>Med potatismos</p>
            <p className="italic">89 kr</p>
          </div>
          {/* <div className="item">
            <h4>- Barnpizza -</h4>
            <p>Välj mellan pizzorna i Grupp 1</p>
            <p className="italic">79 kr</p>
          </div> */}
        </div>
        
        <div className="group">
          <h3>Desserter</h3>
        </div>
        <div className="container">
          <div className="item">
            <h4>- Vaniljglass -</h4>
            <p>Med kola eller chokladsås</p>
            <p className="italic">59 kr​</p>
          </div>
          <div className="item">
            <h4>- Gino -</h4>
            <p>
              Ugnsgratinerad mango, hallon och banan serveras med vaniljglass
            </p>
            <p className="italic">95 kr ​</p>
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

export default Carte;
