import { AxiosInstance } from "../../util/AxiosInstance";

export const getOrdersForAdmin = async (token, status = "Ordered") => {
  const headers = { Authorization: `Bearer ${token}` };

  const URI = "/api/orders/admin/?";
  const params = new URLSearchParams({
    limit: 10,
    status,
  });

  try {
    const response = await AxiosInstance.get(`${URI}${params}`, { headers });
    return response;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 45 ~ getOrdersForAdmin ~ error",
      error
    );

    throw error;
  }
};

export const getMyOrders = async (token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const URI = "/api/orders/?";
    const params = new URLSearchParams({
      limit: 10,
    });

    const response = await AxiosInstance.get(`${URI}${params}`, { headers });
    return response;
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 23 ~ getMyOrders ~ error", error);

    throw error;
  }
};

export const createOrder = async (order_data, token) => {
  console.log("🚀 ~ file: index.js ~ line 6 ~ createOrder ~ token", token);

  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await AxiosInstance.post(
      "/api/orders",
      { order_data },
      { headers }
    );
    console.log(
      "🚀 ~ file: index.js ~ line 14 ~ createOrder ~ response",
      response.data.redirect
    );

    return response;
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 20 ~ createOrder ~ error", error);

    throw error;
  }
};

export const updateOrderStatus = async (id, status, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  const URI = `/api/orders/${id}/?`;

  try {
    const result = await AxiosInstance.put(
      `${URI}`,
      { new_status: status },
      { headers }
    );

    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 79 ~ updateOrderStatus ~ error",
      error
    );

    throw error;
  }
};

// export const updateOrderStatus = async (id, token) => {
//   const headers = { Authorization: `Bearer ${token}` };

//   try {
//     const response = await AxiosInstance.put(
//       `/api/orders/${id}`,
//       {},
//       { headers }
//     );

//     return response;
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: index.js ~ line 44 ~ updateOrderStatus ~ error",
//       error
//     );
//     throw error;
//   }
// };
