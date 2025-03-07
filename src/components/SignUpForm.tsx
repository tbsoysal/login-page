import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

function SignUpForm() {
  return (
    <form>
      <InputBox
        textField={"Full Name"}
        inputType={"text"}
        placeHolder={"Enter your name"}
      />
      <InputBox
        textField={"Email"}
        inputType={"email"}
        placeHolder={"Enter your email"}
      />
      <InputBox
        textField={"Password"}
        inputType={"password"}
        placeHolder={"Create a password"}
      />
      <InputBox
        textField={"Confirm"}
        inputType={"password"}
        placeHolder={"Rewrite password"}
      />
      <SubmitButton text="Sign up" />
    </form>
  );
}

export default SignUpForm;
