import React from 'react';
import {Image, View} from 'react-native';
import Logo from '@/assets/image/logo2.png';
import styled from 'styled-components/native';

interface TitleLogoWrapperProps {
  width?: string;
  height?: string;
}

const TitleLogoWrapper = styled(View)<TitleLogoWrapperProps>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
`;

interface TitleLogoProps {
  width?: string;
  height?: string;
}

const TitleLogo = ({width, height}: TitleLogoProps) => {
  return (
    <TitleLogoWrapper width={width} height={height}>
      <Image
        source={Logo}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </TitleLogoWrapper>
  );
};

export default TitleLogo;
