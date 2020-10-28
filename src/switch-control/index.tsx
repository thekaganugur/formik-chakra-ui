import { Flex, Switch, SwitchProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type SwitchControlProps = BaseProps & { switchProps?: SwitchProps };

export const SwitchControl: FC<SwitchControlProps> = (
  props: SwitchControlProps
) => {
  const { name, label, formControlProps, switchProps } = props;
  const [field, { error, touched }] = useField(name);

  return (
    <FormControl
      name={name}
      label={label}
      as={Flex}
      alignItems="center"
      {...formControlProps}
    >
      <Switch
        id={name}
        isInvalid={!!error && touched}
        isChecked={field.value}
        {...field}
        {...switchProps}
      />
    </FormControl>
  );
};

export default SwitchControl;
