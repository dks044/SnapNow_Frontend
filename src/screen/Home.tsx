import Input from '@/components/Input';
import Margin from '@/components/Margin';
import TitleLogo from '@/components/TitleLogo';
import React, {useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const HomeWrapper = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      gender: 'other',
      code: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <HomeWrapper>
      <TitleLogo width="250" height="250" />
      <Margin />
      <Input
        id="id"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
        placeholder="id"
      />
      <Margin height={20} />
      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={isLoading}
      />
    </HomeWrapper>
  );
};

export default Home;
