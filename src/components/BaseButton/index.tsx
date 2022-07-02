import { CSSProperties, ReactNode, MouseEventHandler } from "react";

import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  outline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  style?: CSSProperties;
}


const outlineStyle = "flex whitespace-nowrap py-4 px-8 text-lg md:text-xl text-yellow uppercase border-2 border-yellow rounded-lg hover:text-white hover:bg-yellow transition-all duration-300"
const buttonStyle = "flex whitespace-nowrap py-4 px-8 text-lg md:text-xl text-white uppercase rounded-lg bg-yellow transition-all duration-300 opacity-80 hover:opacity-100"

export const BaseButton = ({ children, outline, style, onClick, to }: ButtonProps) => {
  return (
    <div style={style}>
      {to ? (
        <Link href={to}>
          <a className={outline ? outlineStyle : buttonStyle}>{children}</a>
        </Link>
      ) : (
        <button
          type="button"
          className={outline ? outlineStyle : buttonStyle}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  )
}