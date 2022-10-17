import React, { FunctionComponent } from "react";

interface ComponentProps {
  label?: string;
  placeholder: string;
  changeEvent: (text: string) => void;
}

const InputText: FunctionComponent<ComponentProps> = ({
  placeholder,
  changeEvent,
  label,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : undefined}
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeEvent(e.currentTarget.value)
        }
        placeholder={placeholder}
      />
    </>
  );
};

export default InputText;
