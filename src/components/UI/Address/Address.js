import React from 'react'
import './Address.css';

const Address = ({ order }) => {

  const { address } = order;

  return (
    <div className="d-flex flex-wrap address">
      <h5 style={{ marginLeft: '5px' }}>Delivery Address</h5>
      <div className="content">
        <p style={{ color: '#570303' }}>
          {address && address.line1}, {address && address.line2} {address.line2 && ','} {address && address.city}, {address && address.state} {address && address.zip} {address && address.country}
        </p>
      </div>
    </div>
  )
}

export default Address;
