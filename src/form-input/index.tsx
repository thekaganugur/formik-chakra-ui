import { Input, InputProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { FormControl, FormControlProps } from '../form-control';

export type FormInputProps = FormControlProps & InputProps;

export const FormInput: FC<FormInputProps> = (props: FormInputProps) => {
  const { name, label, my, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Input {...field} {...rest} id={name} />
    </FormControl>
  );
};

export default FormInput;
