import React, { useState } from "react";
import { errors, formFields } from "./LogInForm";

export interface Props {
  textField: string;
  inputType: string;
  placeHolder: string;
  formErrors: errors;
  setFormData: React.Dispatch<React.SetStateAction<formFields>>;
}

function InputBox({
  textField,
  inputType,
  placeHolder,
  setFormData,
  formErrors,
}: Props) {
  const [inputText, setInputText] = useState<string>("");

  const setNewStates = (newVal: string) => {
    setInputText(newVal);
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
      {formErrors[inputType as keyof errors] ? (
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
          {formErrors[inputType as keyof errors]}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputBox;
