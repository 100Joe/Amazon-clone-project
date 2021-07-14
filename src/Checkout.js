import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
      {/* Entire left side includes advertisement banner and The shopping basket that will display basketItems */}
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>

      {/* Entire right side which will cover the Subtotal */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;