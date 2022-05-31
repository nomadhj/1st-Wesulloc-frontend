import React from 'react';

const BestProductItems = ({ data }) => {
  const { id, name, price, img_url } = data;

  return (
    <li className="product" key={id}>
      <div className="productImageBox">
        <span>{id}</span>
        <img className="productImage" src={img_url} alt={name} />
      </div>
      <div className="productTextBox">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default BestProductItems;
