import { useState } from "react";
import InputBox from "./InputBox";
import { errors, formFields } from "./LogInForm";

function SignUpForm() {
  const [formData, setFormData] = useState<formFields>({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
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
        textField={"Full Name"}
        inputType={"text"}
        placeHolder={"Enter your name"}
        setFormData={setFormData}
        formErrors={formErrors}
      />
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
        placeHolder={"Create a password"}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <InputBox
        textField={"Confirm"}
        inputType={"password"}
        placeHolder={"Rewrite password"}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <input
        onClick={(e) => validateForm(e)}
        type="submit"
        className="submitBtn"
        value="Sign up"
      />
    </form>
  );
}

export default SignUpForm;
