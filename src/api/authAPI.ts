import {LoginData, SignupData} from '@/schemas/auth';
import {API_URL} from '@env';
import axios from 'axios';

export const login = async (loginData: LoginData) => {
  const response = await axios.post(API_URL + '/auth/login', loginData);
  return response.data;
};

export const signup = async (signupData: SignupData) => {
  const response = await axios.post(API_URL + '/auth/register', signupData);
  return response.data;
};

export const sendCode = async (email: string) => {
  console.log('Requesting URL:', `${API_URL}/auth/sendcode`, {email});
  const response = await axios.post(`${API_URL}/auth/sendcode`, {email});

  return response.data;
};

export const verifyCode = async (email: string, emailCode: string) => {
  const response = await axios.post(API_URL + '/auth/verifycode', {
    email,
    emailCode,
  });
  return response.data;
};
