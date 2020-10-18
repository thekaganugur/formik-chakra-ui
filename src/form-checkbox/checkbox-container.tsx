import { CheckboxProps, Stack, StackProps } from '@chakra-ui/core';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type CheckboxContainerProps = BaseProps &
  CheckboxProps & { stackConfig?: StackProps; children: ReactNode };

export const CheckboxContainer: FC<CheckboxContainerProps> = (
  props: CheckboxContainerProps
) => {
  const { name, label, my, children, stackConfig, ...rest } = props;

  return (
    <FormControl name={name} label={label} my={my} {...rest}>
      <Stack pl={6} mt={1} spacing={1} {...stackConfig}>
        {children}
      </Stack>
    </FormControl>
  );
};

export default CheckboxContainer;
