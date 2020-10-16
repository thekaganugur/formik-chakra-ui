import { Input, InputProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type InputControlProps = BaseProps & InputProps;

export const InputControl: FC<InputControlProps> = (
  props: InputControlProps
) => {
  const { name, label, my, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Input {...field} {...rest} id={name} />
    </FormControl>
  );
};

export default InputControl;
