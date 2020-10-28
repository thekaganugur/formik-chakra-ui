import { Textarea, TextareaProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type TextareaControlProps = BaseProps & {
  textareaProps?: TextareaProps;
};

export const TextareaControl: FC<TextareaControlProps> = (
  props: TextareaControlProps
) => {
  const { name, label, formControlProps, textareaProps } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...formControlProps}>
      <Textarea id={name} {...field} {...textareaProps} />
    </FormControl>
  );
};

export default TextareaControl;
