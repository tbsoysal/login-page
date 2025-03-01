import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PageToggler from "./components/PageToggler";
import LogInForm from "./components/LogInForm";

function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "signup">("login");
  return (
    <>
      <Header />
      <PageToggler currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <LogInForm />
    </>
  );
}

export default App;
