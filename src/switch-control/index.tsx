import { Flex, Switch, SwitchProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type SwitchControlProps = BaseProps & SwitchProps;

export const SwitchControl: FC<SwitchControlProps> = (
  props: SwitchControlProps
) => {
  const { name, label, my, ...rest } = props;
  const [field, { error, touched }] = useField(name);

  return (
    <FormControl
      name={name}
      label={label}
      my={my}
      as={Flex}
      alignItems="center"
    >
      <Switch
        id={name}
        isInvalid={!!error && touched}
        isChecked={field.value}
        {...field}
        {...rest}
      />
    </FormControl>
  );
};

export default SwitchControl;
