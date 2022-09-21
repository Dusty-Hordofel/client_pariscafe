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
} from './cartHandler';
import MenuCard from '../UI/MenuCard/MenuCard';
import { Notification } from '../UI/Notification/Notification';
import CheckoutForm from '../UI/CheckoutForm/CheckoutForm';
import { getUserAddress, updateUserAddress } from '../../api/user';
import Slider from '../UI/Slider/Slider';

const Cart = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [address, setAddress] = useState({});

  const updateAddress = async (address) => {
    const { sub } = user;
    const id = sub.split('|')[1];

    try {
      const token = await getAccessTokenSilently();
      const result = await updateUserAddress(id, address, token);
      console.log(
        '🚀 ~ file: Cart.js ~ line 32 ~ updateAddress ~ result',
        result.data
      );
    } catch (error) {
      console.log(
        '🚀 ~ file: Cart.js ~ line 36 ~ updateAddress ~ error',
        error
      );
    }
  };

  const getAddress = async () => {
    const { sub } = user;

    const id = sub.split('|')[1]; //to get the id from the sub

    try {
      const token = await getAccessTokenSilently();
      const result = await getUserAddress(id, token);
      setAddress(result.data);
    } catch (error) {
      if (error.response) {
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

  const init = async () => {
    try {
      isAuthenticated && getAddress();
      const items = await getCart();
      setDishes(items);
    } catch (error) {
      console.log('🚀 ~ file: Cart.js ~ line 18 ~ init ~ error', error);
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

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className="row justify-content-center mt-5 mb-32x32">
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
              <Link to="/signin">
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
              />
            )}
          </div>
        </div>
      </Layout>
    );
  };
  return <div>{renderCart()}</div>;
};

export default Cart;
