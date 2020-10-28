import {
  RadioGroup,
  RadioGroupProps,
  Stack,
  StackProps,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type RadioGroupControlProps = BaseProps & {
  radioGroupProps?: RadioGroupProps;
  stackProps?: StackProps;
  children: ReactNode;
};

export const RadioGroupControl: FC<RadioGroupControlProps> = (
  props: RadioGroupControlProps
) => {
  const {
    name,
    label,
    formControlProps,
    radioGroupProps,
    stackProps,
    children,
  } = props;
  const [field] = useField(name);
  console.log(field);

  return (
    <FormControl name={name} label={label} {...formControlProps}>
      <RadioGroup {...field} {...radioGroupProps}>
        <Stack direction="row" {...stackProps}>
          {children}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupControl;
