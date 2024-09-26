import onDragStart from "../Node/ondrag";

const Cloud = () => {
  return (
    <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "Cloud")}
      draggable
    >
      <div
        className="geItem"
        style={{
          overflow: "hidden",
          width: "36px",
          height: "32px",
          padding: "1px",
          transform : "translateY(-30%) translateX(-10%)"
        }}
      >
        <svg
          style={{
            left: "1px",
            top: "1px",
            width: "40px",
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
                  d="
                    M10,15
                    C10,10 15,8 20,10
                    C25,8 30,10 30,15
                    C32,15 35,18 35,20
                    C35,22 32,25 30,25
                    H10
                    C8,25 5,22 5,20
                    C5,18 8,15 10,15
                    Z
                  "
                  fill="rgb(241, 243, 244)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1.3"
                  style={{ pointerEvents: "none" }}
                />
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

export default Cloud;