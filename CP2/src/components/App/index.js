// == Import npm
import React from 'react';
import Item from '../Item';
// ==import img
import imgPlat from '../../assets/Images/foodImage.png';
import imgChef from '../../assets/Images/ChefImage.png';
import imgelemt from '../../assets/Images/DesignElement.png';
import iconeAppel from '../../assets/Images/iconeAppel.png';
import iconeAndroid from '../../assets/Images/iconeAndroid.png';

// == Import

import './styles.css';

// == Composant
const App = () => (
  <div className="container ">
    <div className="row col-12   position-absolute ">
      <div className="fond_gris col-md-3 col-12 " />
      <div className="fond_vert col-md-5 col-12  d-none d-md-block " />
    </div>
    <div className="position-absolute py-3">
      <header className="row justify-content-center text-center ">
        <div className="col-md-3 order-md-2" />
        <div className="col-md-9  order-md-1">
          <h1 className="header_titre1 display-3">
          Restaurant
            <span className="row justify-content-center header_titre2 m-n2">
          multiplats
            </span>
          </h1>
          <p className="header_titre3 display-4 mb-5">
          Choisi ton plat preferé
          </p>
        </div>
      </header>
      <div className="row justify-content-center align-items-end divImage pt-3  d-none d-md-flex position-relative mr-3">
        <div className="col-md-8 text-right ">
          <img className="img-fluid col-md-8 " src={imgPlat} />
          <img className="col-md-10 position-absolute imgelemt img-fluid" src={imgelemt} />
        </div>
        <img className="img-fluid col-md-4 mt-2" src={imgChef} />
      </div>
      <div className="row justify-content-center col">
        <div className="col-md-8 mt-5 ">
          <div className="row justify-content-around text-wrap ">
            <Item />
            <Item />
          </div>
        </div>

        <div className=" col-md-4">
          <div className="row justify-content-center">
            <div className="contact col-12">
              <p className="text-center h2">Livraison<br /><span className="contact_span h2">05625622551555</span> </p>
            </div>
            <div className=" col-10 contact_header text-center text-wrap pt-3  d-none d-md-block">
              <p className="h3">Commande en ligne <span className="text_psd">WWW.PSDFREEBIES.COM</span></p>
              <div className="col-12 border-top pt-3 pw-3">
                <p className="h5">Telecherger l'aplication <br /> Mobile</p>
                <div className="row justify-content-center  py-3">
                  <div className="col-6 border-right ">
                    <img className="img-fluid" src={iconeAndroid} />
                  </div>
                  <div className="col-6 ">
                    <img className="img-fluid" src={iconeAppel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default App;
