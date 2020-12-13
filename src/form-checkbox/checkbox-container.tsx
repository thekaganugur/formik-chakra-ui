import { Stack, StackProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type CheckboxContainerProps = BaseProps & {
  stackProps?: StackProps;
  children: ReactNode;
};

export const CheckboxContainer: FC<CheckboxContainerProps> = (
  props: CheckboxContainerProps
) => {
  const { name, label, children, stackProps, ...rest } = props;

  return (
    <FormControl name={name} label={label} {...rest}>
      <Stack pl={6} mt={1} spacing={1} {...stackProps}>
        {children}
      </Stack>
    </FormControl>
  );
};

export default CheckboxContainer;
