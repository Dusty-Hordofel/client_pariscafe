import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../Layout/Layout";
import { getMyOrders } from "../../api/order";

import Accordion from "../UI/Accordion/Accordion";

const Orders = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [orders, setOrders] = useState([]);

  const init = async () => {
    try {
      const token = await getAccessTokenSilently();
      const result = await getMyOrders(token);
      console.log(
        "🚀 ~ file: Orders.js ~ line 23 ~ init ~ result",
        result.data
      );

      setOrders(result.data.orders);
    } catch (error) {
      console.log("🚀 ~ file: Orders.js ~ line 26 ~ getOrders ~ error", error);
    }
  };

  useEffect(() => {
    init();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const displayOrders = () => <Accordion orders={orders} />;

  const renderOrders = () => (
    <Layout title="My Orders" background={true} backdrop={true}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">{displayOrders()}</div>
      </div>
    </Layout>
  );

  return <>{renderOrders()}</>;
};

export default Orders;
