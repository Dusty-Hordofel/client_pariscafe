import _ from 'lodash';

export const addDishToCart = (dish) => {
  let cart = { dishes: [] };

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')); //parse is used to convert string to object
    }

    cart.dishes.push({ ...dish, count: 1 });
    const uniqueDishes = _.uniqBy(cart.dishes, '_id'); //_.uniqBy is used to remove duplicate dishes
    cart.dishes = uniqueDishes;
    localStorage.setItem('cart', JSON.stringify(cart)); //stringify is used to convert object to string
  }
};
