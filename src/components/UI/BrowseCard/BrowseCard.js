import React from 'react';
import { API_BASE_URL } from '../../../config/Config';

import './BrowseCard.css';


const BrowseCard = ({ dish, addToCart }) => {



  const renderAddButton = () => (

    <>
      <button className=" btn btn-primary d-flex justify-content-between
            flex-wrap ml-2 mb-3 align-self-center"
        style={{ color: 'white', fontWeight: 'bold', width: '80%', margin: '0px 5px' }}
        onClick={() => addToCart(dish)}
      >
        <span >
          Add to Cart
        </span>
        <span>
          <i className="fa  fa-plus" style={{ backgroundColor: 'white', color: 'blue', borderRadius: '50%', border: '1px solid transparent' }} />
        </span>
      </button>
    </>

  )


  const renderCard = () => (
    <div className="card shadow mb-5 d-flex flex-wrap justify-content-center" style={{ backgroundColor: '#fff !important' }}>
      <img src={`${API_BASE_URL}/api/dishes/${dish._id}/photo`} alt={dish.name} className="card-img-top-bc" />
      <div className="card-body text-dark ">
        <h5 className="card-title">{dish.name} </h5>
        <div className="card-text text-secondary">
          {dish.description}
        </div>
        <p style={{ padding: '2px' }}><strong>Price: <i className="fa fa-inr" /> {dish.price.toFixed(2)}</strong></p>

      </div>
      {renderAddButton()}
    </div>
  )



  return (
    <>
      {renderCard()}
    </>
  )
}

export default BrowseCard;