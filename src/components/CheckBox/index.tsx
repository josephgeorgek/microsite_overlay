import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: { blue_gray_200: "border border-blue_gray-200 border-solid" },
};
const shapes = { round: "rounded-[5px]" };
const sizes = { xs: "pt-0.5" };

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      id = "checkbox_id",
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { CheckBox };
