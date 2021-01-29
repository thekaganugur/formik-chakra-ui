import {
  HStack,
  PinInput,
  PinInputField,
  PinInputProps,
  StackProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type PinInputControlProps = BaseProps & {
  pinAmount: number;
  stackProps?: StackProps;
  pinInputProps?: Omit<PinInputProps, 'children'>;
};

export const PinInputControl: FC<PinInputControlProps> = (
  props: PinInputControlProps
) => {
  const { name, label, pinAmount, stackProps, pinInputProps, ...rest } = props;
  const [field, , { setValue }] = useField(name);
  const renderedPinInputFields = [...Array(pinAmount)].map(() => (
    <PinInputField />
  ));
  function handleChange(value: string) {
    setValue(value);
  }

  return (
    <FormControl name={name} label={label} {...rest}>
      <HStack {...stackProps}>
        <PinInput
          {...field}
          id={name}
          onChange={handleChange}
          {...pinInputProps}
        >
          {renderedPinInputFields}
        </PinInput>
      </HStack>
    </FormControl>
  );
};

export default PinInputControl;
