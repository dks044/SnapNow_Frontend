import React from 'react';
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  id: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
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

const Input = ({
  id,
  required = false,
  register,
  errors,
  disabled = false,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <InputWrapper hasError={!!errors[id]} disabled={disabled}>
      <StyledTextInput
        placeholder={placeholder}
        editable={!disabled}
        onChangeText={value => {
          if (onChange) {
            onChange(value);
          }
        }}
        {...register(id, {required})}
      />
    </InputWrapper>
  );
};

export default Input;
