import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../Layout/Layout';
import {
  getCart,
  getCartTotal,
  getTotalItemsInCart,
  updateDishQuantity,
  removeDishFromCart,
  emptyCart,
} from './cartHandler';
import MenuCard from '../UI/MenuCard/MenuCard';
import { Notification } from '../UI/Notification/Notification';
import CheckoutForm from '../UI/CheckoutForm/CheckoutForm';
import { getUserAddress, updateUserAddress } from '../../api/user';
import { createOrder } from '../../api/order';
import AppSpinner from '../UI/Spinner/AppSpinner';
import Slider from '../UI/Slider/Slider';
import './cart.css';

const Cart = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);

  const [checkoutProgress, setCheckoutProgress] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState('');
  const [checkoutCanceled, setCheckoutCanceled] = useState('');

  const [sessionId, setSessionId] = useState('');

  const saveOrder = async () => {
    setLoading(true);

    const order_data = { dishes, address, order_total: await getCartTotal() };

    console.log(
      '🚀 ~ file: Cart.jsx ~ line 33 ~ saveOrder ~ order_data',
      order_data
    );
    const token = await getAccessTokenSilently();

    try {
      const result = await createOrder(order_data, token);
      console.log(
        '🚀 ~ file: Cart.js ~ line 39 ~ saveOrder ~ result',
        result.data.redirect
      );
    } catch (error) {
      console.log('🚀 ~ file: Cart.js ~ line 40 ~ saveOrder ~ error', error);
    }
  };

  const updateAddress = async (address) => {
    const { sub } = user;
    const id = sub.split('|')[1];

    try {
      setLoading(true);

      const token = await getAccessTokenSilently();
      const result = await updateUserAddress(id, address, token);
      console.log(
        '🚀 ~ file: Cart.js ~ line 32 ~ updateAddress ~ result',
        result.data
      );
      setAddress(result.data);
      setLoading(false);
      setNotificationText('ADDRESS_UPDATED');
      setShow(true);
    } catch (error) {
      setLoading(false);

      console.log(
        '🚀 ~ file: Cart.js ~ line 36 ~ updateAddress ~ error',
        error
      );
    }
  };

  const getAddress = async () => {
    const { sub } = user;

    const id = sub.split('|')[1];

    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      const result = await getUserAddress(id, token);
      setAddress(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      if (error.response) {
        console.log('🚀 ~ file: Cart.js ~ line 88 ~ saveOrder ~ error', error);
        console.log(
          '🚀 ~ file: Cart.js ~ line 56 ~ updateAddress ~ error',
          error
        );
        console.log(
          '🚀 ~ file: Cart.js ~ line 56 ~ updateAddress ~ error',
          error
        );
        console.log(
          '🚀 ~ file: Cart.js ~ line 38 ~ getAddress ~ error.response',
          error.response.data.error
        );
      }
    }
  };

  //dish anda action are passed from MenuCard component.They are parameters.
  const updateCart = async (dish, action) => {
    console.log('🚀 ~ file: Cart.js ~ line 28 ~ updateCart ~ dish', dish);
    await updateDishQuantity(dish);
    setDishes(getCart());
    setNotificationText(
      action === 'increment' ? 'ITEM_QTY_INCREASED' : 'ITEM_QTY_DECREASED'
    );
    setShow(true);
  };

  //dish is passed from MenuCard component.It is parameter.
  const removeDish = async (dish) => {
    console.log('🚀 ~ file: Cart.js ~ line 33 ~ removeDish ~ dish', dish);
    await removeDishFromCart(dish._id, () => {
      setDishes(getCart());
    });
    setNotificationText('REMOVE_FROM_CART');
    setShow(true);
  };

  const init = async (query) => {
    const shouldInitialize = !query.get('success');

    if (shouldInitialize) {
      try {
        isAuthenticated && getAddress();
        const items = await getCart();
        setDishes(items);
      } catch (error) {
        console.log('🚀 ~ file: Cart.js ~ line 18 ~ init ~ error', error);
      }
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search); //URLSearchParams is used to get the query string from the url.

    init(query);
    let statusMessage;

    if (query.get('id') && isAuthenticated) {
      setSessionId(query.get('id'));
    }

    if (query.get('success') && isAuthenticated) {
      //empty the cart
      emptyCart();
      // refresh the view
      setDishes(getCart());
      //do the messaging

      setCheckoutProgress('completed');
      statusMessage = `Your order is palced !! You will receive a text confirmation soon.`;
      setCheckoutSuccess(statusMessage);
    }

    if (query.get('canceled') && isAuthenticated) {
      console.log(
        '🚀 ~ file: Cart.js ~ line 175 ~ useEffect ~ query',
        query.get('id')
      );
      setCheckoutProgress('Canceled');
      statusMessage =
        'Order canceled -- continue to shop ariound and checkout when ready.';
      setCheckoutCanceled(statusMessage);
    }
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const showSuccessMessage = () => {
    return (
      <div
        className="alert alert-info"
        style={{
          display: checkoutProgress ? 'block' : 'none',
          fontWeight: 'bold',
          background: 'var(--primary-peach',
        }}
      >
        {checkoutSuccess ? (
          <Link to={`/myorders/${sessionId}`}>{checkoutSuccess}</Link>
        ) : null}
      </div>
    );
  };

  const showCancelMessage = () => {
    return (
      <div
        className="alert alert-info"
        style={{
          display: checkoutProgress ? 'block' : 'none',
          fontWeight: 'bold',
          background: 'var(--primary-peach',
        }}
      >
        {checkoutCanceled ? <span>{checkoutCanceled}</span> : null}
      </div>
    );
  };

  const displayEmptyCartMessage = () => (
    <section>
      {showSuccessMessage()}
      <div className="d-flex flex-column align-items-center flex-wrap ">
        <h4 className="text-muted align-self-center">Your cart is empty</h4>.
        <Link to="/catalog">
          <button
            className="btn btn-primary"
            style={{
              background: 'var(--primary-navy)',
              color: 'var(--primary-white)',
            }}
          >
            {' '}
            <span style={{ padding: '0 50px', fontWeight: 'bold' }}>
              add DiSHES
            </span>
          </button>
        </Link>
        <div className="background-empty-cart"></div>
      </div>
    </section>
  );

  const closeHandler = () => {
    setShow(false);
  };

  const displayNotification = () =>
    show && (
      <Notification show={show} text={notificationText} close={closeHandler} />
    );

  const showCartMobile = () => (
    <Slider data={dishes} updateCart={updateCart} removeDish={removeDish} />
  );

  const showCart = () => (
    <>
      {dishes.map((dish) => (
        <div className="col-lg-4 col-md-5" key={dish._id}>
          <MenuCard
            dish={dish}
            updateCart={updateCart}
            removeDish={removeDish}
          />
        </div>
      ))}
    </>
  );

  const renderCart = () => {
    return (
      <Layout title={'Cart Summary'}>
        {displayNotification()}
        {loading ? (
          <AppSpinner />
        ) : (
          <>
            <div className="row justify-content-center mt-5 mb-32x32">
              {getTotalItemsInCart() > 0 && (
                <>
                  <div className="col-12 col-lg-4">
                    <h4>Your Cart contains {getTotalItemsInCart()} dish(es)</h4>
                  </div>
                  <div className="col-12 col-lg-auto">
                    <Link to="/catalog">
                      <button
                        className="btn btn-primary"
                        style={{
                          background: 'var(--primary-navy)',
                          color: 'var(--primary-white)',
                        }}
                      >
                        Continue Shopping <strong>&#x27F9;</strong>
                      </button>
                    </Link>
                  </div>
                </>
              )}

              {getTotalItemsInCart() === 0 && displayEmptyCartMessage()}
            </div>
            <div className="row justify-content-center mt-2">
              {checkoutCanceled && showCancelMessage()}
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-12 order-1 d-block d-lg-none">
                {showCartMobile()}
              </div>
              <div className="col-lg-6 col-6  mt-3 mt-md-0 order-1 order-lg-0 d-none d-lg-block">
                <div className="row justify-content-start">{showCart()}</div>
              </div>
              <div className="col-lg-5 col-md-6 ">
                {getCartTotal() > 0 && (
                  <h5 style={{ textDecoration: 'underline' }}>
                    Total: <i className="fa fa-inr" />
                    <span style={{ padding: '0 5px' }}>
                      {' '}
                      {getCartTotal().toFixed(2)}
                    </span>{' '}
                  </h5>
                )}
                {!isAuthenticated && getCartTotal() > 0 && (
                  <Link to={{ pathname: '/signin', returnTo: '/cart' }}>
                    <button className="btn btn-success">
                      <i className="fa fa-lock" />{' '}
                      <span style={{ padding: '5px 10px' }}>
                        Signin to Checkout
                      </span>
                    </button>
                  </Link>
                )}
                {isAuthenticated && getCartTotal() > 0 && (
                  <CheckoutForm
                    addressType={'Shipping Address'}
                    address={address}
                    updateAddress={updateAddress}
                    checkout={saveOrder}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </Layout>
    );
  };
  return <div>{renderCart()}</div>;
};

export default Cart;
