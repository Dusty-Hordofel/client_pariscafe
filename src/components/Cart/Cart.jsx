import React from 'react';
import Layout from '../Layout/Layout';
import { getTotalItemsInCart } from './cartHandler';

const Cart = () => {
  const renderCart = () => {
    return (
      <Layout title={'Cart Summary'}>
        <div className="row justify-content-center mt-5 mb-32x32">
          <div className="col-12 col-lg-4">
            <h4>Your Cart contains {getTotalItemsInCart()} dish(es)</h4>
          </div>
          <div className="col-12 col-lg-auto">
            <button
              className="btn btn-primary"
              style={{
                background: 'var(--primary-navy)',
                color: 'var(--primary-white)',
              }}
            >
              Continue Shopping <strong>&#x27F9;</strong>
            </button>
          </div>
        </div>
      </Layout>
    );
  };
  return <div>{renderCart()}</div>;
};

export default Cart;
