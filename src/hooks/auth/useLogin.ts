import useAuthStore from '@/store/useAuthStore';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {login} from '@/api/authAPI';
import useInfoStore from '@/store/useInfoStore';
import {Alert} from 'react-native';
import {useNavi} from './useNati';

export default function useLogin() {
  const setTokens = useAuthStore(state => state.setTokens);
  const setUserInfo = useInfoStore(state => state.setUserInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavi();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation(login, {
    onSuccess: data => {
      setTokens(data.accessToken, data.refreshToken);
      setUserInfo(data.id, data.email, data.name);
      navigation.navigate('LoginTest');
    },
    onError: error => {
      console.error('Login error:', error);
      Alert.alert('Login Error', 'Invalid email or password');
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);
    const {email, password} = data;

    try {
      await loginMutation.mutateAsync({email, password});
    } catch (error) {
      console.error('Submission error:', error);
      Alert.alert('Login Error', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    control,
    isLoading,
    handleSubmit,
    onSubmit,
    errors,
  };
}
