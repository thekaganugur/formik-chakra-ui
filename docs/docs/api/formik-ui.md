---
id: formik-ui
title: Formik UI
---

## CheckboxContainer

### Type

```typescript
CheckboxContainerProps = BaseProps & {
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
