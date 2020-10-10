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
  const { children, name, label, my } = props;
  const [, { error }] = useField(name);
  const $my = my ?? 4;

  return (
    <ChakraFormControl isInvalid={!!error} my={$my}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </ChakraFormControl>
  );
};

export default FormControl;
