import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

function LogInForm() {
  return (
    <form>
      <InputBox
        textField={"Email"}
        inputType={"email"}
        placeHolder={"Enter your email"}
      />
      <InputBox
        textField={"Password"}
        inputType={"password"}
        placeHolder={"Enter password"}
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
      <SubmitButton text="Login" />
    </form>
  );
}

export default LogInForm;
