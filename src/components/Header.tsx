type Props = {
  currentPage: "login" | "signup";
};

function Header({ currentPage }: Props) {
  return (
    <header>
      <p className="label" onClick={() => location.reload()}>
        Done
      </p>
      <h2 className="heading">
        {currentPage === "login" ? "LOGIN" : "SIGNUP"}
      </h2>
    </header>
  );
}

export default Header;
