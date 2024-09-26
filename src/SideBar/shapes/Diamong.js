import onDragStart from "../Node/ondrag";

const Diamond = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Diamond")}
      draggable
    >
      <svg
        style={{
          overflow: "hidden",
          width: "34px",
          height: "32px",
          display: "block",
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <g style={{ pointerEvents: "none" }}>
          <g style={{ pointerEvents: "none" }}></g>
          <g style={{ pointerEvents: "none" }}>
            <g
              transform="translate(0.5,0.5)"
              style={{ visibility: "visible", pointerEvents: "none" }}
            >
              <path
                d="M 16 1.4 L 29.6 15 L 16 28.6 L 2.4 15 Z"
                fill="rgb(241, 243, 244)"
                stroke="rgb(0, 0, 0)"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                style={{ pointerEvents: "none" }}
              />
            </g>
          </g>
          <g style={{ pointerEvents: "none" }}></g>
          <g style={{ pointerEvents: "none" }}></g>
        </g>
      </svg>
    </div>
  );
};

export default Diamond;
