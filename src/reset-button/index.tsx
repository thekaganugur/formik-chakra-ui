import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type ResetButtonProps = ButtonProps;

export const ResetButton: FC<ResetButtonProps> = (props: ResetButtonProps) => {
  const { children, my = 4, ...rest } = props;
  const { isSubmitting, dirty, resetForm } = useFormikContext();

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => resetForm()}
      isDisabled={isSubmitting || !dirty}
      my={my}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ResetButton;
