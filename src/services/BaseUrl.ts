import axios, { AxiosInstance, RawAxiosRequestHeaders } from 'axios';

const local = 'http://localhost:8000';
let headers: RawAxiosRequestHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}

const token = localStorage.getItem("token")
if (token) {
  headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
}
export const BaseUrl: AxiosInstance = axios.create({
  baseURL: local,
  headers: headers
});