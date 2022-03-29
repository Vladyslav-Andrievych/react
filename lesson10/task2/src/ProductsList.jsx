import React from 'react';

function ProductsList({ cartItems }) {
  const products = cartItems.map(({ id, name, price }) => {
    return (
      <li key={id} className="products__list-item">
        <span className="products__item-name">{name}</span>
        <span className="products__item-price">{`$${price}`}</span>
      </li>
    );
  });

  const total = cartItems.reduce((acc, product) => (acc += product.price), 0);

  return (
    <div className="products">
      <ul className="products__list">{products}</ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
}

export default ProductsList;
