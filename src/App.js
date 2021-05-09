import { useState } from "react";
import Personal from "./components/Personal.js";
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
    <div className='App'>
      <Personal />
    </div>
  );
}

export default App;
