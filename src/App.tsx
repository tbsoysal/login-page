import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PageToggler from "./components/PageToggler";

function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "signup">("login");
  return (
    <>
      <Header />
      <PageToggler currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
