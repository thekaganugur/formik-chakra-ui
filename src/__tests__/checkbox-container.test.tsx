import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxContainer } from '../form-checkbox';

test('CheckboxContainer  Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: [] }}>
      <Form>
        <ChakraProvider>
          <CheckboxContainer name="test" label="Test">
            <div>noop</div>
          </CheckboxContainer>
        </ChakraProvider>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
