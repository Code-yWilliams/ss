import Cookies from "universal-cookie";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "@app/utils/camelize";

const cookies = new Cookies();
const HTTP = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
  headers: {
    "x-csrf-token": cookies.get("X-CSRF-TOKEN"),
    "Content-Type": "application/json",
  },
  transformRequest: (data) => JSON.stringify(decamelizeKeys(data)),
  transformResponse: (data) => camelizeKeys(JSON.parse(data)),
});

class Base {
  static get(url: string) {
    return HTTP.get(url);
  }

  static put(url: string, data = {}, config = {}) {
    return HTTP.put(url, data, config);
  }

  static patch(url: string, data = {}, config = {}) {
    return HTTP.patch(url, data, config);
  }

  static post(url: string, data = {}, config = {}) {
    return HTTP.post(url, data, config);
  }

  static delete(url: string, data = {}) {
    return HTTP.delete(url, data);
  }
}

export default Base;
