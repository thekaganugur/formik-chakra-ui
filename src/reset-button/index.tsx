import { Button, ButtonProps } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

const isObjEmpty = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export type ResetButtonProps = ButtonProps;

export const ResetButton: FC<ResetButtonProps> = (props: ResetButtonProps) => {
  const { children, ...rest } = props;
  const { isSubmitting, dirty, resetForm } = useFormikContext();

  return (
    <Button
      variantColor="teal"
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
