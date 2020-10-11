import {
  Box,
  Button,
  ButtonGroup,
  CSSReset,
  Heading,
  Icon,
  Link,
  Radio,
  theme,
  ThemeProvider,
} from '@chakra-ui/core';
import { Formik } from 'formik';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import {
  FormCheckbox,
  FormCheckboxArray,
  FormCheckboxContainer,
  FormInput,
  FormRadioGroup,
  FormTextArea,
  PercentComplete,
  ResetButton,
  SubmitButton,
} from '../src';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const handleSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
};

const initialValues = {
  firstName: '',
  lastName: '',
  employed: false,
  favoriteColor: '',
  toppings: ['tuna'],
  notes: '',
};
const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  employed: Yup.boolean(),
  favoriteColor: Yup.string(),
  toppings: Yup.array().min(2),
  notes: Yup.string().required(),
});

const App = () => {
  return (
    <Box maxWidth={800} m="10px auto">
      <ThemeProvider theme={theme}>
        <CSSReset />

        <Heading as="h1" size="xl" textAlign="center">
          React Final Form
        </Heading>
        <Heading as="h2" size="lg" textAlign="center" m={5}>
          Chakra Example
        </Heading>
        <Box as="p" textAlign="center">
          Example using{' '}
          <Link href="https://github.com/kgnugur/formik-chakra-ui" isExternal>
            Formik Chakra
            <Icon name="external-link" mx="2px" />
          </Link>
          and{' '}
          <Link href="https://chakra-ui.com" isExternal>
            Chakra <Icon name="external-link" mx="2px" />
          </Link>
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, resetForm, dirty, isSubmitting }) => (
            <Box
              as="form"
              p={6}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              <FormInput name="firstName" label="First Name" />
              <FormInput name="lastName" label="Last Name" />
              <FormCheckbox name="employed" label="Employed" />
              <FormRadioGroup name="favoriteColor" label="Favorite Color">
                <Radio value="#ff0000">Red</Radio>
                <Radio value="#00ff00">Green</Radio>
                <Radio value="#0000ff">Blue</Radio>
              </FormRadioGroup>

              <FormCheckboxContainer name="toppings" label="Toppings">
                <FormCheckboxArray name="toppings" value="chicken">
                  🐓 Chicken
                </FormCheckboxArray>
                <FormCheckboxArray name="toppings" value="ham">
                  🐷 Ham
                </FormCheckboxArray>
                <FormCheckboxArray name="toppings" value="mushrooms">
                  🍄 Mushrooms
                </FormCheckboxArray>
                <FormCheckboxArray name="toppings" value="cheese">
                  🧀 Cheese
                </FormCheckboxArray>
                <FormCheckboxArray name="toppings" value="tuna">
                  🐟 Tuna
                </FormCheckboxArray>
                <FormCheckboxArray name="toppings" value="pineapple">
                  🍍 Pineapple
                </FormCheckboxArray>
              </FormCheckboxContainer>
              <FormTextArea name="notes" label="Notes" />

              <PercentComplete />

              <ButtonGroup>
                <SubmitButton>Submit</SubmitButton>
                <ResetButton>Reset</ResetButton>
              </ButtonGroup>

              <Box as="pre" marginY={10}>
                {JSON.stringify(values, null, 2)}
              </Box>
            </Box>
          )}
        </Formik>
      </ThemeProvider>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
