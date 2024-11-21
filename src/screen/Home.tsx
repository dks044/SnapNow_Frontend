import Button from '@/components/Button';
import Input from '@/components/Input';
import Margin from '@/components/Margin';
import TitleLogo from '@/components/TitleLogo';
import {brandColor} from '@/constants/constants';
import useAuth from '@/hooks/auth/useAuth';
import useEmailCode from '@/hooks/auth/useEmailCode';
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const HomeWrapper = styled(SafeAreaView)`
  padding-top: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
`;

const AuthStatusText = styled(Text)<{underline?: boolean}>`
  text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
`;

const Home = () => {
  const {
    isLoading,
    variant,
    setVariant,
    handleSubmit,
    onSubmit,
    register,
    errors,
    setIsVerify,
  } = useAuth();

  const {
    isSend,
    isSendLoading,
    handleSendCode,
    handleVerifyCode,
    setEmail,
    setEmailCode,
  } = useEmailCode(setIsVerify);

  return (
    <HomeWrapper>
      <TitleLogo width="250" height="250" />
      {variant === 'REGISTER' && (
        <>
          <Input
            id="name"
            required
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Name"
          />
          <Margin />
        </>
      )}
      <Input
        id="email"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
        placeholder="Email"
        onChange={setEmail}
      />
      {variant === 'REGISTER' && (
        <>
          <Button
            disabled={isLoading}
            onPress={() => {
              if (isSend) {
                handleVerifyCode();
              } else {
                handleSendCode();
              }
            }}
            backgroundColor="#1E83E8">
            {isSendLoading && (
              <ActivityIndicator size="large" color={brandColor} />
            )}
            {!isSendLoading && isSend
              ? 'Verify your email code'
              : 'Send Email Code'}
          </Button>
          <Input
            id="emailCode"
            required={isSend}
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Input Email Code"
            onChange={setEmailCode}
          />
        </>
      )}
      <Margin />
      <Input
        id="password"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
        placeholder="Passwrod"
      />
      <Margin />
      <Button disabled={isLoading} onPress={handleSubmit(onSubmit)}>
        {variant === 'LOGIN' ? 'Login' : 'Signup'}
      </Button>
      <Margin height={20} />
      <View>
        {variant === 'LOGIN' ? (
          <TouchableOpacity onPress={() => setVariant('REGISTER')}>
            <AuthStatusText>
              New to SnapNow?{' '}
              <AuthStatusText underline={true}>
                Create an account
              </AuthStatusText>
            </AuthStatusText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setVariant('LOGIN')}>
            <AuthStatusText>
              Already have an account?{' '}
              <AuthStatusText underline={true}>Log in</AuthStatusText>
            </AuthStatusText>
          </TouchableOpacity>
        )}
      </View>
    </HomeWrapper>
  );
};

export default Home;
