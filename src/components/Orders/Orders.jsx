import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../Layout/Layout";
import AppSpinner from "../UI/Spinner/AppSpinner";
import { getMyOrders, getOrdersForAdmin } from "../../api/order";
import { CLAIMS_URI } from "../../config/Config";
import Accordion from "../UI/Accordion/Accordion";

import "./Orders.css";
const Orders = () => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const isAdmin =
    isAuthenticated && user[`${CLAIMS_URI}/roles`]?.includes("admin");
  const [loading, setLoading] = useState(false);

  const [orders, setOrders] = useState([]);

  const init = async () => {
    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      const result = isAdmin
        ? await getOrdersForAdmin(token)
        : await getMyOrders(token);
      console.log(
        "🚀 ~ file: Orders.js ~ line 23 ~ init ~ result",
        result.data
      );

      isAdmin ? setOrders(result.data) : setOrders(result.data.orders);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("🚀 ~ file: Orders.js ~ line 26 ~ getOrders ~ error", error);
    }
  };

  useEffect(() => {
    init();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const displayOrders = () => <Accordion orders={orders} />;

  const renderOrdersForUsers = () =>
    !isAdmin && (
      <Layout title="My Orders" background={true} backdrop={true}>
        {loading ? (
          <AppSpinner />
        ) : (
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">{displayOrders()}</div>
          </div>
        )}
      </Layout>
    );

  const renderOrdersForAdminUsers = () =>
    isAdmin && (
      <Layout title="Orders">
        {/* {show && displayNotification()} */}
        <div className="row justify-content-center mt-5">
          <div className="col-8 col-md-3">
            <div className="row justify-content-center">
              <div className="col-6">
                <h4 style={{ textAlign: "center" }}>Filter</h4>
              </div>
            </div>

            <div className="row justify-content-center">
              {/* <div className="col-8">{displayOrderStates()}</div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-4">{displayOrders()}</div>
        </div>
      </Layout>
    );
  return (
    <>
      {renderOrdersForUsers()}
      {renderOrdersForAdminUsers()}
    </>
  );
};

export default Orders;
