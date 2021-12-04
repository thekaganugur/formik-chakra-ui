import { Select, SelectProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import { BaseProps, FormControl } from '../form-control';

export type SelectControlProps = BaseProps & {
  selectProps?: SelectProps;
  children: React.ReactNode;
};

export const SelectControl: React.FC<SelectControlProps> = React.forwardRef(
  (props: SelectControlProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const { name, label, selectProps, children, ...rest } = props;
    const [field] = useField(name);

    return (
      <FormControl name={name} label={label} {...rest}>
        <Select {...field} id={name} ref={ref} {...selectProps}>
          {children}
        </Select>
      </FormControl>
    );
  }
);

export default SelectControl;
