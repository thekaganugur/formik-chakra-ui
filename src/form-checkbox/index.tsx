import { Checkbox, CheckboxProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormCheckboxProps = BaseProps & CheckboxProps;

export const FormCheckbox: FC<FormCheckboxProps> = (
  props: FormCheckboxProps
) => {
  const { name, label, my, ...rest } = props;
  const [field] = useField(name);
  const isChecked = field.value;

  return (
    <FormControl name={name} my={my}>
      <Checkbox id={name} isChecked={isChecked} {...field} {...rest}>
        {label}
      </Checkbox>
    </FormControl>
  );
};

export * from './checkbox-container';
export * from './checkbox-array';
export default FormCheckbox;
