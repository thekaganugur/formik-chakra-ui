import { Textarea, TextareaProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type TextareaControlProps = BaseProps & {
  textareaProps?: TextareaProps;
};

export const TextareaControl: FC<TextareaControlProps> = React.forwardRef(
  (
    props: TextareaControlProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const { name, label, textareaProps, ...rest } = props;
    const [field] = useField(name);
    const { isSubmitting } = useFormikContext();

    return (
      <FormControl name={name} label={label} {...rest}>
        <Textarea
          {...field}
          id={name}
          isDisabled={isSubmitting}
          ref={ref}
          {...textareaProps}
        />
      </FormControl>
    );
  }
);

export default TextareaControl;
