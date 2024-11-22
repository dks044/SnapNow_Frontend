import React from 'react';
import {Controller, FieldErrors} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  control: any; // react-hook-form의 control 객체
  id: string; // 필드 이름
  rules?: any; // 유효성 검사 규칙
  defaultValue?: string; // 기본값
  errors: FieldErrors; // 오류 상태
  placeholder?: string; // 플레이스홀더
  disabled?: boolean; // 비활성화 상태
  secureTextEntry?: boolean;
}

interface InputWrapperProps {
  hasError: boolean;
  disabled: boolean;
}

const InputWrapper = styled(View)<InputWrapperProps>`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: #ebedf0;
  border: ${props => (props.hasError ? '2px solid #ff4d4f' : 'none')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding-left: 20px;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  padding: 10px;
`;

const Input: React.FC<InputProps> = ({
  control,
  id,
  rules,
  defaultValue = '',
  errors,
  placeholder,
  disabled = false,
  secureTextEntry,
}) => {
  return (
    <InputWrapper hasError={!!errors[id]} disabled={disabled}>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <StyledTextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            editable={!disabled}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={id}
        rules={rules}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default Input;
