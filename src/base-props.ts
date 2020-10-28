import { FormControlProps } from '@chakra-ui/core';

export interface BaseProps {
  name: string;
  label?: string;
  formControlProps?: Omit<FormControlProps, 'name' | 'label'>;
}
