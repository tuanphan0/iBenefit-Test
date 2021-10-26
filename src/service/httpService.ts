import axios from "axios";
import qs from "qs";
import AppConsts from "../lib/appConst";
import { getCookies } from "../lib/utils";

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function (config: any) {
    const device = getCookies("device");
    if (device) {
      config.headers.common["DEVICE-CODE"] = device;
    }

    const token = getCookies("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default http;
