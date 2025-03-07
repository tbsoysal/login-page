import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PageToggler from "./components/PageToggler";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "signup">("login");
  return (
    <>
      <Header currentPage={currentPage} />
      <PageToggler currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "login" ? <LogInForm /> : <SignUpForm />}
    </>
  );
}

export default App;
