import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  SubmitButton,
  FormCheckbox,
  FormTextArea,
  FormNumberInput,
  FormInput,
  FormRadioGroup,
} from '../src';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, CSSReset, Radio, ThemeProvider } from '@chakra-ui/core';

const validationSchema = Yup.object({ hello: Yup.string().required() });

const App = () => {
  return (
    <Formik
      initialValues={{ hello: '' }}
      onSubmit={console.log}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values }) => (
        <ThemeProvider>
          <CSSReset />

          <Box p={8}>
            <form onSubmit={handleSubmit}>
              <FormInput name="firstName" label="First Name" />
              <FormInput name="lastName" label="Last Name" />
              <FormCheckbox name="employed" label="Employed" />
              <FormRadioGroup name="favoriteColor" label="Favorite Color">
                <Radio value="#ff0000">Red</Radio>
                <Radio value="#00ff00">Green</Radio>
                <Radio value="#0000ff">Blue</Radio>
              </FormRadioGroup>

              <FormTextArea name="hello" label="Yoyo" />
              <FormNumberInput name="hello" label="numbe" />
              <SubmitButton>Button</SubmitButton>
            </form>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>
        </ThemeProvider>
      )}
    </Formik>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
