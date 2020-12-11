import { Select, SelectProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type SelectControlProps = BaseProps & {
  selectProps?: SelectProps;
  children: ReactNode;
};

export const SelectControl: FC<SelectControlProps> = (
  props: SelectControlProps
) => {
  const { name, label, formControlProps, selectProps, children } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...formControlProps}>
      <Select id={name} {...field} {...selectProps}>
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectControl;
