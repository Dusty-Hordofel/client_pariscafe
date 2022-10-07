import { Link, useLocation } from "react-router-dom";
import Layout from "../../Layout/Layout";
import OrderStatus from "../../UI/OrderStatus/OrderStatus";
import { TrackingCard as OrderTracker } from "../../UI/TrackingCard/TrackingCard";
import Address from "../../UI/Address/Address";
import OrderListing from "../../UI/OrderListing/OrderListing";
import { TrackingCardVertical as OrderTrackerVertical } from "../../UI/TrackingCard/TrackingCardVertical";

const Order = () => {
  const { state: order } = useLocation();

  console.log("🚀 ~ file: Order.jsx ~ line 11 ~ Order ~ location", order);
  // const { order } = props.location.orderProps;
  // console.log("🚀 ~ file: Order.js ~ line 6 ~ Order ~ order", order);

  const renderOrder = () => (
    <Layout title="My Order">
      <section>
        <div className="row justify-content-center mt-4">
          <div className="col-12">
            <Link to="/orders">
              <button className="btn btn-primary">
                {" "}
                <span style={{ fontWeight: "bold" }}> &#x27F8;</span> Back to My
                Orders{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-10 col-sm-6">
            <div className="row justify-content-center">
              <OrderStatus order={order} />
            </div>
            <div className="row justify-content-center mt-3">
              <OrderTracker status={order.status} />
            </div>
          </div>
          <div className="col-10 col-sm-5 mx-3">
            <div className="row justify-content-center d-block d-lg-none mt-3">
              <OrderTrackerVertical status={order.status} />
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
    </Layout>
  );

  return <>{renderOrder()}</>;
};

export default Order;
