import onDragStart from "../Node/ondrag";

const Actor = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Actor")}
      draggable
    >
      <div
        className="geItem"
        style={{
          overflow: "hidden",
          width: "34px",
          height: "32px",
          padding: "1px",
          opacity: 1,
        }}
      >
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
              <g
                transform="translate(0.5,0.5)"
                style={{ visibility: "visible", pointerEvents: "none" }}
              >
                <ellipse
                  cx="16"
                  cy="4.88"
                  rx="3.375"
                  ry="3.375"
                  fill="rgb(241, 243, 244)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1.3"
                  style={{ pointerEvents: "none" }}
                ></ellipse>
                <path
                  d="M 16 8.25 L 16 19.5 M 16 10.5 L 9.25 10.5 M 16 10.5 L 22.75 10.5 M 16 19.5 L 9.25 28.5 M 16 19.5 L 22.75 28.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="9.3"
                  strokeMiterlimit="10"
                  visibility="hidden"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 16 8.25 L 16 19.5 M 16 10.5 L 9.25 10.5 M 16 10.5 L 22.75 10.5 M 16 19.5 L 9.25 28.5 M 16 19.5 L 22.75 28.5"
                  fill="none"
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

export default Actor;
