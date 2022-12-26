import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant: string;
}

const Button = ({ children, variant, ...rest }: Props) => {
  // const defineClass = (variant: string) => {
  let buttonClass = ``;
  switch (variant) {
    case `primary`:
      buttonClass = `btn btn-primary w-1/2 md:w-1/3 md:p-3`;
      break;
    case `primary small`:
      buttonClass = `btn btn-primary w-1/2 md:w-1/4 md:p-3`;
      break;
    case `outline`:
      buttonClass = `btn btn-outline-primary w-1/2 md:w-1/3 md:p-3 mr-2`;
      break;
    case `outline small`:
      buttonClass = `btn btn-outline-primary w-1/2 md:w-1/4 md:p-3 mr-2`;
      break;
    case `unlogged`:
      buttonClass = `btn btn-unlogged w-full`;
      break;
    case `logged`:
      buttonClass = `btn btn-primary w-full`;
      break;
    default:
      buttonClass = `btn`;
  }

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
export default Button;

// variant === `primary` && `btn btn-primary w-1/2 md:w-1/3 md:p-3`;
// variant === `outline` && `btn btn-outline-primary w-1/2 md:w-1/3 md:p-3`;
// variant === `unlogged` && `btn btn-primary w-full bg-unlogged-color`;
// variant === `logged` && `btn btn-primary w-full`;
