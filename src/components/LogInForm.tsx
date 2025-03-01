import InputBox from "./InputBox";

function LogInForm() {
  return (
    <form>
      <InputBox textField={"Email"} inputType={"email"} />
      <InputBox textField={"Password"} inputType={"password"} />
    </form>
  );
}

export default LogInForm;
