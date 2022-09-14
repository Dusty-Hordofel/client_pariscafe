import React from 'react';
import Layout from '../Layout/Layout';

const Cart = () => {
  const renderCart = () => {
    return (
      <Layout title="cart summary">
        <h1>Cart</h1>
      </Layout>
    );
  };
  return <div>{renderCart()}</div>;
};

export default Cart;
