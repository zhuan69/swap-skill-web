import axios, { AxiosInstance } from 'axios';

const local = 'http://localhost:3000';
export const BaseUrl: AxiosInstance = axios.create({
  baseURL: local
});