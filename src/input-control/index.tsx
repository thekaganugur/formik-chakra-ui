import { Input, InputProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { BaseProps, FormControl } from '../form-control';

export type InputControlProps = BaseProps & { inputProps?: InputProps };

export const InputControl = React.forwardRef<
  HTMLInputElement,
  InputControlProps
>((props, ref) => {
  const { name, label, inputProps, ...rest } = props;
  const [field] = useField(name);
  const { isSubmitting } = useFormikContext();
  return (
    <FormControl name={name} label={label} {...rest}>
      <Input
        {...field}
        id={name}
        isDisabled={isSubmitting}
        {...inputProps}
        ref={ref}
      />
    </FormControl>
  );
});

export default InputControl;
