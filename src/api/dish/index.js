import { AxiosInstance } from "../../util/AxiosInstance";



export const getDishList = async () => {

  try {

    const dishes = await AxiosInstance.get('/api/dishes');
    return dishes;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ getDishList ~ error", error);
    throw error;

  }

}

export const getFilteredDishList = async (categories = []) => {


  const searhFilters = { categories };

  try {

    const result = await AxiosInstance.post('/api/dishes/category/_search', searhFilters);
    return result;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 31 ~ getFilteredDisheList ~ error", error)
    throw error;

  }
}