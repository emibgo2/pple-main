import axios, { AxiosInstance } from 'axios';	
import * as config from '../config';
export const customAxios: AxiosInstance = axios.create({	
  baseURL: config.BASE_URL, // 기본 서버 주소 입력	
  withCredentials : true, 	
});	

