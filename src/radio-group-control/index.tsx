import {
  FormControlProps,
  RadioGroup,
  RadioGroupProps,
  Stack,
  StackProps,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type RadioGroupControlProps = BaseProps &
  FormControlProps & {
    radioGroupProps?: RadioGroupProps;
    stackProps?: StackProps;
  };

export const RadioGroupControl: FC<RadioGroupControlProps> = (
  props: RadioGroupControlProps
) => {
  const {
    name,
    label,
    my,
    children,
    radioGroupProps,
    stackProps = { direction: 'row' },
  } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <RadioGroup {...field} {...radioGroupProps}>
        <Stack {...stackProps}>{children}</Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupControl;
