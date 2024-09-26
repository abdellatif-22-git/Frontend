import onDragStart from "../Node/ondrag";

const Para = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Para")}
      draggable
    >
      <svg width="34" height="32">
        <g transform="translate(0.5, 0.5)">
          <path
            d="M 1.6 22.2 L 6.4 7.8 L 30.4 7.8 L 25.6 22.2 Z"
            fill="rgb(241, 243, 244)"
            stroke="rgb(0, 0, 0)"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            pointerEvents="none"
          />
        </g>
      </svg>
    </div>
  );
};

export default Para;
