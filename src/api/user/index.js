import { AxiosInstance } from '../../util/AxiosInstance';

export const createUser = async (user, token) => {
  const { email, sub } = user; //sub from auth0 is the user id

  const headers = { Authorization: `Bearer ${token}` }; //headers contains the token

  const _id = sub.split('|')[1]; //we retrieve the user id from the sub by splitting it at the pipe and taking the second element

  const payload = { _id, email };

  try {
    const result = await AxiosInstance.post('/api/users', payload, { headers });
    return result;
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 10 ~ createUser ~ error', error);
    throw error;
  }
};
