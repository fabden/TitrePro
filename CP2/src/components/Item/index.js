import React from 'react';
import humberger from '../../assets/Images/humberger.png';


const Item = () => (
  <div className="col-md-5 my-2 border-left border-top">
    <div className="row justify-content-center mt-5 ">
      <div className="col-md-10 text-right">
        <span className=" divPromo p-3 align-top rounded-circle position-absolute">-20% </span>
        <img className="col-12 mt-n3" src={humberger} />
      </div>
      <p className="col-12 text-center item_titre text-uppercase h4">Menu Hamberger</p>
      <p className="text-center col-10 item_descrition">tres bon hamburger a goûter
      </p>
      <div className="col-4 item_prix_text text-center my-2"><p className="text-center py-2 h4">Prix</p></div>
      <div className="col-4 item_prix_number py-2"><p className="text-center py-2 h4">12€</p></div>
    </div>
  </div>
);
export default Item;
