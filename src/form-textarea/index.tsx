import { InputProps, Textarea } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { FormControl, FormControlProps } from '../form-control';

export type FormTextareaProps = FormControlProps &
  InputProps<HTMLTextAreaElement>;

export const FormTextArea: FC<FormTextareaProps> = (
  props: FormTextareaProps
) => {
  const { name, label, my, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Textarea {...field} {...rest} id={name} />
    </FormControl>
  );
};

export default FormTextArea;
