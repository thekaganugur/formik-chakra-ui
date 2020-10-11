import { Checkbox, CheckboxProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';

export type FormCheckboxArrayProps = BaseProps & CheckboxProps;

export const FormCheckboxArray: FC<FormCheckboxArrayProps> = (
  props: FormCheckboxArrayProps
) => {
  const { name, label, my, children, ...rest } = props;
  const [field, { error, touched }] = useField(name);
  const isChecked = field.value?.includes(props.value) ?? false;

  return (
    <Checkbox
      id={name}
      isInvalid={!!error && touched}
      isChecked={isChecked}
      {...field}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

export default FormCheckboxArray;
