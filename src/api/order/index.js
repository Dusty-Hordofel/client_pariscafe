
import { AxiosInstance } from "../../util/AxiosInstance";


export const createOrder = async (order_data, token) => {

  console.log("🚀 ~ file: index.js ~ line 6 ~ createOrder ~ token", token);



  const headers = { Authorization: `Bearer ${token}` }

  try {

    const response = await AxiosInstance.post('/api/orders', { order_data }, { headers });
    console.log("🚀 ~ file: index.js ~ line 14 ~ createOrder ~ response", response.data.redirect);


    return response;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 20 ~ createOrder ~ error", error)

    throw error;

  }
}


export const updateOrderStatus = async (id, token) => {



  const headers = { Authorization: `Bearer ${token}` };

  try {


    const response = await AxiosInstance.put(`/api/orders/${id}`, {}, { headers });

    return response;

  } catch (error) {

    console.log("🚀 ~ file: index.js ~ line 44 ~ updateOrderStatus ~ error", error);
    throw error;






  }


}


























