import InputBox from "./InputBox";

function SignUpForm() {
  return (
    <form>
      <InputBox textField={"Full Name"} inputType={"text"} />
      <InputBox textField={"Email"} inputType={"email"} />
      <InputBox textField={"Password"} inputType={"password"} />
      <InputBox textField={"Confirm"} inputType={"password"} />
    </form>
  );
}

export default SignUpForm;
