import onDragStart from "../Node/ondrag";

const Note = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Note")}
      draggable
    >
      <div
        className="geItem"
        style={{
          overflow: "hidden",
          width: "34px",
          height: "32px",
          padding: "1px",
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
                <path
                  d="M 5.2 1.5 L 18.7 1.5 L 26.8 9.6 L 26.8 28.5 L 5.2 28.5 L 5.2 1.5 Z"
                  fill="rgb(241, 243, 244)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 18.7 1.5 L 18.7 9.6 L 26.8 9.6 Z"
                  fillOpacity="0.05"
                  fill="#000000"
                  stroke="none"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 18.7 1.5 L 18.7 9.6 L 26.8 9.6"
                  fill="none"
                  stroke="white"
                  strokeWidth="9.3"
                  strokeMiterlimit="10"
                  visibility="hidden"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 18.7 1.5 L 18.7 9.6 L 26.8 9.6"
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

export default Note;
