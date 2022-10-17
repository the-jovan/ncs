import React, { FunctionComponent } from "react";

interface ComponentProps {
  label?: string;
  placeholder: string;
  changeEvent: (num: number) => void;
}

const InputNumber: FunctionComponent<ComponentProps> = ({
  label,
  placeholder,
  changeEvent,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : undefined}
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeEvent(+e.currentTarget.value)
        }
        placeholder={placeholder}
      />
    </>
  );
};

export default InputNumber;
