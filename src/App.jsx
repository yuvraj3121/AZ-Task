import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home";
import Options from "./components/options";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <Options setSelectedOption={setSelectedOption} />
      {selectedOption === "Upskill" ? <Home /> : <div></div>}
    </div>
  );
}

export default App;
