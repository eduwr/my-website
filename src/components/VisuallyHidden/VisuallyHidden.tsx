import React, { ReactNode } from "react";


interface Props {
  children: ReactNode;
  as?: string;
}



export const VisuallyHidden = ({ as = 'span', children }: Props) => (
  React.createElement(
    as,
    {className: "sr-only"},
    children
  )
)
