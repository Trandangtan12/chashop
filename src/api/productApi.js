import { axiosClient } from "./axiosClient";
import { isAuthenticate } from "../components/auth";
const {user, token} = isAuthenticate()
const ProductAPI = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/products/${user.id}/create`;
    return axiosClient.post(url, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  remove(id) {
    const url = `/product/${user.id}/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  update(data, id) {
    const url = `/product/${user.id}/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  search(inp) {
    const url = `/products?q=${inp}`;
    return axiosClient.get(url);
  },
};
export default ProductAPI;
