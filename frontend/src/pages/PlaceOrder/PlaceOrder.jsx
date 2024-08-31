import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/storeContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detials">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detials">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detials">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() * 2}</b>
            </div>
          </div>
          <button> Procced to payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
