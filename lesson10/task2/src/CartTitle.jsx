import React from 'react';

function CartTitle({ userName, count }) {
  return (
    <div className="cart-title">{`${userName}, you added ${count} items`}</div>
  );
}

export default CartTitle;
