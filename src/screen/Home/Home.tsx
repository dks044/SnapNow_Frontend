import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Login from './components/Login';

const HomeWrapper = styled(SafeAreaView)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
`;

// const AuthStatusText = styled(Text)<{underline?: boolean}>`
//   text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
// `;

const Home = () => {
  return (
    <HomeWrapper>
      <Login />
    </HomeWrapper>
  );
};

export default Home;
