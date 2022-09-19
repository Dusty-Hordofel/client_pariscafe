import React from 'react'

const Controls = ({ handleCartOperation }) => {

  const handleCartItems = (op) => {
    console.log('op:', op);
    handleCartOperation(op);

  }

  return (
    <div className="slider-controls mt-3 " >
      <span onClick={() => handleCartItems('decrement')}><i className="fa fa-minus" /></span>
      <span onClick={() => handleCartItems('increment')}><i className="fa fa-plus" /></span>
      <span onClick={() => handleCartItems('remove')}><i className="fa fa-trash" /></span>
    </div>
  )
}

export default Controls
