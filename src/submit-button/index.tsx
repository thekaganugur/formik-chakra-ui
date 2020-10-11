import { Button, ButtonProps, theme, ThemeProvider } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

const isObjEmpty = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export type SubmitButtonProps = ButtonProps;

export const SubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, variantColor = 'teal', ...rest } = props;
  const { isSubmitting, errors } = useFormikContext();

  return (
    <Button
      type="submit"
      isLoading={isSubmitting}
      isDisabled={!isObjEmpty(errors)}
      {...rest}
      variantColor={variantColor}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
