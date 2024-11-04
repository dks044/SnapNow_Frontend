import TitleLogo from '@/components/TitleLogo';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

const HomeWrapper = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <TitleLogo width="200" height="200" />
    </HomeWrapper>
  );
};

export default Home;
