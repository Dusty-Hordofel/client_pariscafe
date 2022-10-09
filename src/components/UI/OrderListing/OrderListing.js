import React from "react";
import { API_BASE_URL } from "../../../config/Config";
import "./OrderListing.css";

const OrderListing = (props) => {
  const { contents, total } = props.order;

  const renderListing = () => {
    return (
      <>
        {contents &&
          contents.map((dish, i) => {
            return (
              <div key={i}>
                <div className="d-flex flex-wrap mb-2 justify-content-start mt-2">
                  <div className="ml-4" style={{ padding: "5px" }}>
                    <img
                      src={`${API_BASE_URL}/api/dishes/${dish._id}/photo`}
                      className="dish-image"
                      alt="Dish"
                    />
                  </div>
                  <div className="d-flex ml-4 flex-column flex-wrap justify-content-center ">
                    <div> {dish.name} </div>
                    <div>
                      <i className="fa fa-inr"> {dish.price.toFixed(2)}</i>
                    </div>
                    <label className="text-muted">Qty: {dish.count}</label>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div className=" order-list col-10 col-md-9 mt-3 ml-md-2  ">
      <div className=" d-flex flex-wrap justify-content-between ml-2">
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
          {" "}
          Order Items ({contents && contents.length})
        </span>
        <span style={{ marginRight: "35px", fontWeight: "bold" }}>
          Amount: <i className="fa fa-inr "></i> {total && total.toFixed(2)}
        </span>
      </div>
      {renderListing()}
    </div>
  );
};

export default OrderListing;
