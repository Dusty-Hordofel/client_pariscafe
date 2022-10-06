import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../Layout/Layout";
import { getMyOrders } from "../../api/order";

const Orders = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [orders, setOrders] = useState([]);

  const init = async () => {
    try {
      const token = await getAccessTokenSilently();
      const result = await getMyOrders(token);
      console.log(
        "🚀 ~ file: Orders.js ~ line 17 ~ init ~ result",
        result.data
      );

      setOrders(result.data.orders);
    } catch (error) {
      console.log("🚀 ~ file: Orders.js ~ line 22 ~ getOrders ~ error", error);
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const renderOrders = () => (
    <Layout title="My Orders" background={true} backdrop={true}>
      Welcome to the Orders page !!
    </Layout>
  );
  return <div>{renderOrders()}</div>;
};

export default Orders;
