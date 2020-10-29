---
id: formik-ui
title: Formik UI
---

## BaseProps Type

```typescript
interface BaseProps {
  name: string;
  label?: string;
  formControlProps?: Omit<FormControlProps, 'name' | 'label'>;
}
```

## CheckboxContainer

### Type

```typescript
type CheckboxContainerProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  stackConfig?: StackProps;
  children: ReactNode;
};
```

### Example

```jsx
import { CheckboxContainer, CheckboxControl } from 'formik-chakra-ui';


<CheckboxContainer name="toppings" label="Toppings">
  <CheckboxControl name="toppings" value="cheese">
    🧀 Cheese
  <CheckboxControl name="toppings" value="pineapple">
    🍍 Pineapple
  </CheckboxControl>
</CheckboxContainer>
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/checkbox)

## CheckboxControl

### Type

```typescript
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

type CheckboxControlProps = Overwrite<
  CheckboxProps,
  { value: string | number }
> & { name: string; label?: string };
```

### Example

```jsx
import { CheckboxContainer, CheckboxControl } from 'formik-chakra-ui';


<CheckboxContainer name="toppings" label="Toppings">
  <CheckboxControl name="toppings" value="cheese">
    🧀 Cheese
  <CheckboxControl name="toppings" value="pineapple">
    🍍 Pineapple
  </CheckboxControl>
</CheckboxContainer>
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/checkbox)

## CheckboxSingleControl

### Type

```typescript
type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: CheckboxProps;
  children: ReactNode;
};
```

### Example

```jsx
import { CheckboxSingleControl } from 'formik-chakra-ui';

<CheckboxSingleControl name="employed">Employed</CheckboxSingleControl>;
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/checkbox)

## InputControl

### Type

```typescript
type InputControlProps = BaseProps & { inputProps?: InputProps };
```

### Example

```jsx
import { InputControl } from 'formik-chakra-ui';

<InputControl name="firstName" label="First Name" />;
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/input)

## NumberInputControl

### Type

```typescript
type NumberInputControlProps = BaseProps & {
  numberInputProps?: NumberInputProps;
  showStepper?: boolean;
  children?: ReactNode;
};
```

### Example

```jsx
import { NumberInputControl } from 'formik-chakra-ui';

<NumberInputControl name="age" label="Last Name" />;
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/number-input)

## PercentComplete

### Type

```typescript
type PercentCompleteProps = {
  progressProps?: ProgressProps;
  boxProps?: BoxProps;
  progressFn?: ProgressFn;
};
```

### Example

```jsx
import { PercentComplete } from 'formik-chakra-ui';

<PercentComplete />;
```

## RadioGroup

### Type

```typescript
RadioGroupControlProps = BaseProps & {
  radioGroupProps?: RadioGroupProps;
  stackProps?: StackProps;
  children: ReactNode;
};

```

### Example

```jsx
import { RadioGroupControl, Radio } from 'formik-chakra-ui';

<RadioGroupControl name="favoriteColor" label="Favorite Color">
  <Radio value="#ff0000">Red</Radio>
  <Radio value="#00ff00">Green</Radio>
  <Radio value="#0000ff">Blue</Radio>
</RadioGroupControl>;
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/radio)

## ResetButton

### Type

```typescript
ResetButtonProps = ButtonProps;
```

### Example

```jsx
import { ResetButton } from 'formik-chakra-ui';

<ResetButton>Reset</ResetButton>;
```

## SelectControl

### Type

```typescript
SelectControlProps = BaseProps & {
  selectProps?: SelectProps;
  children: ReactNode;
};

```

### Example

```jsx
import { SelectControl } from 'formik-chakra-ui';

<SelectControl name="notes" selectProps={{ placeholder: 'Select option' }}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</SelectControl>;
```

## SubmitButton

### Type

```typescript
type SubmitButtonProps = ButtonProps;
```

### Example

```jsx
import { SubmitButton } from 'formik-chakra-ui';

<SubmitButton>Submit</SubmitButton>;
```

## SwitchControl

### Type

```typescript
type SwitchControlProps = BaseProps & { switchProps?: SwitchProps };
```

### Example

```jsx
import { SwitchControl } from 'formik-chakra-ui';

<SwitchControl name="employedd" label="Employed" />;
```

## Textarea

### Type

```typescript
type TextareaControlProps = BaseProps & { textareaProps?: TextareaProps };
```

### Example

```jsx
import { TextareaControl } from 'formik-chakra-ui';

<TextareaControl name="notes" label="Notes" />;
```
