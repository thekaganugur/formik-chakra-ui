import { Input, InputProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type InputControlProps = BaseProps & { inputProps?: InputProps };

export const InputControl: FC<InputControlProps> = (
  props: InputControlProps
) => {
  const { name, label, formControlProps, inputProps } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...formControlProps}>
      <Input {...field} id={name} {...inputProps} />
    </FormControl>
  );
};

export default InputControl;
