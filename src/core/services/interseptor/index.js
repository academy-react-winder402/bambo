import axios from "axios";
import { getItem } from "../api/storage/Storage.Services";


const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response?.data;
};

const onError = (err) => {
  alert(err);

  if (err?.response >= 400 && err?.response < 500) {
    alert("Client error: " + err?.response);
  }
  return Promise.reject(err);
};

instance?.interceptors?.response?.use(onSuccess, onError);

instance?.interceptors?.request.use((opt) => {
  const token = getItem("token");

  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export {instance};