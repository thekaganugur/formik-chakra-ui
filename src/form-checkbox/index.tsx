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

  return (
    <FormControl name={name} my={my}>
      <Checkbox {...field} {...rest} id={name}>
        {label}
      </Checkbox>
    </FormControl>
  );
};

export default FormCheckbox;
