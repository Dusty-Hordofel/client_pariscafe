import React, { useState } from 'react';
import './Accordion.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';

const LABEL_TYPES =
{
  'Ordered': { type: 'success' },
  'Canceled': { type: 'danger' },
  'Processing': { type: 'warn' },
  'Dispatched': { type: 'info' },
  'Delivered': { type: 'info' }

}

const Accordion = ({ orders = [] }) => {

  const [selected, setSelected] = useState(null);

  const toggleSelected = (i) => {

    if (i === selected) {
      return setSelected(null);
    }

    setSelected(i);

  }


  const getStatus = () => {
    const order = orders[selected];
    console.log("🚀 ~ file: Accordion.js ~ line 32 ~ getStatus ~ order", order)

    let orderStatus = order && order.status && order.status[order.status.length - 1] ? order.status[order.status.length - 1].event : 'Ordered';

    let type = (orderStatus && LABEL_TYPES[orderStatus].type) || 'success';

    let status = '';
    status = <Label type={type} text={orderStatus} />

    return status;

  }


  const renderAccordion = () => {

    return (
      <div className="accordion">

        {orders.length > 0 && orders.map((order, index) => {

          return (
            <div className="acc-item" key={index}>
              <div className={index === selected ? "acc-title active" : "acc-title"} onClick={() => toggleSelected(index)} key={index}>
                <span className="d-none d-md-block">Order ID : {order._id}</span>
                <span>Order Date: {moment(order.createdAt).format("Do MMM, YY")}</span>
                <i className={selected === index ? 'fa fa-chevron-up' : 'fa fa-chevron-down'
                }></i>

              </div>

              <div className={selected === index ? 'acc-content show' : 'acc-content'} >
                <span className="d-none d-md-block">
                  {getStatus()}
                </span>
                <span>
                  <label className="text-muted font-weight-bold mt-3 ml-3">Amount: <i className="fa fa-inr"></i> {order.total && order.total.toFixed(2)} </label>
                </span>

                <span>
                  <Link to={`/orders/${order._id}`}><button className="btn btn-outline-primary   mt-2 ml-2">  VIEW ORDER </button></Link>

                </span>

              </div>
            </div>

          )
        })}

      </div>
    )
  }

  return (
    <>
      {renderAccordion()}
    </>
  )
}

export default Accordion;
