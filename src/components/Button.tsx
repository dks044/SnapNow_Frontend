import {brandColor} from '@/constants/constants';
import React, {ReactNode} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  backgroundColor?: string;
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

const StyledButton = styled(TouchableOpacity)<{backgroundColor?: string}>`
  background-color: ${props => props.backgroundColor || brandColor};
  width: 100%;
  border-radius: 20px;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding-top: 10;
  padding-bottom: 10;
`;

const Button = ({
  children,
  backgroundColor,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onPress={disabled ? undefined : onPress}
      backgroundColor={backgroundColor}
      disabled={disabled}>
      <Text style={{color: disabled ? 'gray' : 'white'}}>{children}</Text>
    </StyledButton>
  );
};

export default Button;
