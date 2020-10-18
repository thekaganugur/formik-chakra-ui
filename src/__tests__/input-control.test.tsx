import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import InputControl from '../input-control';

test('Input Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: 'Input' }}>
      <Form>
        <InputControl name="test" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
