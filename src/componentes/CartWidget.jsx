import React from "react";

function CartWidget({ numero }) {
  return (
    <>
      <div>
        <ion-icon name="cart-outline"></ion-icon>

        {numero}
      </div>
    </>
  );
}

export default CartWidget;
