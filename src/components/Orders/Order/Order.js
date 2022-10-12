import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../Layout/Layout";
import OrderStatus from "../../UI/OrderStatus/OrderStatus";
import { TrackingCard as OrderTracker } from "../../UI/TrackingCard/TrackingCard";
import Address from "../../UI/Address/Address";
import OrderListing from "../../UI/OrderListing/OrderListing";
import { TrackingCardVertical as OrderTrackerVertical } from "../../UI/TrackingCard/TrackingCardVertical";
import { CLAIMS_URI } from "../../../config/Config";
import {
  updateOrderStatus,
  cancelOrder,
  getOrderStatus,
  getOrderById,
} from "../../../api/order";
import { Notification } from "../../UI/Notification/Notification";

import AppSpinner from "../../UI/Spinner/AppSpinner";

const Order = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const isAdmin =
    isAuthenticated && user[`${CLAIMS_URI}/roles`].includes("admin");

  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState([]);

  const [order, setOrder] = useState();

  const { id } = useParams();

  const init = async () => {
    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      const result = await getOrderById(id, token);
      setOrder(result.data);
      setStatus(result.data.status);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(
        "🚀 ~ file: Order.js ~ line 50 ~ init ~ error",
        error.response.data
      );
    }
  };

  useEffect(() => {
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cancelHandler = async (id, status) => {
    console.log(
      "🚀 ~ file: Order.js ~ line 32 ~ cancelHandler ~ id",
      id,
      status
    );

    try {
      setLoading(true);
      const token = await getAccessTokenSilently();

      const result = await cancelOrder(id, status, token);
      console.log(
        "🚀 ~ file: Order.js ~ line 41 ~ cancelHandler ~ result",
        result.data
      );
      setLoading(false);
      setNotificationText("Your Order is canceled.");
      setShow(true);
    } catch (error) {
      setLoading(false);
      console.log(
        "🚀 ~ file: Order.js ~ line 41 ~ cancelHandler ~ result",
        error.response.data
      );
    }
  };

  const acceptHandler = async (id, status) => {
    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      const response = await updateOrderStatus(id, status, token);
      console.log(
        "🚀 ~ file: Order.js ~ line 27 ~ acceptHandler ~ response",
        response
      );
      setLoading(false);
      setNotificationText("Order set to Processing");
      setShow(true);
    } catch (error) {
      console.log(
        "🚀 ~ file: Order.js ~ line 33 ~ acceptHandler ~ error",
        error
      );
      setLoading(false);
    }
  };

  const refreshHandler = async () => {
    try {
      const response = await getOrderStatus(order._id);
      setStatus(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: Order.js ~ line 136 ~ refreshHandler ~ error",
        error
      );
    }
  };

  const closeHandler = () => {
    setShow(false);
    navigate("/orders");
  };

  const displayNotification = () => (
    <Notification show={show} close={closeHandler} text={notificationText} />
  );

  const renderOrder = () => (
    <Layout title="My Order">
      {show && displayNotification()}
      {loading || !order ? (
        <AppSpinner />
      ) : (
        <section>
          <div className="row justify-content-center mt-4">
            <div className="col-12">
              <Link to="/orders">
                <button className="btn btn-primary">
                  {" "}
                  <span style={{ fontWeight: "bold" }}> &#x27F8;</span> Back to
                  My Orders{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-10 col-sm-6">
              <div className="row justify-content-center">
                <OrderStatus
                  order={order}
                  isAdmin={isAdmin}
                  accept={acceptHandler}
                  cancel={cancelHandler}
                />
              </div>
              <div className="row justify-content-center mt-3">
                <OrderTracker status={status} refresh={refreshHandler} />
              </div>
            </div>
            <div className="col-10 col-sm-5 mx-3">
              <div className="row justify-content-center d-block d-lg-none mt-3">
                <OrderTrackerVertical
                  status={status}
                  refresh={refreshHandler}
                />
              </div>
              <div className="row justify-content-center">
                <Address order={order} />
              </div>
              <div className="row justify-content-center mt-3">
                <OrderListing order={order} />
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );

  return <>{renderOrder()}</>;
};

export default Order;
