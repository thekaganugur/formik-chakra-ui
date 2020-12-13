import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  children: ReactNode;
};

export const CheckboxSingleControl: FC<CheckboxSingleProps> = (
  props: CheckboxSingleProps
) => {
  const { name, label, children, checkBoxProps, ...rest } = props;
  const [field, { error, touched }] = useField(name);
  const isChecked = field.value;

  return (
    <FormControl name={name} {...rest}>
      <Checkbox
        id={name}
        isInvalid={!!error && touched}
        isChecked={isChecked}
        {...field}
        {...checkBoxProps}
      >
        {label}
        {children}
      </Checkbox>
    </FormControl>
  );
};
