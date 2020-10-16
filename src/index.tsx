import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = () => <div>...</div>;

export * from './input-control';
export * from './radio-group-control';
export * from './textarea-control';
export * from './number-input-control';

export * from './form-checkbox';

export * from './radio-group-control';
export * from './switch-control';
export * from './select-control';

export * from './submit-button';
export * from './reset-button';
export * from './percent-complete';
