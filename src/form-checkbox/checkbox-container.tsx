import { CheckboxProps, Stack, StackProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormCheckboxContainerProps = BaseProps &
  CheckboxProps & { stackConfig?: StackProps };

export const FormCheckboxContainer: FC<FormCheckboxContainerProps> = (
  props: FormCheckboxContainerProps
) => {
  const { name, label, my, children, stackConfig, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Stack pl={6} mt={1} spacing={1} {...stackConfig}>
        {children}
      </Stack>
    </FormControl>
  );
};

export default FormCheckboxContainer;
