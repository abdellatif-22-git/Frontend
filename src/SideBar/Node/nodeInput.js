import "./sidebar.css";
import onDragStart from "./ondrag";
<onDragStart />;
const Input = () => {
  return (
    <div
      className="dndnode input-node"
      onDragStart={(event) => onDragStart(event, "input")}
      draggable
    >
      Input
    </div>
  );
};
export default Input;
