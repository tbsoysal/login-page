import InputBox from "./InputBox";

function LogInForm() {
  return (
    <form>
      <InputBox textField={"Email"} inputType={"email"} />
      <InputBox textField={"Password"} inputType={"password"} />
      <p className="rememberText">
        Remember me{" "}
        <span
          className="toggleContainer"
          onClick={(e) => e.currentTarget.classList.toggle("off")}
        >
          <span className="circle"></span>
        </span>
      </p>
    </form>
  );
}

export default LogInForm;
