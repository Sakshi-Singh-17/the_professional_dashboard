import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked");
    setName(" ");
  };

  return (
    <div>
  
      <div data-testid="card">
        <h1>React Testing Project</h1>
      </div>
  
      <input  type="text" placeholder="Enter your name"   value={name}  onChange={(e) => setName(e.target.value)}/>

      <button onClick={handleClick}> Click Me</button>
       
      <p>{message}</p>
    </div>
  );
}

export default App;
