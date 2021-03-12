import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';

export interface BaseProps extends FormControlProps {
  name: string;
  label?: string;
  helperText?: string;
}

export const FormControl: FC<BaseProps> = (props: BaseProps) => {
  const { children, name, label, helperText, ...rest } = props;
  const [, { error, touched }] = useField(name);

  return (
    <ChakraFormControl isInvalid={!!error && touched} {...rest}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </ChakraFormControl>
  );
};

export default FormControl;
