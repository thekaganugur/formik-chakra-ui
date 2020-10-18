import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxSingleControl } from '../form-checkbox';

test('CheckboxSingleControl Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: false }}>
      <Form>
        <ThemeProvider>
          <CSSReset />
          <CheckboxSingleControl name="test">Test Label</CheckboxSingleControl>
        </ThemeProvider>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
