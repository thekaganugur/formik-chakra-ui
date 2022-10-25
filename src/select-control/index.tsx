import { Select, SelectProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type SelectControlProps = BaseProps & {
  selectProps?: SelectProps;
  children: React.ReactNode;
};

export const SelectControl: FC<SelectControlProps> = React.forwardRef(
  (props: SelectControlProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const { name, label, selectProps, children, ...rest } = props;
    const [field] = useField(name);
    const { isSubmitting } = useFormikContext();

    return (
      <FormControl name={name} label={label} {...rest}>
        <Select
          {...field}
          id={name}
          isDisabled={isSubmitting}
          ref={ref}
          {...selectProps}
        >
          {children}
        </Select>
      </FormControl>
    );
  }
);

export default SelectControl;
