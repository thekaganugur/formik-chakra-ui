import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';

export interface BaseProps extends FormControlProps {
  name: string;
  label?: string;
  labelProps?: FormLabelProps;
  helperText?: React.ReactNode;
  helperTextProps?: HelpTextProps;
  errorMessageProps?: FormErrorMessageProps;
}

export const FormControl: FC<BaseProps> = (props: BaseProps) => {
  const {
    children,
    name,
    label,
    labelProps,
    helperText,
    helperTextProps,
    errorMessageProps,
    ...rest
  } = props;
  const [, { error, touched }] = useField(name);

  return (
    <ChakraFormControl isInvalid={!!error && touched} {...rest}>
      {label && (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && (
        <FormErrorMessage {...errorMessageProps}>{error}</FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      )}
    </ChakraFormControl>
  );
};

export default FormControl;
