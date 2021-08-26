import api from './apiConfig';

export const getAllLocations = async () => {
  const resp = await api.get('/locations');
  return resp.data;
};

export const getOneLocation = async (id) => {
  const resp = await api.get(`/locations/${id}`);
  return resp.data;
};

export const addLocationToPost = async (postId, locationId) => {
  const resp = await api.get(`/posts/${postId}/locations/${locationId}`);
  return resp.data;
}