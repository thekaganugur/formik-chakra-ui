import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = () => <div>...</div>;

export * from './submit-button';
export * from './form-input';
export * from './form-textarea';
export * from './form-number-input';