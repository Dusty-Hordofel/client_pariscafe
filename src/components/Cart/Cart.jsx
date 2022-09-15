import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { getCartTotal, getTotalItemsInCart } from './cartHandler';

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
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-7">
            <div className="row justify-content-start">{/*{showCart()}*/}</div>
          </div>
          <div className="col-lg-5 col-md-6">
            <h5 style={{ textDecoration: 'underline' }}>
              Total: <i className="fa fa-inr" />
              <span style={{ padding: '0 5px' }}>
                {' '}
                {getCartTotal().toFixed(2)}
              </span>{' '}
            </h5>

            <Link to="/signin">
              <button className="btn btn-success">
                <i className="fa fa-lock" />{' '}
                <span style={{ padding: '5px 10px' }}>Signin to Checkout</span>
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  };
  return <div>{renderCart()}</div>;
};

export default Cart;
