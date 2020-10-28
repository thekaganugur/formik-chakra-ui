import { Button, ButtonProps } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type ResetButtonProps = ButtonProps;

export const ResetButton: FC<ResetButtonProps> = (props: ResetButtonProps) => {
  const { children, ...rest } = props;
  const { isSubmitting, dirty, resetForm } = useFormikContext();

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => resetForm()}
      isDisabled={isSubmitting || !dirty}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ResetButton;
