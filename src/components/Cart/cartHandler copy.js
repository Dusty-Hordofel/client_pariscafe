import _ from 'lodash';

//add to cart
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

//to get cart dishes
export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(window.localStorage.getItem('cart')); //parse is used to convert string to object
      return cart.dishes;
    }

    return [];
  }

  return [];
};

//to get total amount of dishes in cart
export const getCartTotal = () => {
  let dishes = [];

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(window.localStorage.getItem('cart'));

      dishes = cart.dishes;

      let total = _.sumBy(dishes, (dish) => {
        return dish.count * dish.price;
      });
      console.log(
        '🚀 ~ file: cartHandler.js ~ line 62 ~ getCartTotal ~ total',
        total
      ); //_.sumBy is used to calculate total price of dishes

      return total;
    }
  }
};

//to get total number of dishes in cart
export const getTotalItemsInCart = () => {
  let cart = {};

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(window.localStorage.getItem('cart'));
    }

    return cart.dishes ? cart.dishes.length : 0;
  }

  return 0;
};

export const updateDishQuantity = (dish) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(window.localStorage.getItem('cart'));

      const updatedDishes = _.map(cart.dishes, (item) => {
        if (item._id === dish._id) {
          item.count = dish.count;
        }
        return item;
      }); //_.map is used to update the quantity of dish&&a

      cart.dishes = updatedDishes;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
};

export const removeDishFromCart = (id, callback) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(window.localStorage.getItem('cart'));

      _.remove(cart.dishes, { _id: id });
      localStorage.setItem('cart', JSON.stringify(cart));
      callback();
    }
  }
};

export const emptyCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.dishes = [];
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    return;
  }
};
