import React, { useState } from "react";
import { formFields } from "./LogInForm";

export interface Props {
  textField: string;
  inputType: string;
  placeHolder: string;
  inputError: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<formFields>>;
}

function InputBox({
  textField,
  inputType,
  placeHolder,
  setFormData,
  inputError,
}: Props) {
  const [inputText, setInputText] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const setNewStates = (newVal: string) => {
    setInputText(newVal);
    if (textField === "Confirm") inputType = "confirm";
    if (textField === "Full Name") inputType = "fullname";
    setFormData((prev) => ({
      ...prev,
      [inputType]: newVal,
    }));
  };

  return (
    <>
      <div className="input-container">
        <p className="input-label">{textField}</p>
        <input
          type={inputType}
          value={inputText}
          placeholder={placeHolder}
          onChange={(e) => setNewStates(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setTimeout(() => setFocused(false), 50);
          }}
        />
        {focused && inputText && (
          <span className="inputIcon" onClick={() => setNewStates("")}>
            <img src="./reset.svg" />
          </span>
        )}
      </div>
      {inputError ? (
        <p
          style={{
            color: "#FF3B30",
            position: "relative",
            top: "-0.5rem",
            textAlign: "end",
            marginBottom: "0.5rem",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {inputError}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputBox;
