import { Switch, SwitchProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormSwitchProps = BaseProps & SwitchProps;

export const FormSwitch: FC<FormSwitchProps> = (props: FormSwitchProps) => {
  const { name, label, my, ...rest } = props;
  const [field, { error, touched }] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
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

export default FormSwitch;
