import "./sidebar.css";
import onDragStart from "./ondrag";
<onDragStart />;

const Output = () => {
  return (
    <div
      className="dndnode output-node"
      onDragStart={(event) => onDragStart(event, "output")}
      draggable
    >
      Output
    </div>
  );
};
export default Output;
