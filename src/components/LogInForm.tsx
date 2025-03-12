import { useState } from "react";
import InputBox from "./InputBox";

export interface formFields {
  fullname?: string;
  email: string;
  password: string;
  confirm?: string;
}

export interface errors {
  fullname?: string;
  email: string;
  password: string;
  confirm?: string;
}

function LogInForm() {
  const [formData, setFormData] = useState<formFields>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<errors>({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const validateForm = (e: React.MouseEvent<HTMLInputElement | MouseEvent>) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let errorObj = {
      email: "",
      password: "",
    };
    if (!formData.email || !emailPattern.test(formData.email))
      errorObj.email = "Invalid email!";

    if (formData.password.length < 4) errorObj.password = "Invalid password!";

    setFormErrors(errorObj);
  };
  return (
    <form>
      <InputBox
        textField={"Email"}
        inputType={"email"}
        placeHolder={"Enter your email"}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <InputBox
        textField={"Password"}
        inputType={"password"}
        placeHolder={"Enter password"}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <p className="rememberText">
        Remember me{" "}
        <span
          className="toggleContainer"
          onClick={(e) => e.currentTarget.classList.toggle("off")}
        >
          <span className="circle"></span>
        </span>
      </p>
      <input
        type="submit"
        onClick={(e) => validateForm(e)}
        className="submitBtn"
        value="Submit"
      />
    </form>
  );
}

export default LogInForm;
