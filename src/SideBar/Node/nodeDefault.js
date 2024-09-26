import "./sidebar.css";
import onDragStart from "./ondrag";
<onDragStart />;
const Default = () => {
  return (
    <div
      className="dndnode default-node"
      onDragStart={(event) => onDragStart(event, "default")}
      draggable
    >
      Default
    </div>
  );
};
export default Default;
