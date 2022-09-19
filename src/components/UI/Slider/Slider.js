import React, { useState } from 'react';
import './Slider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Controls from './Controls';
import { API_BASE_URL } from '../../../config/Config';
import _ from 'lodash';

const Slider = ({ data = [], updateCart, removeDish }) => {

  const slideLength = data && data.length;
  console.log(slideLength);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    current === slideLength - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  const prevSlide = () => {

    current === 0 ? setCurrent(slideLength - 1) : setCurrent(current - 1);

  }



  const getCartTotals = () => {

    if (slideLength === 0) {
      console.log('no dishes !!');
    }

    let total = _.sumBy(data, slide => {
      return slide.count * slide.price;
    });

    console.log('total:', total);
    return total;

  }

  const handleCartOperation = (op) => {
    console.log('Handle cart op...', op);
    let newCount, updatedDish;

    switch (op) {

      case 'increment':
        console.log('Inside increment:', data[current], data[current].count);
        newCount = data[current].count + 1;
        updatedDish = { ...data[current], count: newCount }
        handleAdjustQuantity(updatedDish, op);
        break;

      case 'decrement':
        console.log('Inside decrement:');
        newCount = data[current.count] - 1 > 1 ? data[current].count - 1 : 1;
        updatedDish = { ...data[current], count: newCount }
        handleAdjustQuantity(updatedDish, op);
        break;

      case 'remove':
        console.log('Inside remove');
        handleRemoveDish(data[current]);
        break;

      default:
        break;
    }

  }



  const handleAdjustQuantity = (dish, action) => {
    updateCart(dish, action);

  }

  const handleRemoveDish = (dish) => {

    console.log('Inside remove dish');
    removeDish(dish);


  }


  return (
    <div className="wrapper ">

      <div className="slider mt-5">
        <FaArrowAltCircleLeft onClick={() => nextSlide()} className="leftButton" size={26} />
        <div className="slide-2" >

          {
            data.map((item, i) => {

              return (i === current) && (
                <img src={`${API_BASE_URL}/api/dishes/${item._id}/photo`} alt="My Dish" key={i} />
              )
            })

          }
        </div>

        <FaArrowAltCircleRight onClick={() => prevSlide()} className="rightButton" size={26} />

      </div>


      <h4 className="mt-2" style={{ textAlign: 'center' }} >
        {data && data[current] && data[current].name}
      </h4>
      <h4 className="mt-2" style={{ textAlign: 'center' }} >
        Quantity: {' '}{data && data[current] && data[current].count}
      </h4>
      <h4 className="mt-2" style={{ textAlign: 'center' }} >
        Price: <i className="fa fa-inr" /> {' '}{data && data[current] && data[current].price}
      </h4>
      <h4 style={{ margin: '2px 0', alignText: 'center' }}>Total:  <i className="fa fa-inr" /> {' '}{getCartTotals().toFixed(2)}</h4>

      <Controls handleCartOperation={handleCartOperation} />

    </div>
  )
}

export default Slider
