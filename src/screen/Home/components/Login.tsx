import Button from '@/components/Button';
import Input from '@/components/Input';
import Margin from '@/components/Margin';
import TitleLogo from '@/components/TitleLogo';
import useLogin from '@/hooks/auth/useLogin';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export default function Login() {
  const {control, isLoading, handleSubmit, onSubmit, errors} = useLogin();

  return (
    <>
      <TitleLogo width="250" height="130" />
      <Input
        id="email"
        control={control}
        errors={errors}
        disabled={isLoading}
        placeholder="Email"
      />
      <Margin height={12} />
      <Input
        id="password"
        control={control}
        errors={errors}
        disabled={isLoading}
        placeholder="Password"
        secureTextEntry
      />
      <Margin height={12} />
      <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
        {isLoading ? <ActivityIndicator size="small" /> : 'Login'}
      </Button>
    </>
  );
}
