// Child Component - receives a single prop (message)
const ChildComponent = (props) => {
  return (
    <div style={{ border: "2px solid red", padding: "15px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{props.message}</strong></p>
    </div>
  );
};

export default ChildComponent;
