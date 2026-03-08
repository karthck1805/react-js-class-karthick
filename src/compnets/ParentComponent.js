import { useState } from "react";
import ChildComponent from "./ChildComponent";

// Parent Component - has a variable and passes it to Child
const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <p>Variable value: <strong>{message}</strong></p>
      
      <button onClick={() => setMessage("Welcome!")}>
        Change Message
      </button>

      {/* Passing single prop 'message' to Child Component */}
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
