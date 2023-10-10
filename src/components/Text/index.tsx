import React from "react";

const sizeClasses = {
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtOpenSansBold14Gray800: "font-bold font-opensans",
  txtOpenSansBold14: "font-bold font-opensans",
  txtOpenSansBold20Gray800: "font-bold font-opensans",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansBold20: "font-bold font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
