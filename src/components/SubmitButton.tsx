import React, { MouseEvent } from "react";
import { formFields } from "./LogInForm";

type Props = {
  formData: formFields;
  text: string;
};

function SubmitButton({ text, formData }: Props) {
  const validateForm = (e: React.MouseEvent<HTMLInputElement | MouseEvent>) => {
    e.stopPropagation();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !formData.password)
      window.alert("Email and password fields can not be empty!");
    else if (!emailPattern.test(formData.email))
      window.alert("Invalid email format!");
    else window.alert("Welcome back!");
  };
  return (
    <input
      type="submit"
      onClick={(e) => validateForm(e)}
      className="submitBtn"
      value={text}
    />
  );
}

export default SubmitButton;
