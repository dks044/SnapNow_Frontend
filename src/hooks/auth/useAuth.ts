import useAuthStore from '@/store/useAuthStore';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useState} from 'react';
import {Variant} from '@/schemas/auth';
import {useMutation} from 'react-query';
import {login, signup} from '@/api/authAPI';

export default function useAuth() {
  const setTokens = useAuthStore(state => state.setTokens);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isVerify, setIsVerify] = useState(false); //이메일 인증여부

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      emailCode: '',
    },
  });

  const loginMutation = useMutation(login, {
    onSuccess: data => {
      setTokens(data.accessToken, data.refreshToken);
    },
    onError: error => {
      console.error('Login error:', error);
    },
  });

  const registerMutation = useMutation(signup, {
    onSuccess: data => {
      setTokens(data.accessToken, data.refreshToken);
    },
    onError: error => {
      console.error('Registration error:', error);
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);
    const {name, email, password} = data;

    try {
      if (variant === 'LOGIN') {
        await loginMutation.mutateAsync({email, password});
      }

      if (variant === 'REGISTER') {
        //TODO: 모달로 인증 관련 출력 필요
        if (!isVerify) {
          console.log('아직 이메일 인증 안됨!');
          return;
        }
        await registerMutation.mutateAsync({name, email, password});
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    variant,
    setVariant,
    handleSubmit,
    onSubmit,
    register,
    errors,
    isVerify,
    setIsVerify,
  };
}
