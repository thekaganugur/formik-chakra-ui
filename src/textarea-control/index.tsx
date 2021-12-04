import { Textarea, TextareaProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import { BaseProps, FormControl } from '../form-control';

export type TextareaControlProps = BaseProps & {
  textareaProps?: TextareaProps;
};

export const TextareaControl: React.FC<TextareaControlProps> = React.forwardRef(
  (
    props: TextareaControlProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const { name, label, textareaProps, ...rest } = props;
    const [field] = useField(name);

    return (
      <FormControl name={name} label={label} {...rest}>
        <Textarea {...field} id={name} ref={ref} {...textareaProps} />
      </FormControl>
    );
  }
);

export default TextareaControl;
