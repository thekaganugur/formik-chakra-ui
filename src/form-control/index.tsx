import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';

export type FormControlProps = Omit<BaseProps, 'label'> &
  ChakraFormControlProps & { label?: string };

export const FormControl: FC<FormControlProps> = (props: FormControlProps) => {
  const { children, name, label, my = 4 } = props;
  const [, { error, touched }] = useField(name);

  return (
    <ChakraFormControl isInvalid={!!error && touched} my={my}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </ChakraFormControl>
  );
};

export default FormControl;
