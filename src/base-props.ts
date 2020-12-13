import { FormControlProps } from '@chakra-ui/react';

export interface BaseProps extends FormControlProps {
  name: string;
  label?: string;
}
