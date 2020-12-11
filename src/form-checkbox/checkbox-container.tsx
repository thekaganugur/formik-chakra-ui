import { CheckboxProps, Stack, StackProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type CheckboxContainerProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  stackConfig?: StackProps;
  children: ReactNode;
};

export const CheckboxContainer: FC<CheckboxContainerProps> = (
  props: CheckboxContainerProps
) => {
  const { name, label, children, stackConfig, formControlProps } = props;

  return (
    <FormControl name={name} label={label} {...formControlProps}>
      <Stack pl={6} mt={1} spacing={1} {...stackConfig}>
        {children}
      </Stack>
    </FormControl>
  );
};

export default CheckboxContainer;
