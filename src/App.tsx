import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PageToggler from "./components/PageToggler";
import LogInForm from "./components/LogInForm";
import SubmitButton from "./components/SubmitButton";

function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "signup">("login");
  return (
    <>
      <Header currentPage={currentPage} />
      <PageToggler currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <LogInForm />
      <SubmitButton text={"Login"} />
    </>
  );
}

export default App;
