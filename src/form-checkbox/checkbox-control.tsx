import { Checkbox, CheckboxProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type CheckboxArrayProps = BaseProps &
  Overwrite<CheckboxProps, { value: string | number }>;

export const CheckboxControl: FC<CheckboxArrayProps> = (
  props: CheckboxArrayProps
) => {
  const { name, label, my, children, ...rest } = props;
  const [field, { error, touched }] = useField(name);
  let isChecked;
  if (field.value instanceof Array) {
    isChecked = field.value.includes(props.value) ?? false;
  }

  return (
    <Checkbox
      id={name}
      isInvalid={!!error && touched}
      isChecked={isChecked}
      {...field}
      {...rest}
    >
      {label}
      {children}
    </Checkbox>
  );
};

export default CheckboxControl;
