import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  const handleClear = () => {
    setValue(0);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayısı : {value}</div>
      <button onClick={handleClick}>Kurs Sıfırla</button>
    </div>
  );
}

export default App;
