import { AxiosInstance } from "../../util/AxiosInstance";

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

export const getOrdersForAdmin = async (token, status = "Ordered") => {
  const headers = { Authorization: `Bearer ${token}` };

  const URI = "/api/admin/orders?";
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

export const updateOrderStatus = async (id, status, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  const URI = `/api/orders/${id}`;

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

export const cancelOrder = async (id, status, token) => {
  console.log("🚀 ~ file: index.js ~ line 119 ~ cancelOrder ~ token", token);

  const headers = { Authorization: `Bearer ${token}` };

  console.log(
    "🚀 ~ file: index.js ~ line 125 ~ cancelOrder ~ headers",
    headers
  );

  const URI = `/api/orders/${id}`;

  try {
    const result = await AxiosInstance.delete(`${URI}`, {
      data: { new_status: status },
      headers,
    });

    return result;
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 79 ~ cancelOrder ~ error", error);

    throw error;
  }
};

export const getOrderStatus = async (id) => {
  try {
    const URI = `/api/orders/status/${id}`;

    const status = await AxiosInstance.get(`${URI}`);
    return status;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 159 ~ getOrderStatus ~ error",
      error
    );
    throw error;
  }
};

export const getOrderById = async (id, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const URI = `/api/orders/${id}`;

    const response = await AxiosInstance.get(`${URI}`, { headers });

    return response;
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 183 ~ getOrderById ~ error", error);

    throw error;
  }
};
