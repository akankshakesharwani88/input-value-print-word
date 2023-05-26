import "./styles.css";
import { useEffect, useState } from "react";
import { useDeBounce } from "./hooks";
export default function App() {
  const [value, setValue] = useState("");
  const debouncingValue = useDeBounce(value);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(debouncingValue);
  }, [debouncingValue]);
  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
