import onDragStart from "../Node/ondrag";

const Hexa = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Hexa")}
      draggable
    >
      <div
        className="geItem"
        style={{ overflow: "hidden", width: "34px", height: "32px", padding: "1px", opacity: "1" }}
      >
        <svg
          style={{ width: "32px", height: "30px", display: "block", position: "relative", overflow: "hidden", pointerEvents: "none" }}
        >
          <path
            d="M 6.4 5.4 L 25.6 5.4 L 30.4 15 L 25.6 24.6 L 6.4 24.6 L 1.6 15 Z"
            fill="rgb(241, 243, 244)"
            stroke="rgb(0, 0, 0)"
            strokeWidth="1.3"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hexa;
