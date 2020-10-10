import {
  Checkbox,
  CheckboxProps,
  RadioGroup,
  RadioGroupProps,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormRadioGroupProps = BaseProps & RadioGroupProps;

export const FormRadioGroup: FC<FormRadioGroupProps> = (
  props: FormRadioGroupProps
) => {
  const { name, label, my, children, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <RadioGroup {...field} {...rest}>
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioGroup;
