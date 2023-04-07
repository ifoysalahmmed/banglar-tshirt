import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxxx</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        something
      </p>
      {cart.length > 2 ? (
        <spam className="purple">Aro kino</spam>
      ) : (
        <span className="red">fokira</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Bononza!!!</p>}
      {cart.length === 3 || <h3>tinta toh hoilo nah!!!</h3>}
    </div>
  );
};

export default Cart;

/**
 * 1. use if else to set a variable that will contain an element or components
 * 2. ternary operator: condition ? "for true" : "for false"
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternary inside template string
 */
