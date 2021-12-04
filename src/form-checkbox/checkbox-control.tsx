import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type CheckboxControlProps = Overwrite<
  CheckboxProps,
  { value: string | number }
> & { name: string; label?: string };

export const CheckboxControl: React.FC<CheckboxControlProps> = React.forwardRef(
  (props: CheckboxControlProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { name, label, children, ...rest } = props;
    const [field, { error, touched }] = useField(name);
    let isChecked;
    if (field.value instanceof Array) {
      isChecked = field.value.includes(props.value) ?? false;
    }

    return (
      <Checkbox
        {...field}
        isInvalid={!!error && touched}
        isChecked={isChecked}
        ref={ref}
        {...rest}
      >
        {label}
        {children}
      </Checkbox>
    );
  }
);

export default CheckboxControl;
