import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC, ForwardedRef } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type InputControlProps = BaseProps & {
  inputProps?: InputProps;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  useAddon?: { left?: boolean; right?: boolean };
};

export const InputControl: FC<InputControlProps> = React.forwardRef(
  (props: InputControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      name,
      label,
      inputProps,
      leftChildren,
      rightChildren,
      useAddon = { left: false, right: false },
      ...rest
    } = props;
    const [field] = useField(name);

    const leftELem = leftChildren ? (
      <InputAddonOrElement useAddon={useAddon?.left} children={leftChildren} />
    ) : null;

    const rightElem = rightChildren ? (
      <InputAddonOrElement
        isRight
        useAddon={useAddon?.right}
        children={rightChildren}
      />
    ) : null;

    return (
      <FormControl name={name} label={label} {...rest}>
        <InputGroup height={"fit-content"} alignItems={"center"}>
          {leftELem}
          <Input {...field} id={name} {...inputProps} ref={ref} />
          {rightElem}
        </InputGroup>
      </FormControl>
    );
  }
);

const InputAddonOrElement = ({
  isRight = false,
  useAddon = false,
  children,
}: {
  isRight?: boolean;
  useAddon?: boolean;
  children: React.ReactNode;
}) => {
  let AddonOrElement = useAddon ? InputLeftAddon : InputLeftElement;
  if (isRight) {
    AddonOrElement = useAddon ? InputRightAddon : InputRightElement;
  }
  return <AddonOrElement height={"100%"}> {children} </AddonOrElement>;
};

export default InputControl;
