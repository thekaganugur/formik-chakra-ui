import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type NumberInputControlProps = BaseProps & {
  numberInputProps?: NumberInputProps;
  showStepper?: boolean;
  children?: React.ReactNode;
};

export const NumberInputControl: FC<NumberInputControlProps> = React.forwardRef(
  (
    props: NumberInputControlProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const {
      name,
      label,
      showStepper = true,
      children,
      numberInputProps,
      placeholder,
      ...rest
    } = props;
    const [field, { error, touched }] = useField(name);
    const { setFieldValue, isSubmitting } = useFormikContext();

    const $setFieldValue = (name: string) => (value: any) =>
      setFieldValue(name, value);

    return (
      <FormControl name={name} label={label} {...rest}>
        <NumberInput
          {...field}
          id={name}
          onChange={$setFieldValue(name)}
          isInvalid={!!error && touched}
          isDisabled={isSubmitting}
          {...numberInputProps}
        >
          <NumberInputField name={name} ref={ref} placeholder={placeholder} />
          {showStepper && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
          {children}
        </NumberInput>
      </FormControl>
    );
  }
);

export default NumberInputControl;
