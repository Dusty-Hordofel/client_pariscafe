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

