import React from "react";

type Props = {
  currentPage: "login" | "signup";
  setCurrentPage: React.Dispatch<React.SetStateAction<"login" | "signup">>;
};

function PageToggler({ currentPage, setCurrentPage }: Props) {
  return (
    <div className="toggler">
      <span
        className={`option ${currentPage === "login" ? "active" : ""}`}
        onClick={() => setCurrentPage("login")}
      >
        Login
      </span>
      <span
        className={`option ${currentPage === "signup" ? "active" : ""}`}
        onClick={() => setCurrentPage("signup")}
      >
        Sign up
      </span>
    </div>
  );
}

export default PageToggler;
