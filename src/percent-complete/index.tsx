import { Box, Progress, ProgressProps } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';

type ProgressFn = (numFields: number, numerrors: number) => any;

const calculateProgress: ProgressFn = (numFields, numErrors) => {
  const validFields = numFields - numErrors;
  return (validFields / numFields) * 100;
};

export type PercentCompleteProps = ProgressProps & {
  progressFn?: ProgressFn;
};

export const PercentComplete: FC<PercentCompleteProps> = (
  props: PercentCompleteProps
) => {
  const { children, progressFn = calculateProgress, ...rest } = props;
  const { errors, values, validateForm, dirty } = useFormikContext();
  const numFields = Object.keys(values as object).length;
  const numErrors = Object.keys(errors).length;

  useEffect(() => {
    validateForm();
  }, [dirty]);

  return (
    <Box marginY={5}>
      <Progress
        hasStripe
        isAnimated
        value={progressFn(numFields, numErrors)}
        {...rest}
      />
    </Box>
  );
};

export default PercentComplete;
