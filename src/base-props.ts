import { FormControlProps } from '@chakra-ui/react';

export interface BaseProps {
  name: string;
  label?: string;
  formControlProps?: Omit<FormControlProps, 'name' | 'label'>;
}
