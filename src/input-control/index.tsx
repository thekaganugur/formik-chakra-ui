import { Input, InputProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type InputControlProps = BaseProps & { inputProps?: InputProps };

export const InputControl: FC<InputControlProps> = (
  props: InputControlProps
) => {
  const { name, label, inputProps, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...rest}>
      <Input {...field} id={name} {...inputProps} />
    </FormControl>
  );
};

export default InputControl;
