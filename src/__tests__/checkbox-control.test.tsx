import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxControl } from '../form-checkbox';

test('CheckboxControl Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: false }}>
      <Form>
        <ThemeProvider>
          <CSSReset />
          <CheckboxControl name="test" value="test-value">
            Test Label
          </CheckboxControl>
        </ThemeProvider>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
