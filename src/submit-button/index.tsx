import { Button, ButtonProps } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type SubmitButtonProps = ButtonProps;

export const SubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
