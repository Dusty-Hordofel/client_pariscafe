import React from "react";
import Layout from "../Layout/Layout";

const Orders = () => {
  const renderOrders = () => (
    <Layout title="My Orders" background={true} backdrop={true}>
      Welcome to the Orders page !!
    </Layout>
  );
  return <div>{renderOrders()}</div>;
};

export default Orders;
