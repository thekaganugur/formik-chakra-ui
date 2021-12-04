import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import { BaseProps, FormControl } from '../form-control';

export type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  children: React.ReactNode;
};

export const CheckboxSingleControl: React.FC<CheckboxSingleProps> = React.forwardRef(
  (props: CheckboxSingleProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { name, label, children, checkBoxProps, ...rest } = props;
    const [field, { error, touched }] = useField(name);
    const isChecked = field.value;

    return (
      <FormControl name={name} {...rest}>
        <Checkbox
          {...field}
          id={name}
          isInvalid={!!error && touched}
          isChecked={isChecked}
          ref={ref}
          {...checkBoxProps}
        >
          {label}
          {children}
        </Checkbox>
      </FormControl>
    );
  }
);
