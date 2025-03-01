import { useState } from "react";

type Props = {
  textField: string;
  inputType: string;
};

function InputBox({ textField, inputType }: Props) {
  const [inputText, setInputText] = useState<string>("");
  return (
    <div className="input-container">
      <p className="input-label">{textField}</p>
      <input
        type={inputType}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
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
