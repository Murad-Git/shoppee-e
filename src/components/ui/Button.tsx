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
  let buttonClass = ``;
  let buttonSize = ``;
  switch (variant) {
    case `primary`:
      buttonClass = `btn btn-primary mr-2`;
      break;
    case `outline`:
      buttonClass = `btn btn-outline-primary mr-2`;
      break;
    case `unlogged`:
      buttonClass = `btn btn-unlogged`;
      break;
    case `logged`:
      buttonClass = `btn btn-primary`;
      break;
    default:
      buttonClass = `btn `;
  }
  switch (size) {
    case `normal`:
      buttonSize = `w-1/3 md:w-1/3 md:p-3`;
      break;
    case `small`:
      buttonSize = `w-1/3 md:w-1/4 md:p-3`;
      break;
    case `full`:
      buttonSize = `w-full`;
      break;
    default:
      buttonClass = `w-1/2 md:w-1/3 md:p-3`;
  }
  return (
    <button className={`${buttonClass} ${buttonSize}`} {...rest}>
      {children}
    </button>
  );
};
