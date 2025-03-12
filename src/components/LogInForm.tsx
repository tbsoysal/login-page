import { useState } from "react";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

export interface formFields {
  email: string;
  password: string;
}

const defaultFormInputs = {
  email: "",
  password: "",
};

function LogInForm() {
  const [formData, setFormData] = useState<formFields>(defaultFormInputs);
  return (
    <form>
      <InputBox
        textField={"Email"}
        inputType={"email"}
        placeHolder={"Enter your email"}
        setFormData={setFormData}
      />
      <InputBox
        textField={"Password"}
        inputType={"password"}
        placeHolder={"Enter password"}
        setFormData={setFormData}
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
      <SubmitButton formData={formData} text="Login" />
    </form>
  );
}

export default LogInForm;
