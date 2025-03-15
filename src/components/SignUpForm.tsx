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
      fullname: "",
      email: "",
      password: "",
      confirm: "",
    };
    if (!formData.email || !emailPattern.test(formData.email))
      errorObj.email = "Invalid email!";

    if (!formData.password) errorObj.password = "Invalid password!";

    if (!formData.fullname) errorObj.fullname = "Invalid name!";

    if (formData.password !== formData.confirm) {
      errorObj.confirm = "Passwords does not match!";
    }

    setFormErrors(errorObj);
  };
  return (
    <form>
      <InputBox
        textField={"Full Name"}
        inputType={"text"}
        placeHolder={"Enter your name"}
        setFormData={setFormData}
        inputError={formErrors.fullname}
      />
      <InputBox
        textField={"Email"}
        inputType={"email"}
        placeHolder={"Enter your email"}
        setFormData={setFormData}
        inputError={formErrors.email}
      />
      <InputBox
        textField={"Password"}
        inputType={"password"}
        placeHolder={"Create a password"}
        setFormData={setFormData}
        inputError={formErrors.password}
      />
      <InputBox
        textField={"Confirm"}
        inputType={"password"}
        placeHolder={"Rewrite password"}
        setFormData={setFormData}
        inputError={formErrors.confirm}
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
