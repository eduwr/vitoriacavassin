import { CSSProperties, ReactNode } from "react";
import { Property } from "csstype";

interface ButtonProps {
  children: ReactNode;
  outline?: boolean;
  align?: Property.AlignSelf;
  justify?: Property.JustifySelf;
}


const outlineStyle = "whitespace-nowrap py-4 px-8 text-lg md:text-xl text-yellow uppercase border-2 border-yellow rounded-lg hover:text-white hover:bg-yellow transition-all duration-300"
const buttonStyle = "whitespace-nowrap py-4 px-8 text-lg md:text-xl text-white uppercase rounded-lg bg-yellow transition-all duration-300 opacity-80 hover:opacity-100"

export const BaseButton = ({ children, outline, align, justify }: ButtonProps) => {
  const alignment: CSSProperties = {
    alignSelf: align,
    justifySelf: justify
  }

  return (
    <div style={alignment}>
      <button
        className={outline ? outlineStyle : buttonStyle}>
        {children}
      </button>
    </div>
  )
}