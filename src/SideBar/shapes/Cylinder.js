import onDragStart from "../Node/ondrag";

const Cylinder = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Cylinder")}
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
                <path
                  d="M 5.8 6.5 C 5.8 3.68 10.37 1.4 16 1.4 C 18.71 1.4 21.3 1.94 23.21 2.89 C 25.13 3.85 26.2 5.15 26.2 6.5 L 26.2 23.5 C 26.2 26.32 21.63 28.6 16 28.6 C 10.37 28.6 5.8 26.32 5.8 23.5 Z"
                  fill="rgb(241, 243, 244)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 26.2 6.5 C 26.2 9.32 21.63 11.6 16 11.6 C 10.37 11.6 5.8 9.32 5.8 6.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="9.3"
                  strokeMiterlimit="10"
                  visibility="hidden"
                  style={{ pointerEvents: "none" }}
                ></path>
                <path
                  d="M 26.2 6.5 C 26.2 9.32 21.63 11.6 16 11.6 C 10.37 11.6 5.8 9.32 5.8 6.5"
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

export default Cylinder;
