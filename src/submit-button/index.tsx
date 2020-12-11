import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type SubmitButtonProps = ButtonProps;

export const SubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, mt = 4, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type="submit"
      isLoading={isSubmitting}
      colorScheme="teal"
      mt={mt}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
