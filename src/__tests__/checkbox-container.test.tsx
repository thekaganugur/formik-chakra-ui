import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxContainer } from '../form-checkbox';

test('CheckboxContainer  Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: [] }}>
      <Form>
        <ThemeProvider>
          <CSSReset />
          <CheckboxContainer name="test" label="Test">
            <div>noop</div>
          </CheckboxContainer>
        </ThemeProvider>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
