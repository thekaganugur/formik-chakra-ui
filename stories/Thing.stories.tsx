import React from 'react';
import {
  Thing,
  Props,
  SubmitButton,
  FormInput,
  FormTextArea,
  FormNumberInput,
} from '../src';
import {
  Box,
  CSSReset,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ThemeProvider,
} from '@chakra-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default {
  title: 'Welcome',
};

const validationSchema = Yup.object({ hello: Yup.string().required() });

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Form = (props?: Partial<Props>) => (
  <Formik
    initialValues={{ hello: '' }}
    onSubmit={console.log}
    validationSchema={validationSchema}
  >
    {({ handleSubmit, handleBlur, handleChange }) => (
      <ThemeProvider>
        <CSSReset />

        <Box p={8}>
          <form onSubmit={handleSubmit}>
            <FormInput name="hello" label="Emai" />
            <FormTextArea name="hello" label="Yoyo" />
            <FormNumberInput name="hello" label="numbe" />
            <SubmitButton name="hello">Button</SubmitButton>
          </form>
        </Box>
      </ThemeProvider>
    )}
  </Formik>
);
