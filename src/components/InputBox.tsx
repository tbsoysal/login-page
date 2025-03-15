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

  const setNewStates = (newVal: string) => {
    setInputText(newVal);
    if (textField === "Confirm") inputType = "confirm";
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
        />
        {inputText && (
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
