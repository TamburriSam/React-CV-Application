import Personal from "./components/Personal.js";
import Education from "./components/Education.js";

//all this component is doing is housing the other components and running state if needed
function App() {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }} className='App'>
      <Personal />
    </div>
  );
}

export default App;
