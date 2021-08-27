import { Input, InputProps, SystemProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type InputControlProps = BaseProps & { inputProps?: InputProps } & { systemProps?: SystemProps };

export const InputControl: FC<InputControlProps> = (
  props: InputControlProps
) => {
  const { name, label, inputProps, systemProps, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...rest}>
      <Input {...field} id={name} {...inputProps} {...systemProps} />
    </FormControl>
  );
};

export default InputControl;
