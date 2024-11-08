import useAuthStore from '@/store/useAuthStore';
import axios from 'axios';
import {useMutation} from 'react-query';
import {API_URL} from '@env';

const useLogin = () => {
  const setTokens = useAuthStore(state => state.setTokens);

  return useMutation(async loginData => {
    console.log(loginData);
    const response = await axios.post(API_URL + 'auth/login');
    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    const data = await response.data;
    await setTokens(data.accessToken, data.refreshToken);
    return data;
  });
};

export default useLogin;
