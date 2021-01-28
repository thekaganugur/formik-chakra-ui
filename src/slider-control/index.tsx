import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type SliderControlProps = BaseProps & {
  sliderProps?: SliderProps;
  sliderTrackProps?: SliderTrackProps;
  sliderThumbProps?: SliderThumbProps;
};

export const SliderControl: FC<SliderControlProps> = (
  props: SliderControlProps
) => {
  const {
    name,
    label,
    sliderProps,
    sliderTrackProps,
    sliderThumbProps,
    ...rest
  } = props;
  const [field, , { setValue }] = useField(name);
  function handleChange(value: number) {
    setValue(value);
  }

  return (
    <FormControl name={name} label={label} {...rest}>
      <Slider {...field} onChange={handleChange} {...sliderProps}>
        <SliderTrack {...sliderTrackProps}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb {...sliderThumbProps} />
      </Slider>
    </FormControl>
  );
};

export default SliderControl;
