import React, {useState, useEffect} from "react";
import facebook from "../../images/facebook.svg";
import pin from "../../images/pin.svg";
import instagram from "../../images/instagram.svg";
import "./Pizza.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { db } from "../../firebase.js";
import { collection, getDocs, listCollections } from "firebase/firestore"; 

const Pizza = () => {

  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || [])
  const [pizzas, setPizzas] = useState(JSON.parse(localStorage.getItem('pizzas')) || [])
  
  useEffect(() => {
    const getData = async() => {
      console.log(groups)
      if(groups.length == 0) {
        const data1 = await getDocs(collection(db, "Groups"));
        setGroups(data1.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }

      if(pizzas.length == 0) {
        const data2 = await getDocs(collection(db, "Pizzas"));
        setPizzas(data2.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    }
    getData()
  }, [])

useEffect(()=>{
  localStorage.setItem('groups', JSON.stringify(groups))
},[groups]);

useEffect(()=>{
  localStorage.setItem('pizzas', JSON.stringify(pizzas))
},[pizzas]);


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
          { groups && groups.map((group) => (
            <>
              <h3>Grupp {group.id}</h3>
              <h4>Avhämtning {group.Pickup} kr | Servering {group.Serve} kr</h4>
              <div className="container">
                {pizzas && pizzas.map((pizza) => (
                  <>
                    {pizza.Group == group.id ? 
                    <div className="item">
                      <h4>- {pizza.id} -</h4>
                      <p>{pizza.Desc}</p>
                    </div> : null}
                  </>
                ))
              }
              </div>
            </>
          ))
        }
      <p>Samtliga pizzor finns att få i barnstorlek 10 kr dras från ordinariepris. </p>
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
