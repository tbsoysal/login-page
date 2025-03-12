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
      <input type="submit" className="submitBtn" value="Sign up" />
    </form>
  );
}

export default SignUpForm;
