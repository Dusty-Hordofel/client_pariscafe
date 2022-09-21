import { AxiosInstance } from '../../util/AxiosInstance';

export const createUser = async (user, token) => {
  const { email, sub } = user;

  const headers = { Authorization: `Bearer ${token}` };

  const _id = sub.split('|')[1];

  const payload = { _id, email };

  try {
    const result = await AxiosInstance.post('/api/users', payload, { headers });
    return result;
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 10 ~ createUser ~ error', error);
    throw error;
  }
};

export const getUserAddress = async (id, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const URI = `/api/users/${id}/address`;

    const result = await AxiosInstance.get(URI, { headers });
    return result;
  } catch (error) {
    console.log(
      '🚀 ~ file: index.js ~ line 44 ~ getUserAddress ~ error',
      error
    );
    throw error;
  }
};

export const updateUserAddress = async (id, address, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const URI = `/api/users/${id}/address`;
    const result = await AxiosInstance.put(URI, address, { headers });
    return result;
  } catch (error) {
    console.log(
      '🚀 ~ file: index.js ~ line 65 ~ updateUserAddress ~ error',
      error
    );
    throw error;
  }
};
