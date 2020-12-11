import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxSingleControl } from '../form-checkbox';

test('CheckboxSingleControl Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: false }}>
      <Form>
        <ChakraProvider>
          <CheckboxSingleControl name="test">Test Label</CheckboxSingleControl>
        </ChakraProvider>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
