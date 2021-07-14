import { isAuthenticate } from "../components/auth";
import { axiosClient } from "./axiosClient";
const {user, token} = isAuthenticate();

const CategoryAPI = {
  getAll() {
    const url = "/categories";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(category) {
    const url = `/categories/create/${user.id}`;
    return axiosClient.post(url, category, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  remove(id) {
    const url = `/category/${user.id}/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  update(data, id) {
    const url = `/category/${user.id}/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
};
export default CategoryAPI;
