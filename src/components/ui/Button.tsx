import { buttonVariants } from '@/utils/helpers';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant: 'primary' | 'outline' | 'unlogged' | 'logged';
  size: 'normal' | 'small' | 'full';
}

export const Button = ({ children, variant, size, ...rest }: Props) => {
  const buttonClass = buttonVariants(variant, size);
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
