import onDragStart from "../Node/ondrag";

const Triangle = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Triangle")}
      draggable
    >
      <div className="geItem" style={{ overflow: "hidden", width: "34px", height: "32px", padding: "1px" }}>
        <svg
          style={{
            left: "1px",
            top: "1px",
            width: "32px",
            height: "30px",
            display: "block",
            position: "relative",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <g style={{ pointerEvents: "none" }}>
            <g style={{ pointerEvents: "none" }}></g>
            <g style={{ pointerEvents: "none" }}>
              <g transform="translate(0.5,0.5)" style={{ visibility: "visible", pointerEvents: "none" }}>
                <path
                  d="M 5.8 1.4 L 26.2 15 L 5.8 28.6 Z"
                  fill="rgb(241, 243, 244)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  style={{ pointerEvents: "none" }}
                ></path>
              </g>
            </g>
            <g style={{ pointerEvents: "none" }}></g>
            <g style={{ pointerEvents: "none" }}></g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Triangle;
