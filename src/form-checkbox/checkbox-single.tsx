import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  children?: React.ReactNode;
};

export const CheckboxSingleControl: FC<CheckboxSingleProps> = React.forwardRef(
  (props: CheckboxSingleProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { name, label, children, checkBoxProps, ...rest } = props;
    const [field, { error, touched }] = useField(name);
    const { isSubmitting } = useFormikContext();

    const isChecked = field.value;

    return (
      <FormControl name={name} {...rest}>
        <Checkbox
          {...field}
          id={name}
          isInvalid={!!error && touched}
          isChecked={isChecked}
          isDisabled={isSubmitting}
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
