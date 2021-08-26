import api from './apiConfig';

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
};

export const getOneCategory = async (id) => {
  const resp = await api.get(`/categories/${id}`);
  return resp.data;
};

export const addCategoryToPost = async (postId, categoryId) => {
  const resp = await api.get(`/posts/${postId}/categories/${categoryId}`);
  return resp.data;
}