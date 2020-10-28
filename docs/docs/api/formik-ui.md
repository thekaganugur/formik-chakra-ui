---
id: formik-ui
title: Formik UI
---

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
import { InputControl } from 'formik-chakra-ui';

<NumberInputControl name="age" label="Last Name" />;
```

#### [Chakra UI Documentation](https://next.chakra-ui.com/docs/form/number-input)
