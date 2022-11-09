import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  // [key: string]: any;
}

export default function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}
