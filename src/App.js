import { useState } from "react";
import Personal from "./components/Personal.js";
import Button from "@material-ui/core/Button";
//all this component is doing is housing the other components and running state if needed
function App() {
  const [input, setInput] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }} className='App'>
      <Personal />

      {/* put in own module */}
      <div>
        <h1>CV Application</h1>
      </div>
    </div>
  );
}

export default App;
