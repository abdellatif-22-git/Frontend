import "./sidebar.css";
import onDragStart from "./ondrag";
<onDragStart />;
const Resize = () => {
  return (
    <div
      className="dndnode annotation-node"
      onDragStart={(event) => onDragStart(event, "ResizableNodeSelected")}
      draggable
    >
      Resize
    </div>
  );
};
export default Resize;
