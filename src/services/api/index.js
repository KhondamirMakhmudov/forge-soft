import axios from "axios";
import { config } from "../../config/index";
import storage from "../storage";
import { get } from "lodash";

const token = "d228f88a47e0bb9db1d171e8ffe7de9b53a2a476";
const request = axios.create({
  baseURL: config.API_URL,
  params: {},
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer 8|I5x4RBIZ2wKM3RowZMHmRrL2SCvWnx3I3VYneR8S6c11d3c9`,
    },
  },
});
request.interceptors.request.use(
  (config) => {
    const token = get(
      JSON.parse(storage.get("settings")),
      "state.token",
      "6|CdwpJqaI1iwrhckQPVW84DMMQxsAEZ594vyvymAud71cbecb"
    );

    if (token) {
      config.headers["token"] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
