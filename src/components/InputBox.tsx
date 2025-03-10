import React, { useState } from "react";
import { formFields } from "./LogInForm";

type Props = {
  textField: string;
  inputType: string;
  placeHolder: string;
  setFormData: React.Dispatch<React.SetStateAction<formFields>>;
};

function InputBox({ textField, inputType, placeHolder, setFormData }: Props) {
  const [inputText, setInputText] = useState<string>("");

  const setNewStates = (newVal: string) => {
    setInputText(newVal);
    setFormData((prev) => ({ ...prev, [inputType]: newVal }));
  };

  return (
    <div className="input-container">
      <p className="input-label">{textField}</p>
      <input
        type={inputType}
        value={inputText}
        placeholder={placeHolder}
        onChange={(e) => setNewStates(e.target.value)}
      />
      {inputText && (
        <span className="inputIcon" onClick={() => setInputText("")}>
          <img src="./reset.svg" />
        </span>
      )}
    </div>
  );
}

export default InputBox;
